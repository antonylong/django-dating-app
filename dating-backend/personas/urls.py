from django.urls import path
from .views import CommentPersonaView, PersonaDetailView, PersonaListView, PersonaUserView, PersonaListDetailfilter, CommentView, index

urlpatterns = [
    path("", PersonaListView.as_view()),
    path("<int:id>/", PersonaDetailView.as_view()),
    path("myprofile/<int:user>/", PersonaUserView.as_view()), #by inputting user=8 i get profile=2 ciel.
    path('search/', PersonaListDetailfilter.as_view()),
    path('<int:id>/comment/', CommentPersonaView.as_view()), # i want to get profileID=2 and for that to get me ALL comments that have profile ID = 2. ;; right now, i get id=1 equal to commentID=1 
    path("view/", index),
]

