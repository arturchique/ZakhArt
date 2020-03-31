from django.shortcuts import render
from .models import Product, Genre, Author


def index(request):
    obj = Product.objects.all()
    return render(
        request,
        'index.html',
        context={
            'obj': obj,
        },
    )
