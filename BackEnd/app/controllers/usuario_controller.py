import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import VecinoService, PersonalService

#---------------------------VECINO---------------------------------#
class VecinoController:
    @staticmethod
    def get_all_vecino():
        return VecinoService.get_all_vecino()
    
    @staticmethod
    def get_vecino_by_id(id):
        vecino = VecinoService.get_vecino_by_id(id)
        if vecino:
            return vecino, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404
    
    @staticmethod
    def create_vecino(data):
        try:
            nuevo_vecino = VecinoService.create_vecino(data)
            return nuevo_vecino, 201
        except Exception as e:
            return {"error": str(e)}, 400
        
    @staticmethod
    def update_vecino(id, data):
        updated_usuario = VecinoService.update_vecino(id, data)
        if updated_usuario:
            return updated_usuario, 200
        
        return "No se ha podido actualizar el usuario", 404
    
    @staticmethod
    def delete_vecino(id):
        deleted_usuario = VecinoService.delete_vecino(id)
        if deleted_usuario:
            return deleted_usuario, 200
        
        return "No se ha podido eliminar el usuario", 404

#---------------------------PERSONAL--------------------------------#

class PersonalController:
    @staticmethod
    def get_all_personal():
        return PersonalService.get_all_personal()
    
    @staticmethod
    def get_personal_by_legajo(legajo):
        personal = PersonalService.get_personal_by_legajo(legajo)
        if personal:
            return personal, 200
        return {"error": "No se ha encontrado un personal que corresponda"}, 404
    
    @staticmethod
    def create_personal(data):
        try:
            nuevo_personal = PersonalService.create_personal(data)
            return nuevo_personal, 201
        except Exception as e:
            return {"error": str(e)}, 400
        
    @staticmethod
    def update_personal(legajo, data):
        updated_personal = PersonalService.update_personal(legajo, data)
        if updated_personal:
            return updated_personal, 200
        return {"error": "No se ha podido actualizar el personal"}, 404
    
    @staticmethod
    def delete_personal(legajo):
        deleted_personal = PersonalService.delete_personal(legajo)
        if deleted_personal:
            return {"message": "Personal eliminado con éxito"}, 200
        return {"error": "No se ha podido eliminar el personal"}, 404