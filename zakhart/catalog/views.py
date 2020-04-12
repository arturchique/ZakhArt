from django.shortcuts import render
from .models import Product, Genre, Author
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import FormView


def index(request):
    link_list = [ob.image_src for ob in Product.objects.all()]
    url_list = [ob.id for ob in Product.objects.all()]
    title_list = [ob.title for ob in Product.objects.all()]
    summary_list = [ob.summary for ob in Product.objects.all()]
    author_list = [ob.author for ob in Product.objects.all()]
    cost_list = [ob.cost for ob in Product.objects.all()]
    genre_list = [ob.genre for ob in Product.objects.all()]
    products = Product.objects.all()
    return render(
        request,
        'index.html',
        context={
            'products': products,
            'link_list': link_list,
            'summary_list': summary_list,
            'title_list': title_list,
            'url_list': url_list,
            'cost_list': cost_list,
            'author_list': author_list,
            'genre_list': genre_list,
        },
    )


class RegisterFormView(FormView):
    form_class = UserCreationForm
    success_url = "/accounts/login/"
    template_name = "catalog/register.html"

    def form_valid(self, form):
        form.save()
        return super(RegisterFormView, self).form_valid(form)


class ProductListView(generic.ListView):
    model = Product


class AuthorListView(generic.ListView):
    model = Author


class ProductDetailView(generic.DetailView):
    model = Product


class AuthorDetailView(generic.DetailView):
    model = Author