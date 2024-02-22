from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.generics import ListAPIView

from .models import Product
from .serializers import ProductSerializer

def product_list(request):
    products = Product.objects.all()
    return render(request, 'warehouse/product_list.html', {'products': products})

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer