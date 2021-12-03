# Generated by Django 3.2.9 on 2021-12-02 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_offer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offer',
            name='country',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='date',
        ),
        migrations.AddField(
            model_name='offer',
            name='description',
            field=models.TextField(max_length=20000, null=True),
        ),
    ]