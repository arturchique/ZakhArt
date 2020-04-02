from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^products/(?P<pk>\d+)$', views.ProductDetailView.as_view(), name='product-detail'),
]