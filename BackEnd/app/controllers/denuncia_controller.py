import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services import DenunciaService

class DenunciasContoller:
    @staticmethod
    def get_all_denuncias():
        return DenunciaService.get_all_denuncias()
    
    @staticmethod
    def get_denuncia_by_id(id):
        vecino = DenunciaService.get_denuncia_by_id(id)
        if vecino:
            return vecino, 200
        
        return "error: No se ha encontrado un usuario que corresponda", 404
    
    @staticmethod
    def create_denuncia(data):
        try:
            nuevo_vecino = DenunciaService.create_denuncia(data)
            return nuevo_vecino, 201
        except Exception as e:
            return {"error": str(e)}, 400
        
    @staticmethod
    def update_denuncia(id, data):
        updated_usuario = DenunciaService.update_denuncia(id, data)
        if updated_usuario:
            return updated_usuario, 200
        
        return "No se ha podido actualizar el usuario", 404
    
    @staticmethod
    def delete_denuncia(id):
        deleted_usuario = DenunciaService.delete_denuncia(id)
        if deleted_usuario:
            return deleted_usuario, 200
        
        return "No se ha podido eliminar el usuario", 404
    
    @staticmethod
    def get_denuncias_by_vecino(documento):
        denuncias = DenunciaService.get_denuncias_by_vecino(documento)
        if denuncias:
            return denuncias, 200
        
        return "no se han encontrado denuncias para el vecino", 404
    
    @staticmethod
    def get_denuncias_by_sitio(id):
        denuncias = DenunciaService.get_denuncias_by_sitio(id)
        if denuncias:
            return denuncias, 200
        
        return "no se han encontrado denuncias para el sitio", 404