from rest_framework import serializers
from .models import Cliente, Automovil

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class AutomovilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Automovil
        fields = '__all__'
