from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def schedule(request):
    return render(request, "schedule.html")

def flight(request):
    return render(request, "flight.html")

def carHotel(request):
    return render(request, "carHotel.html")

def restaurant(request):
    return render(request, "restaurant.html")

def cafe(request):
    return render(request, "cafe.html")

def leisure(request):
    return render(request, "leisure.html")

def sight(request):   
    return render(request, "sights.html")

def totalPrice(request):
    return render(request, "totalPrice.html") 
