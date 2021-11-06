from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from rest_framework import response, status
from .forms import CreateRegisterForm

# Create your views here.


def register(request):
    form = CreateRegisterForm()

    if request.method == 'POST':
        form = CreateRegisterForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'accounts/register.html', context)


def login(request):
    context = {}
    return response.Response(context.data, status=status.HTTP_201_CREATED)