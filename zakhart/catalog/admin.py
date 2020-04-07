from django.contrib import admin

from .models import Author, Product, Genre


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'bio')
    fields = ['name', 'genre', 'bio', 'user']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'genre', 'cost')
    fields = ['title', 'author', 'genre', 'summary', 'image_src', 'cost']


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('name', )