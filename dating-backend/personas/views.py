from django.shortcuts import render

from rest_framework import views, response, status

# add serilaizer when done
from .serializers import PersonaSerializer
from .models import Persona

def index(request):
    list = Persona.objects.all()
    context = {"personas": list}
    return render(request, "personas/index.html", context)

# check serializer name matches

class PersonaListView(views.APIView):
    def get(self, request):
        personas = Persona.objects.all()
        serialized_persona = PersonaSerializer(personas, many=True)
        return response.Response(serialized_persona.data, status=status.HTTP_200_OK)

    def post(self, request):
        print(request.data)
        persona_to_add = PersonaSerializer(data=request.data)
        if persona_to_add.is_valid():
            persona_to_add.save()
            return response.Response(persona_to_add.data, status=status.HTTP_201_CREATED)
        return response.Response(persona_to_add.errors, status=status.HTTP_400_BAD_REQUEST)