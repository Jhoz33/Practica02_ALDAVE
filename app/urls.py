from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name = ''),
    path('prueba',views.prueba,name='prueba'),
]




