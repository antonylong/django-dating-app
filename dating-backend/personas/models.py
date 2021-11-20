from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _



class Persona(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE, null=True
    )
    name = models.CharField(max_length=100)
    age = models.CharField(max_length=3)
    height = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    Male = 'MAL'
    Female = 'FEM'
    Nonbinary = 'NON'
    Other = 'OTH'
    GENDER_CHOICE = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Nonbinary', 'Non-Binary'),
        ('Other', 'Other'),
    ]
    gender = models.CharField(
        max_length=9, choices=GENDER_CHOICE, default="Other")

    # STRAIGHT = 'STR'
    # GAY = 'GAY'
    # BISEXUAL = 'BI'
    # ASEXUAL = 'ASX'
    # PANSEXUAL = 'PAN'
    # OTHER = 'OTH'
    SEXUALITY_CHOICE = [
        ('Straight', 'Straight'),
        ('Gay', 'Gay'),
        ('Bisexual', 'Bisexual'),
        ('Asexual', 'Asexual'),
        ('Pansexual', 'Pansexual'),
        ('Other', 'Other'),
    ]
    sexuality = models.CharField(
        max_length=9, choices=SEXUALITY_CHOICE, default="Other")

    occupation = models.CharField(max_length=50)
    bio = models.CharField(max_length=500)
    profile_pic = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return f"{self.name} ({self.id})"
