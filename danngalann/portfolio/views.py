from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import  redirect

def index(request):
    return render(request, 'frontend/index.html')

@csrf_exempt
def email(request):
    subject = "Email subject"
    message = request.POST.get("message", "")
    email_from = request.POST.get("email", "")
    name = request.POST.get("name", "")
    recipient_list = ['danngalann@gmail.com',]

    send_mail( subject, message, email_from, recipient_list )
    return redirect('/')