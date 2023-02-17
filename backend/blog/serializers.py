from rest_framework import serializers
from .models import Post
from django.contrib.auth import get_user_model

Account = get_user_model()

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = "__all__"