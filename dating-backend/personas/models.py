from django.db import models


class Persona(models.Model):
    name = models.CharField(max_length=100)
    age = models.CharField(max_length=3)
    height = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    MALE = 'MAL'
    FEMALE = 'FEM'
    NONBINARY = 'NON'
    OTHER = 'OTH'
    GENDER_CHOICE = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('nonB', 'Non-Binary'),
        ('other', 'Other'),
    ]
    gender = models.CharField(
        max_length=3, choices=GENDER_CHOICE, default=OTHER)

    STRAIGHT = 'STR'
    GAY = 'GAY'
    BISEXUAL = 'BI'
    ASEXUAL = 'ASX'
    PANSEXUAL = 'PAN'
    SEXUALITY_CHOICE = [
        ('straight', 'Straight'),
        ('gay', 'Gay'),
        ('bi', 'Bisexual'),
        ('asexual', 'Asexual'),
        ('pan', 'Pansexual'),
        ('other', 'Other'),
    ]
    sexuality = models.CharField(
        max_length=3, choices=SEXUALITY_CHOICE, default=OTHER)

    occupation = models.CharField(max_length=50)
    bio = models.CharField(max_length=500)
    profile_pic = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name} ({self.id})"
