from django.shortcuts import render

from rest_framework import views, response, status, exceptions
from rest_framework import filters
from rest_framework import generics

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

class PersonaUserView(views.APIView):

    def get_persona_by_user(self, user):
        try:
            return Persona.objects.get(user=user)
        except Persona.DoesNotExist:
            raise exceptions.NotFound(detail="Profile does not exist")
    

    def get(self, _request, user):
        persona = self.get_persona_by_user(user)
        serialized_persona = PersonaSerializer(persona)
        return response.Response(serialized_persona.data, status=status.HTTP_200_OK)

class PersonaListDetailfilter(generics.ListAPIView):

    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['age', 'city', 'gender', 'sexuality', 'occupation']

# class CommentPersonaView(views.APIView):

#     def get_comment_by_persona(self, id):
#         try:
#             return Comment.objects.get(id=id)
#         except Comment.DoesNotExist:
#             raise exceptions.NotFound(detail="Comments don't exist")

#     def get(self, _request, id):
#         comments = self.get_comment_by_persona(id)
#         serialized_comment = CommentSerializer(comments)
#         return response.Response(serialized_comment.data, status=status.HTTP_200_OK)

    # def post(self, request):
    #     print(request.data)
    #     persona_to_add = PersonaSerializer(data=request.data)
    #     if persona_to_add.is_valid():
    #         persona_to_add.save()
    #         return response.Response(persona_to_add.data, status=status.HTTP_201_CREATED)
    #     return response.Response(persona_to_add.errors, status=status.HTTP_400_BAD_REQUEST)    

# class CommentView(views.APIView):

#     def get_comment_by_id(self, id):
#         try:
#             return Comment.objects.get(id=id)
#         except Comment.DoesNotExist:
#             raise exceptions.NotFound(detail="Comment does not exist")

#     def get(self, _request, id):
#         comment = self.get_comment_by_id(id)
#         serialized_comment = CommentSerializer(comment)
#         return response.Response(serialized_comment.data, status=status.HTTP_200_OK)

#     def post(self, request, id):
#         print(request.data)
#         comment_to_add = CommentSerializer(data=request.data)
#         if comment_to_add.is_valid():
#             comment_to_add.save()
#             return response.Response(comment_to_add.data, status=status.HTTP_201_CREATED)
#         return response.Response(comment_to_add.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, _request, id):
    #     comment = self.get_comment_by_id(id)
    #     comment.delete()
    #     return response.Response(status=status.HTTP_204_NO_CONTENT)

    # def put(self, request, id):
    #     comment = self.get_comment_by_id(id)
    #     updated_comment = CommentSerializer(comment, data=request.data)
    #     if updated_comment.is_valid():
    #         updated_comment.save()
    #         return response.Response(updated_comment.data, status=status.HTTP_202_ACCEPTED)
    #     return response.Response(updated_comment.errors, status=status.HTTP_400_BAD_REQUEST)