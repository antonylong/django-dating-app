from django.urls import path
from .views import PersonaListView, index

urlpatterns = [
    path("", PersonaListView.as_view()),
    path("view/", index),
]
