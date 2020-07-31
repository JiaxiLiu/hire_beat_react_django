# Generated by Django 3.0.7 on 2020-07-31 06:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0004_categorys_subcategory'),
        ('videos', '0023_auto_20200614_2102'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transcript',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transcript', models.CharField(blank=True, max_length=1000, null=True)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='questions.Question')),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='videos.Video')),
            ],
        ),
        migrations.CreateModel(
            name='Sentence',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.CharField(blank=True, max_length=500, null=True)),
                ('sentence', models.CharField(blank=True, max_length=500, null=True)),
                ('transcript', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='videos.Transcript')),
            ],
        ),
        migrations.CreateModel(
            name='Label',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.BooleanField(default=False)),
                ('sentence', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='videos.Sentence')),
                ('subCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='questions.SubCategory')),
            ],
        ),
    ]
