from flask import jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import RubroService

class RubroContoller:
    @staticmethod
    def get_all_rubros():
        return RubroService.get_all_rubros()
    
    @staticmethod
    def get_rubro_by_id(id):
        rubro = RubroService.get_rubro_by_id(id)
        if rubro:
            return rubro, 200
        
        return jsonify({'error': 'No se encontro el rubro'}), 400 
    