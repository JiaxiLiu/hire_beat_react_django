# Generated by Django 3.0.5 on 2020-05-07 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0009_auto_20200505_2240'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='title',
        ),
        migrations.AddField(
            model_name='video',
            name='q_description',
            field=models.CharField(default='Sample question', max_length=500),
        ),
    ]
