from django.urls import path
from . import views

urlpatterns = [
    path('', views.accueil, name='accueil'),
    path('offres/', views.offres, name='offre')

]
