
from django.contrib import admin
from django.urls import path, include

from practica9 import routes

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(routes)),
]
