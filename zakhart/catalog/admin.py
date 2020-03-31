from django.contrib import admin

from .models import Author, Product, Genre


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', )
    fields = ['name', 'genre']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'genre')
    fields = ['title', 'author', 'genre', 'summary', ]


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('name', )