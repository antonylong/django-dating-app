from django.urls import path
from .views import PersonaDetailView, PersonaListView, PersonaUserView, index

urlpatterns = [
    path("", PersonaListView.as_view()),
    path("<int:id>/", PersonaDetailView.as_view()),
    path("myprofile/<int:id>/", PersonaUserView.as_view()),
    path("view/", index),
]
