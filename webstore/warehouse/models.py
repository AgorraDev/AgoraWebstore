import uuid
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class Product(models.Model):
    ##Attributes of database model
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    onSale = models.BooleanField(default=False)

    image = models.ImageField(upload_to='products/', default='')
    alt_text = models.CharField(max_length=255, blank=True, help_text='A brief description of image')

    def __str__(self):
        return self.name
    
class Variant(models.Model):
    product = models.ForeignKey(Product, related_name='variants', on_delete=models.CASCADE)
    color = models.CharField(max_length=50, null=True, blank=True)
    size = models.CharField(max_length=50, null=True, blank=True)
    additional_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    stock_level = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.product.name} - {self.color} - {self.size}"
