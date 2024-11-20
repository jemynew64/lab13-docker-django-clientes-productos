from rest_framework import viewsets
from .models import Cliente, Producto,Empleado
from .serializers import ClienteSerializer, ProductoSerializer ,EmpleadoSerializer

# ViewSet para Cliente
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    
class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

# ViewSet para Producto
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
