from rest_framework import viewsets
from .models import Cliente, Automovil
from practica9.serializer import ClienteSerializer, AutomovilSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class AutomovilViewSet(viewsets.ModelViewSet):
    queryset = Automovil.objects.all()
    serializer_class = AutomovilSerializer


