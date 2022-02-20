from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.accueil, name='accueil'),
    path('offres/', views.offres, name='offre'),
    path('calculator/', views.calculator, name='calculator'),
    path('concours/', views.concours, name='concours'),
    path('participantsList/', views.participantsList, name='participantsList'),
    path('participantsAjax/', views.participants, name='participantsAjax'),
]
