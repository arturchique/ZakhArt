from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('products', views.ProductListView.as_view(), name='products'),
    re_path(r'^products/(?P<pk>\d+)$', views.ProductDetailView.as_view(), name='product-detail'),
]