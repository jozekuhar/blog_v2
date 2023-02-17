from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class AccountsAPIListView(APIView):
  def get(self, request):
    base_url = request.build_absolute_uri()
    api_views = {
      "Default View": base_url + "auth/",
      "Users Create/List View": base_url + "auth/users/",
      "Users Detail View": base_url + "auth/users/me",
      "Get JWT Token": base_url + "auth/jwt/create/",
      "Refresh JWT Token": base_url + "auth/jwt/refresh/",
      "Verify JWT Token": base_url + "auth/jwt/verify/",
    }
    return Response(api_views, status=status.HTTP_200_OK)