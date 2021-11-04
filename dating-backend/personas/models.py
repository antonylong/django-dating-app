from django.db import models


class Persona(models.Model):
    name = models.CharField(max_length=50)
    age = models.CharField(max_length=50)
    height = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    sexuality = models.CharField(max_length=50)
    occupation = models.CharField(max_length=50)
    bio = models.CharField(max_length=500)
    profile_pic = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name} ({self.id}"
