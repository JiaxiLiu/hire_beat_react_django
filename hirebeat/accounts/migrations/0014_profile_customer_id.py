# Generated by Django 3.0.7 on 2020-07-26 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_auto_20200721_0439'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='customer_id',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
