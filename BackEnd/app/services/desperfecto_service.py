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


from models import Desperfecto

class DesperfectoService:
    @staticmethod
    def get_all_desperfectos():
        desperfectos = Desperfecto.query.all()
        json_desperfecto = [desperfecto.to_json() for desperfecto in desperfectos]
        return jsonify(json_desperfecto)

    @staticmethod
    def get_desperfecto_by_id(id):
        desperfecto = Desperfecto.query.get(id)
        return jsonify(desperfecto.to_json())
        
    