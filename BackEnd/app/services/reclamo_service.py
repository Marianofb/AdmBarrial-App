from flask import jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from config import db
from models import Reclamo

class ReclamoService:
    def get_all_reclamos():
        reclamos = Reclamo.query.all()
        json_reclamos = [reclamo.to_json() for reclamo in reclamos]
        return jsonify(json_reclamos)

    @staticmethod
    def get_reclamo_by_id(id):
        reclamo = Reclamo.query.get(id)
        return jsonify(reclamo.to_json())
    
    @staticmethod
    def get_reclamos_by_vecino(documento):
        reclamos = Reclamo.query.filter_by(documento=documento).all()
        json_reclamos = list(map(lambda x: x.to_json(), reclamos))
        return jsonify({"reclamos": json_reclamos})
    
    @staticmethod
    def get_reclamos_by_sitio(id):
        reclamos = Reclamo.query.filter_by(idSitio=id).all()
        json_reclamos = list(map(lambda x: x.to_json(), reclamos))
        return jsonify({"reclamos": json_reclamos})

    @staticmethod
    def get_reclamos_by_personal(id):
        reclamos = Reclamo.query.filter_by(legajo=id).all()
        json_reclamos = list(map(lambda x: x.to_json(), reclamos))
        return jsonify({"reclamos": json_reclamos})
    
    @staticmethod
    def create_reclamo(data):
        new_reclamo = Reclamo(
            documento=data['documento'],
            idSitio=data['idSitio'],
            idDesperfecto=data['idDesperfecto'],
            descripcion=data['descripcion'],
            estado=False,
            idReclamoUnificado=data.get('idReclamoUnificado'),
        )
        db.session.add(new_reclamo)
        db.session.commit()
        return jsonify(new_reclamo.to_json())
    
    @staticmethod
    def update_reclamo(id, data):
        try:
            reclamo = Reclamo.query.get(id)
            if reclamo:
                reclamo.documento = data.get('documento', reclamo.documento)
                reclamo.idSitio = data.get('idSitio', reclamo.idSitio)
                reclamo.idDesperfecto = data.get('idDesperfecto', reclamo.idDesperfecto)
                reclamo.descripcion = data.get('descripcion', reclamo.descripcion)
                reclamo.estado = data.get('estado', reclamo.estado)
                reclamo.idReclamoUnificado = data.get('idReclamoUnificado', reclamo.idReclamoUnificado)
                reclamo.legajo = data.get('legajo', reclamo.legajo)
                db.session.commit()
                return jsonify(reclamo.to_json()), 200
            else:
                return None
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
    
    @staticmethod
    def delete_reclamo(id):
        try:
            reclamo = Reclamo.query.get(id)
            if reclamo:
                db.session.delete(reclamo)
                db.session.commit()
                return {"message": "Reclamo eliminado con éxito"}, 200
            else:
                return {"error": f"No se encontró un reclamo con id {id}"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500