from django.contrib import admin
from .models import Category, Product, Variant

class VariantInline(admin.TabularInline):
    model = Variant
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price')
    inlines = [VariantInline]
    search_fields =('name',)

    def short_id(self, obj):
        return str(obj.id)[8]
    short_id.short_description = 'ID'

admin.site.register(Category)
admin.site.register(Product,ProductAdmin)
