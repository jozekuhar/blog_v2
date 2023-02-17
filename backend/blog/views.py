from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class BlogAPIListView(APIView):
  def get(self, request):
    base_url = request.build_absolute_uri()
    api_views = {
      "Posts List/Create View": base_url + "posts/",
      "Comments List/Create View": base_url + "comments/",
    }
    return Response(api_views, status=status.HTTP_200_OK)
