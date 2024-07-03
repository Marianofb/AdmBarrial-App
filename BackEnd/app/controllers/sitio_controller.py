from flask import jsonify

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import SitioService

class SitioController:
    @staticmethod
    def get_all_sitios():
        return SitioService.get_all_sitios()
    
    @staticmethod
    def get_sitio_by_id(id):
        sitio = SitioService.get_sitio_by_id(id)
        if sitio:
            return sitio, 200
        
        return jsonify({'error': 'No se encontro el sitio'}), 400 
    