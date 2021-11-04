from django.shortcuts import render

from rest_framework import views, response, status, exceptions

# add serilaizer when done
from .serializers import PersonaSerializer
from .models import Persona

def index(request):
    list = Persona.objects.all()
    context = {"personas": list}
    return render(request, "personas/index.html", context)

# check serializer name matches

class PersonaListView(views.APIView):
    def get(self, _request):
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

class PersonaDetailView(views.APIView):
    def get_persona_by_id(self, id):
        try:
            return Persona.objects.get(id=id)
        except Persona.DoesNotExist:
            raise exceptions.NotFound(detail="Profile does not exist")

    def get(self, _request, id):
        persona = self.get_persona_by_id(id)
        serialized_persona = PersonaSerializer(persona)
        return response.Response(serialized_persona.data, status=status.HTTP_200_OK)

    def delete(self, _request, id):
        persona = self.get_persona_by_id(id)
        persona.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, id):
        persona = self.get_persona_by_id(id)
        updated_persona = PersonaSerializer(persona, data=request.data)
        if updated_persona.is_valid():
            updated_persona.save()
            return response.Response(updated_persona.data, status=status.HTTP_202_ACCEPTED)
        return response.Response(updated_persona.errors, status=status.HTTP_400_BAD_REQUEST)