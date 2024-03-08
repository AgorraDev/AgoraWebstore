from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.generics import ListAPIView

from .models import Product, Variant
from .serializers import ProductSerializer, VariantSerializer

def product_list(request):
    products = Product.objects.all()
    return render(request, 'warehouse/product_list.html', {'products': products})


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class VariantViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Variant.objects.all()
    serializer_class = VariantSerializer

