# Generated by Django 3.0.5 on 2020-05-18 01:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0011_auto_20200514_1415'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='tags',
        ),
    ]
