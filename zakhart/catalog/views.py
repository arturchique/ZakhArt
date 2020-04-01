from django.shortcuts import render
from .models import Product, Genre, Author


def index(request):
    link_list = [ob.image_src for ob in Product.objects.all()]
    return render(
        request,
        'index.html',
        context={
            'link_list': link_list,
        },
    )