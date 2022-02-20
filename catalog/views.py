import time

from django.shortcuts import render
from .models import Offer
from .form import ParticipantForm
from .models import Participant
from django.http import JsonResponse


def accueil(request):
    return render(request, 'catalog/accueil.html')


def offres(request):
    offers = Offer.objects.all()
    context = {'offers': offers}
    return render(request, 'catalog/offres.html', context)


def calculator(request):
    return render(request, 'catalog/calculator.html')


def concours(request):
    form = ParticipantForm(request.POST or None)
    context = {
        'form': form
    }
    if form.is_valid():
        form.save()

    return render(request, 'catalog/concoursForm.html', context)


def participantsList(request):
    participants = Participant.objects.all()
    context = {'particpant': participants}
    return render(request, 'catalog/participantsList.html', context)


def participants(request):
    participantsajax = Participant.objects.all()
    datapart = {"nom": [],
                "message": []}
    for obj in participantsajax:
        datapart["nom"].append(obj.nom)
        datapart["message"].append(obj.message)

    print(datapart)
    time.sleep(4)
    return JsonResponse({'participantsajax': datapart})
