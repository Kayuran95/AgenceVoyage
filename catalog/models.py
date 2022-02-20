from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models import DateTimeField
from django.urls import reverse


class User(AbstractUser):
    pass


class Offer(models.Model):
    """Cet objet représente un voyage."""
    name = models.CharField(max_length=200, null=True)
    description = models.TextField(max_length=20000, null=True)
    price = models.CharField(max_length=200, null=True)

    def __str__(self):
        """Cette fonction est obligatoirement requise par Django.
               Elle retourne une chaîne de caractère pour identifier l'instance de la classe d'objet."""
        return self.name


class Participant(models.Model):
    """Cet objet représente un participant."""
    nom = models.CharField(max_length=200, null=True)
    message = models.TextField(max_length=20000, null=True)
    email = models.CharField(max_length=200, null=True)

    def __str__(self):
        """Cette fonction est obligatoirement requise par Django.
                   Elle retourne une chaîne de caractère pour identifier l'instance de la classe d'objet."""
        return self.nom
