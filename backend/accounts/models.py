from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class AccountManager(BaseUserManager):
  def create_user(self, username, email, password=None):
    user = self.model(
      username=username,
      email=self.normalize_email(email).lower(),
    )
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, username, email, password=None):
    user = self.create_user(
      username=username,
      email=email,
      password=password
    )
    user.is_staff = True
    user.save(using=self._db)
    return user


class Account(AbstractBaseUser, PermissionsMixin):
  username = models.CharField(max_length=250, unique=True)
  email = models.EmailField(max_length=250, unique=True)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)

  objects = AccountManager()

  USERNAME_FIELD = "username"
  REQUIRED_FIELDS = ["email"]

  def __str__(self):
    return self.username
