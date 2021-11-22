from django.urls import path
from .views import PersonaDetailView, PersonaListView, PersonaUserView, PersonaListDetailfilter, index

urlpatterns = [
    path("", PersonaListView.as_view()),
    path("<int:id>/", PersonaDetailView.as_view()),
    path("myprofile/<int:user>/", PersonaUserView.as_view()), 
    path('search/', PersonaListDetailfilter.as_view()),
    path("view/", index),
]

