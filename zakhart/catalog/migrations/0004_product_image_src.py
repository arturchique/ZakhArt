# Generated by Django 2.2.10 on 2020-03-31 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0003_author_genre'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_src',
            field=models.CharField(max_length=300, null=True),
        ),
    ]