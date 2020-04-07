from django.db import models
from urllib.request import urlopen
from django.contrib.auth.models import User
from django.urls import reverse
import uuid


class Product(models.Model):
    """Model to present product of person in main page (just now in main)"""
    title = models.CharField(max_length=50)
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)
    summary = models.TextField(max_length=200)
    genre = models.ForeignKey('Genre', on_delete=models.SET_NULL, null=True)
    image_src = models.CharField(max_length=300, null=True)
    cost = models.BigIntegerField(help_text='Укажите цену товара', null=True)

    def get_absolute_url(self):
        """Returns url to product page"""
        return reverse('product-detail', args=[str(self.id)])

    def __str__(self):
        return self.title


class Genre(models.Model):
    """Model to present genre"""
    name = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.name


class Author(models.Model):
    """Model to present Author"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50, null=True)
    genre = models.ForeignKey('Genre', help_text="Выберите жанры, которые представляет автор", on_delete=models.SET_NULL, null=True)
    bio = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name