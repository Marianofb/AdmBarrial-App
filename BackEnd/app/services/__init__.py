import sys
from os.path import dirname, abspath

# Obtén el directorio del script actual
current_dir = dirname(abspath(__file__))

# Subir un nivel para alcanzar la carpeta 'app'
app_dir = dirname(current_dir)

# Añadir 'app' al sys.path
sys.path.append(app_dir)

from services.denuncia_service import DenunciaService
from services.reclamo_service import ReclamoService
from services.servicio_service import ServicioService
from services.usuario_service import VecinoService, PersonalService

#print("Funciona Service")