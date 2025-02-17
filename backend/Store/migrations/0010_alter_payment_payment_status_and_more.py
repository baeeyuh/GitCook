# Generated by Django 5.1.6 on 2025-02-17 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Store', '0009_alter_payment_amount_alter_payment_transaction_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='payment_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Processing', 'Processing'), ('Completed', 'Completed'), ('Cancelled', 'Cancelled')], default='Pending', max_length=20),
        ),
        migrations.AlterField(
            model_name='payment',
            name='transaction_id',
            field=models.CharField(default='e981e2fc7252', max_length=20, unique=True),
        ),
    ]
