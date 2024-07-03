from sqlalchemy import select
from flask import jsonify, make_response, request
from werkzeug.utils import secure_filename

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from config import db
from models import Servicio, ServicioFoto

class ServicioService:
    @staticmethod
    def get_all_servicios():
        servicios = Servicio.query.all()
        servicios_data = []

        for servicio in servicios:
            fotos = ServicioFoto.query.filter_by(servicio_id=servicio.idServicio).all()
            fotos_data = [{'idFoto': foto.idFoto, 'filename': foto.filename} for foto in fotos]

            servicio_data = servicio.to_json()
            servicio_data['fotos'] = fotos_data
            servicios_data.append(servicio_data)

        return jsonify(servicios_data)

    @staticmethod
    def get_servicio_by_id(id):
        servicio = Servicio.query.get(id)
        fotos = ServicioFoto.query.filter_by(servicio_id=servicio.idServicio).all()
        fotos_data = [{'idFoto': foto.idFoto, 'filename': foto.filename} for foto in fotos]

        servicio_data = servicio.to_json()
        servicio_data['fotos'] = fotos_data

        return jsonify(servicio_data)
    
    @staticmethod
    def get_foto_by_id(id):
        foto = ServicioFoto.query.get(id)
        if not foto:
            return jsonify({'error': 'Foto no encontrada'}), 404
        
        response = make_response(foto.foto)
        response.headers.set('Content-Type', 'image/jpeg')  # Ajusta el tipo MIME según el tipo de imagen almacenada
        response.headers.set('Content-Disposition', 'inline', filename=foto.filename)
        return response

    @staticmethod
    def create_servicio(data, files):
        # Crear el nuevo servicio
        new_servicio = Servicio(
            tipo=data['tipo'],
            descripcion=data['descripcion'],
            estado=False
        )
        
        db.session.add(new_servicio)
        db.session.commit()

        fotos = []
        for file in files.getlist('files'):
            filename = secure_filename(file.filename)
            foto_data = file.read()
            new_foto = ServicioFoto(servicio_id=new_servicio.idServicio, foto=foto_data, filename=filename)
            db.session.add(new_foto)
            fotos.append(new_foto.to_json())

        db.session.commit()

        servicio_json = new_servicio.to_json()
        servicio_json['fotos'] = fotos
        return jsonify(servicio_json)

    @staticmethod
    def update_servicio(id, data):
        updated_servicio = db.session.execute(select(Servicio).filter_by(idServicio=id)).scalar_one_or_none()
        if updated_servicio:
            updated_servicio.estado = data['estado']
            db.session.commit()
        return jsonify(updated_servicio.to_json()), 200
    
    @staticmethod
    def delete_servicio(id):
        try:
            deleted_servicio = Servicio.query.get(id)
            if deleted_servicio:
                db.session.delete(deleted_servicio)
                db.session.commit()
                return {"message": "Vecino eliminado con éxito."}, 200
            else:
                return {"error": f"No se encontró un vecino con documento {id}"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500