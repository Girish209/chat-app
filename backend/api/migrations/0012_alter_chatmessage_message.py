# Generated by Django 4.2.7 on 2023-12-17 01:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_chatmessage_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatmessage',
            name='message',
            field=models.CharField(max_length=1000000000),
        ),
    ]
