# Generated by Django 2.2.10 on 2020-04-03 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0005_auto_20200402_1841'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='cost',
            field=models.BigIntegerField(help_text='Укажите цену товара', null=True),
        ),
    ]
