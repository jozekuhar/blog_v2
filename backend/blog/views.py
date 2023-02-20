from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import LimitOffsetPagination

from .models import Post
from .serializers import PostSerializer

class BlogAPIListView(APIView):
  def get(self, request):
    base_url = request.build_absolute_uri()
    api_views = {
      "Posts List/Create View": base_url + "posts/",
      "Comments List/Create View": base_url + "comments/",
    }
    return Response(api_views, status=status.HTTP_200_OK)


class PostsView(APIView, LimitOffsetPagination):
  def get(self, request):
    queryset = Post.published.all()
    results = self.paginate_queryset(queryset, request)
    serializer = PostSerializer(results, many=True)
    return self.get_paginated_response(serializer.data)