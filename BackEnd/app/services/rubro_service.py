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


from models import Rubro


class RubroService:
    @staticmethod
    def get_all_rubros():
        rubros = Rubro.query.all()
        json_rubro = [rubro.to_json() for rubro in rubros]
        return jsonify(json_rubro)

    @staticmethod
    def get_rubro_by_id(id):
        rubro = Rubro.query.get(id)
        return jsonify(rubro.to_json())
        
    