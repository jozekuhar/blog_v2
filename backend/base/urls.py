from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.BaseAPIListView.as_view()),
    path('admin/', admin.site.urls),
    path("accounts/", include("accounts.urls", namespace="accounts")),
]
