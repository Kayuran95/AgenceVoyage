from django.shortcuts import render
from .models import Offer


def accueil(request):
    return render(request, 'catalog/accueil.html')


def offres(request):
    offers = Offer.objects.all()
    context = {'offers': offers}
    return render(request, 'catalog/offres.html', context)


def calculator(request):
    return render(request, 'catalog/calculator.html')
