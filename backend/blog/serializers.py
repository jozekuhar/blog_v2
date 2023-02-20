from rest_framework import serializers
from .models import Post, Tag
from django.contrib.auth import get_user_model

Account = get_user_model()

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
  tags = TagSerializer(many=True)
  class Meta:
    model = Post
    fields = "__all__"