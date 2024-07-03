from flask import jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import ServicioService


class ServicioController:
    @staticmethod
    def get_all_servicios():
        return ServicioService.get_all_servicios()

    @staticmethod
    def get_servicio_by_id(id):
        servicio_found = ServicioService.get_servicio_by_id(id)
        if servicio_found:
            return servicio_found, 200
        
        return jsonify({'error': 'Al buscar el servicio por id'}), 404 
    
    @staticmethod
    def get_foto_by_id(id):
        servicioFoto_data = ServicioService.get_foto_by_id(id)
        if servicioFoto_data:
            return servicioFoto_data, 200
        
        return jsonify({'error': 'Al buscar la foto por id'}), 404 

    @staticmethod
    def create_servicio(data, files):
      
        if ServicioService.create_servicio(data, files):
            return jsonify({'exito': 'Al crear el servicio'}), 201 
        
        return jsonify({'error': 'Al crear el servicio'}), 400 , 400
    
    @staticmethod
    def update_servicio(id, data):
        updated_servicio = ServicioService.update_servicio(id, data)
        if updated_servicio:
            return jsonify({'exito': 'Al actulizar el servicio'}) , 200

        return jsonify({'error': 'Al actulizar el servicio'}), 400 
    
    @staticmethod
    def delete_servicio(id):
        deleted_servicio = ServicioService.delete_servicio(id)
        if deleted_servicio:
            return jsonify({'error': 'Al borrar el servicio'}), 200
        
        return jsonify({'error': 'Al eliminar el servicio'}), 404
