# Generated by Django 3.2.7 on 2022-03-03 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('content', models.CharField(max_length=500, null=True)),
                ('theme_color', models.CharField(default='tomato', max_length=7)),
            ],
        ),
    ]
