from rest_framework import serializers
from .models import Product, Variant

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'description', 'price', 'onSale', 'image', 'alt_text']

class VariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variant
        fields = ['color', 'size', 'stock']

