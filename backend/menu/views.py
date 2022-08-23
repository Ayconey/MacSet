from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
# Create your views here.


class ProductsListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category')
        name = self.request.query_params.get('name')
        if category:
            queryset = queryset.filter(Category__istartswith=category)
        if name:
            queryset = queryset.filter(Name__icontains=name)
        return queryset


class ProductsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer