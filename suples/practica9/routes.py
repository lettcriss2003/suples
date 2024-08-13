from rest_framework.routers import DefaultRouter
from django.urls import path, include
from practica9.views import ClienteViewSet, AutomovilViewSet

router = DefaultRouter()

router.register(r'clientes', ClienteViewSet)
router.register(r'automoviles', AutomovilViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
