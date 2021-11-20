from django.urls import path
from .views import RegisterPage, LoginPage, UserDetailView

urlpatterns = [
    path('register/', RegisterPage.as_view()),
    path('login/', LoginPage.as_view()),
    path("<int:id>/", UserDetailView.as_view()),
]
