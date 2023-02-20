from django.urls import path
from . import views

app_name = "blog"

urlpatterns =[
  path("", views.BlogAPIListView.as_view()),
  path("posts/", views.PostsView.as_view()),
]