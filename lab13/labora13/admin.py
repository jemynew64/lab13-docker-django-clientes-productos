from django.contrib import admin
from .models import Cliente

admin.site.register(Cliente)

from .models import Empleado

admin.site.register(Empleado)

from .models import Producto

admin.site.register(Producto)