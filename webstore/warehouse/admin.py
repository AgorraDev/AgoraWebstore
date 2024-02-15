from django.contrib import admin
from .models import Category, Product, Variant

class VariantInline(admin.TabularInline):
    model = Variant
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price')
    inlines = [VariantInline]

admin.site.register(Category)
admin.site.register(Product,ProductAdmin)