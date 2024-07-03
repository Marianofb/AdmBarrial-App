from flask import jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import ReclamoService

class ReclamoController:
    @staticmethod
    def get_all_reclamos():
        return ReclamoService.get_all_reclamos()
    
    @staticmethod
    def get_reclamo_by_id(id):
        reclamo_found = ReclamoService.get_reclamo_by_id(id)
        if reclamo_found:
            return reclamo_found, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404
    
    @staticmethod
    def get_reclamos_by_vecino(documento):
        reclamos = ReclamoService.get_reclamos_by_vecino(documento)
        if reclamos:
            return reclamos, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404
    
    @staticmethod
    def get_reclamos_by_sitio(id):
        reclamos = ReclamoService.get_reclamos_by_sitio(id)
        if reclamos:
            return reclamos, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404
    
    @staticmethod
    def get_reclamos_by_personal(id):
        reclamos = ReclamoService.get_reclamos_by_personal(id)
        if reclamos:
            return reclamos, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404

    @staticmethod
    def create_reclamo(data, files):
        if ReclamoService.create_reclamo(data, files):
            return jsonify({'exito': 'Al crear el reclamo'}), 201 
        
        return jsonify({'error': 'Al crear el reclamo'}), 400 
    
    @staticmethod
    def update_reclamo(id, data):
        updated_reclamo = ReclamoService.update_reclamo(id, data)
        if updated_reclamo:
            return updated_reclamo, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404
    
    @staticmethod
    def delete_reclamo(id):
        deleted_reclamo = ReclamoService.delete_reclamo(id)
        if deleted_reclamo:
            return deleted_reclamo, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404