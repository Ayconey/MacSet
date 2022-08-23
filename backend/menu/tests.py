from django.test import TestCase
from .models import Product


# Create your tests here.

class ProductModelTestCase(TestCase):
    def setUp(self):
        Product.objects.create(
            Category='Smoothies & Shakes',
            Name="McFlurry with Reese's Peanut Butter Cups (Snack)",
            Calories=410,
            TotalFat=16,
            SaturatedFat=8,
            TransFat=0,
            Carbohydrates=57,
            Protein=10,
            Cholesterol=30,
            Sodium=200,
            DietaryFiber=1,
            Sugars=51,
            VitADaily=10,
            VitCDaily=0,
            CalciumDaily=30,
            IronDaily=4,
        )

    def test_product_created(self):
        self.assertTrue(Product.objects.all())