# Generated by Django 4.2.9 on 2024-03-01 19:12

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('warehouse', '0007_alter_product_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
