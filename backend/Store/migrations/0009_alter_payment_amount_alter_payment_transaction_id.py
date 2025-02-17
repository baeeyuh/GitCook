# Generated by Django 5.1.6 on 2025-02-17 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Store', '0008_alter_payment_amount_alter_payment_transaction_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='amount',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='payment',
            name='transaction_id',
            field=models.CharField(default='4a82eaa6f08f', max_length=20, unique=True),
        ),
    ]
