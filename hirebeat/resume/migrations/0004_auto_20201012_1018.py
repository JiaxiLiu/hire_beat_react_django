# Generated by Django 3.0.7 on 2020-10-12 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0003_auto_20200929_2025'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='ats_findings_count',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='resume',
            name='rec_findings_count',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='resume',
            name='result_rate',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='resume',
            name='skills_match_count',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]