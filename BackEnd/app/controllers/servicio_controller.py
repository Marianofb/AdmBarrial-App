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
        
        return "No se ha encontrado un servicio que corresponda", 404
    
    @staticmethod
    def create_servicio(data):
        try:
            nuevo_servicio = ServicioService.create_servicio(data)
            return nuevo_servicio, 201
        except Exception as e:
            return {"error en la creacion del nuevo servicio": str(e)}, 400
    
    @staticmethod
    def update_servicio(id, data):
        updated_servicio = ServicioService.update_servicio(id, data)
        if updated_servicio:
            return updated_servicio, 200
        
        return "No se ha podido actualizar el servicio", 404
    
    @staticmethod
    def delete_servicio(id):
        deleted_servicio = ServicioService.delete_servicio(id)
        if deleted_servicio:
            return deleted_servicio, 200
        
        return "No se ha podido eliminar el servicio", 404
