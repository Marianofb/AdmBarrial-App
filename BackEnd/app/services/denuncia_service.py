from sqlalchemy import select
from flask import jsonify, make_response, request

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from config import db
from models import Denuncia, DenunciaFoto

class DenunciaService:
    @staticmethod
    def get_all_denuncias():
        denuncias = Denuncia.query.all()
        json_denuncias = [denuncia.to_json() for denuncia in denuncias]
        return jsonify(json_denuncias)

    @staticmethod
    def get_denuncia_by_id(id):
        denuncia = Denuncia.query.get(id)
        denuncia_json = denuncia.to_json()
        if denuncia:
            return jsonify(denuncia_json)
        else:
            return jsonify({"error": "Denuncia no encontrada"}), 404
        
    @staticmethod
    def get_denuncias_by_vecino(documento):
        denuncias = Denuncia.query.filter_by(documento=documento).all()
        json_denuncias = list(map(lambda x: x.to_json(), denuncias))
        return jsonify({"denuncias": json_denuncias})
        
    @staticmethod
    def get_denuncias_by_sitio(id):
        denuncias = Denuncia.query.filter_by(idSitio=id).all()
        json_denuncias = list(map(lambda x: x.to_json(), denuncias))
        return jsonify({"denuncias": json_denuncias})

    @staticmethod
    def create_denuncia(data, files):
        new_denuncia = Denuncia(
            documento=data['documento'],
            aceptaResponsabilidad = data['aceptarResponsabilidad'], 
            idSitio=data['idSitio'],
            servicioDenunciado=data['servicioDenunciado'],
            vecinoDenunciado=data['vecinoDenunciado'],
            descripcion=data['descripcion'],
            estado= "En Proceso"

            )
        
        db.session.add(new_denuncia)
        db.session.commit()
       
        fotos = []
        for file in files.getlist('files'):
            filename = file.filename
            foto_data = file.read()
            new_foto = DenunciaFoto(denuncia_id=new_denuncia.idDenuncias, foto=foto_data, filename=filename)
            db.session.add(new_foto)
            fotos.append(new_foto.to_json())

        db.session.commit()

        denuncia_json = new_denuncia.to_json()
        denuncia_json['fotos'] = fotos
        return jsonify(denuncia_json)

    @staticmethod
    def update_denuncia(id, data):
        updated_denuncia = Denuncia.query.get(id)
        if updated_denuncia:
            updated_denuncia.estado = data["estado"]
            db.session.commit()
            return jsonify(updated_denuncia.to_json()), 200
        else:
            return jsonify({"error": "Denuncia no encontrada"}), 404

    @staticmethod
    def delete_denuncia(id):
        denuncia = Denuncia.query.get(id)
        if denuncia:
            db.session.delete(denuncia)
            db.session.commit()
            return jsonify({"message": "Denuncia eliminada exitosamente"}), 200
        else:
            return jsonify({"error": "Denuncia no encontrada"}), 404   