from flask import jsonify, request
from sqlalchemy import null

import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)


from models import Sitio


class SitioService:
    @staticmethod
    def get_all_sitios():
        sitios = Sitio.query.all()
        json_sitios = [sitio.to_json() for sitio in sitios]
        return jsonify(json_sitios)

    @staticmethod
    def get_sitio_by_id(id):
        sitio = Sitio.query.get(id)
        return jsonify(sitio.to_json())
        
    