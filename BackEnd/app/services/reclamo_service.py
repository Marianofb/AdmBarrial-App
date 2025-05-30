from sqlalchemy import select
from flask import jsonify, make_response, request
from datetime import datetime

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from config import db
from models import Reclamo, ReclamoFoto, MovimientoReclamo

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
    def create_reclamoVecino(data, files):
        new_reclamo = Reclamo(
            documento=data['documento'],
            idSitio=data['idSitio'],
            idDesperfecto=data['idDesperfecto'],
            descripcion=data['descripcion'],
            estado="pendiente"
            #idReclamoUnificado=data.get('idReclamoUnificado'),
        )
        db.session.add(new_reclamo)
        db.session.commit()

        new_movimiento_reclamo = MovimientoReclamo(
            idReclamo = new_reclamo.idReclamo,
            responsable = new_reclamo.documento,
            causa = new_reclamo.descripcion,
            fecha = datetime.now()
        )

        db.session.add(new_movimiento_reclamo)
        db.session.commit()

        fotos = []
        for file in files.getlist('files'):
            filename = file.filename
            foto_data = file.read()
            new_foto = ReclamoFoto(reclamo_id=new_reclamo.idReclamo, foto=foto_data, filename=filename)
            db.session.add(new_foto)
            fotos.append(new_foto.to_json())

        db.session.commit()
        # Imprimir las fotos subidas para verificar
        print("Fotos subidas:", fotos)

        reclamo_json = new_reclamo.to_json()
        reclamo_json['fotos'] = fotos
        return jsonify(reclamo_json)
    
    @staticmethod
    def create_reclamoPersonal(data, files):
        new_reclamo = Reclamo(
            documento='00000000',
            idSitio=data['idSitio'],
            idDesperfecto=data['idDesperfecto'],
            descripcion=data['descripcion'],
            legajo=data['legajo'],
            estado="pendiente"
            #idReclamoUnificado=data.get('idReclamoUnificado'),
        )
        db.session.add(new_reclamo)
        db.session.commit()

        new_movimiento_reclamo = MovimientoReclamo(
            idReclamo = new_reclamo.idReclamo,
            responsable = new_reclamo.legajo,
            causa = new_reclamo.descripcion,
            fecha = datetime.now()
        )

        db.session.add(new_movimiento_reclamo)
        db.session.commit()

        fotos = []
        for file in files.getlist('files'):
            filename = file.filename
            foto_data = file.read()
            new_foto = ReclamoFoto(reclamo_id=new_reclamo.idReclamo, foto=foto_data, filename=filename)
            db.session.add(new_foto)
            fotos.append(new_foto.to_json())

        db.session.commit()
        # Imprimir las fotos subidas para verificar
        print("Fotos subidas:", fotos)

        reclamo_json = new_reclamo.to_json()
        reclamo_json['fotos'] = fotos
        return jsonify(reclamo_json)
    
    @staticmethod
    def update_reclamo(id, data):
        updated_reclamo = db.session.execute(select(Reclamo).filter_by(idReclamo=id)).scalar_one_or_none()
        if updated_reclamo:
            updated_reclamo.estado = data['estado']
            db.session.commit()

            new_movimiento_reclamo = MovimientoReclamo(
            idReclamo = updated_reclamo.idReclamo,
            responsable =  data['documentoUsuario'],
            causa = updated_reclamo.estado,
            fecha = datetime.now()
            )

            db.session.add(new_movimiento_reclamo)
            db.session.commit()

        return jsonify(updated_reclamo.to_json()), 200
    
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
    