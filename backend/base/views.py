from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class BaseAPIListView(APIView):
  """
  All apps with every available endpoint.
  """
  def get(self, request):
    base_url = request.build_absolute_uri()
    api_views = {
      "Accounts": base_url + "accounts/",
      "Blog": base_url + "blog/",
    }
    return Response(api_views, status=status.HTTP_200_OK)