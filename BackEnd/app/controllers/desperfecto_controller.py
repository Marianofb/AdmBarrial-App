from flask import jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import DesperfectoService

class DesperfectoController:
    @staticmethod
    def get_all_desperfectos():
        return DesperfectoService.get_all_desperfectos()
    
    @staticmethod
    def get_desperfecto_by_id(id):
        desperfecto = DesperfectoService.get_desperfecto_by_id(id)
        if desperfecto:
            return desperfecto, 200
        
        return jsonify({'error': 'No se encontro el desperfecto'}), 400 
    