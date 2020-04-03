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
        },
    )


class RegisterFormView(FormView):
    form_class = UserCreationForm

    # Ссылка, на которую будет перенаправляться пользователь в случае успешной регистрации.
    # В данном случае указана ссылка на страницу входа для зарегистрированных пользователей.
    success_url = "/accounts/login/"

    # Шаблон, который будет использоваться при отображении представления.
    template_name = "catalog/register.html"

    def form_valid(self, form):
        # Создаём пользователя, если данные в форму были введены корректно.
        form.save()

        # Вызываем метод базового класса
        return super(RegisterFormView, self).form_valid(form)


class ProductListView(generic.ListView):
    model = Product


class AuthorListView(generic.ListView):
    model = Author


class ProductDetailView(generic.DetailView):
    model = Product


class AuthorDetailView(generic.DetailView):
    model = Author