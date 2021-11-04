from django.shortcuts import render

from .models import Persona

# Create your views here.


def index(request):
    list = Persona.objects.all()

    context = {"personas": list}

    return render(request, "personas/index.html", context)
