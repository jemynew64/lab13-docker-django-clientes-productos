# serializers.py
from rest_framework import serializers
from .models import Cliente
from .models import Producto

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'  # Puedes listar campos específicos si prefieres: ['id', 'nombre', 'apellidos', 'email']

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'  # Serializamos todos los campos