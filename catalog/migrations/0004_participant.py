# Generated by Django 3.2.9 on 2022-02-04 13:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0003_auto_20211202_1039'),
    ]

    operations = [
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=200, null=True)),
                ('message', models.TextField(max_length=20000, null=True)),
                ('email', models.CharField(max_length=200, null=True)),
            ],
        ),
    ]
