from django.shortcuts import render
from .models import Product, Genre, Author
from django.views import generic


def index(request):
    link_list = [ob.image_src for ob in Product.objects.all()]
    url_list = [ob.id for ob in Product.objects.all()]
    product = Product.objects.all()
    return render(
        request,
        'index.html',
        context={
            'link_list': link_list,
            'product': product,
            'url_list': url_list,
        },
    )


class ProductDetailView(generic.DetailView):
    model = Product