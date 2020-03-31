from django.shortcuts import render


def index(request):
    zakhar = "lox"
    return render(
        request,
        'index.html',
        context={
            'zakhar': zakhar,
        },
    )
