from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from labora13.views import ClienteViewSet, ProductoViewSet,EmpleadoViewSet

# Crea el router y registra el ViewSet
router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'empleado', EmpleadoViewSet)
router.register(r'productos', ProductoViewSet)  # Registro del ProductoViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Prefijo 'api' en la ruta
]
