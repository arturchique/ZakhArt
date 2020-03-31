from django.db import models
from urllib.request import urlopen
from django.urls import reverse
import uuid


class Product(models.Model):
    """Model to present product of person in main page (just now in main)"""
    title = models.CharField(max_length=50)
    author = models.ForeignKey('User', on_delete=models.SET_NULL, null=True)
    summary = models.TextField(max_length=200)
    genre = models.ForeignKey('Genre', on_delete=models.SET_NULL, null=True)
    
