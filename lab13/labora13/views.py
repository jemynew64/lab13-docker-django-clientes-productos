from rest_framework import viewsets
from .models import Cliente, Producto
from .serializers import ClienteSerializer, ProductoSerializer

# ViewSet para Cliente
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

# ViewSet para Producto
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
