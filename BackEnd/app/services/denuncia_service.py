from sqlalchemy import select
from flask import jsonify
from config import db

from models import Denuncia

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
    def create_denuncia(data):
        new_denuncia = Denuncia(
            documento=data['documento'],
            idSitio=data['idSitio'],
            descripcion=data['descripcion'],
            estado=data['estado'],
            aceptaResponsabilidad= 1
        )
        db.session.add(new_denuncia)
        db.session.commit()
        return jsonify(new_denuncia.to_json())

    @staticmethod
    def update_denuncia(id, data):
        updated_denuncia = Denuncia.query.get(id)
        if updated_denuncia:
            updated_denuncia.documento = data.get('documento', updated_denuncia.documento)
            updated_denuncia.idSitio = data.get('idSitio', updated_denuncia.idSitio)
            updated_denuncia.descripcion = data.get('descripcion', updated_denuncia.descripcion)
            updated_denuncia.estado = data.get('estado', updated_denuncia.estado)
            updated_denuncia.aceptaResponsabilidad = data.get('aceptaResponsabilidad', updated_denuncia.aceptaResponsabilidad)
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