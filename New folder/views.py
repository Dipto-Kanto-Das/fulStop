from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

def payment_page(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        user_email = request.user.email  # Assuming user is logged in
        
        # Send confirmation email after payment
        send_mail(
            'Payment Confirmation',
            f'Your payment of {amount} has been successfully processed.',
            settings.EMAIL_HOST_USER,
            [user_email],
            fail_silently=False,
        )
        return render(request, 'payment_success.html', {'amount': amount})
    return render(request, 'index.html')
