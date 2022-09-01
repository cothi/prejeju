from django.db import models

class Cafe(models.Model):
    name = models.CharField(max_length=50)
    holiday = models.CharField(max_length=50, null=True)
    open_hour = models.CharField(max_length=50, null=True)
    menu = models.TextField()
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    signature = models.TextField()
    # photo = models.ImageField(blank=True, null=True)

class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    holiday = models.CharField(max_length=50, null=True)
    menu = models.TextField()
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    link = models.TextField()
    signature = models.TextField()

class Leisure(models.Model):
    name = models.CharField(max_length=50)
    holiday = models.CharField(max_length=50, null=True)
    menu = models.TextField()
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    link = models.TextField()
    detail = models.CharField(max_length=50)

class Sight(models.Model):
    name = models.CharField(max_length=50)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    tag = models.TextField()
    # photo = models.ImageField(blank=True, null=True)
