# Generated by Django 5.0.1 on 2024-02-03 15:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('onSale', models.BooleanField(default=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='warehouse.category')),
            ],
        ),
        migrations.CreateModel(
            name='Variant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(blank=True, max_length=50, null=True)),
                ('size', models.CharField(blank=True, max_length=50, null=True)),
                ('additional_price', models.DecimalField(decimal_places=2, default=0, max_digits=10)),
                ('Product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='warehouse.product')),
            ],
        ),
    ]
