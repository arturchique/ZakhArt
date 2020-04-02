from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('products', views.ProductListView.as_view(), name='products'),
    path('authors', views.AuthorListView.as_view(), name='authors'),
    re_path(r'^products/(?P<pk>\d+)$', views.ProductDetailView.as_view(), name='product-detail'),
    re_path(r'^authors/(?P<pk>\d+)$', views.AuthorDetailView.as_view(), name='author-detail'),
]