from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombre = models.CharField(max_length=255)
    apellidos = models.CharField(max_length=255)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"

class Empleado(models.Model):
    nombre = models.CharField(max_length=255)
    apellidos = models.CharField(max_length=255)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"
    
    
class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre