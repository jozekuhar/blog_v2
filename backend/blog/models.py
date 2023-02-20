from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

Account = get_user_model()


class PublishManager(models.Manager):
  def get_queryset(self):
    queryset = Post.objects.filter(status=Post.Status.PUBLISHED)
    return queryset


class Tag(models.Model):
  name = models.CharField(max_length=50)
  slug = models.SlugField(max_length=50)

  def __str__(self):
    return self.name


class Post(models.Model):

  class Status(models.TextChoices):
    DRAFT = "DR", "Draft"
    PUBLISHED = "PB", "Published"

  title = models.CharField(max_length=250)
  slug = models.SlugField(max_length=50)
  content = models.TextField()
  publish = models.DateTimeField(default=timezone.now)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  status = models.CharField(max_length=2, choices=Status.choices, default=Status.DRAFT)

  user = models.ForeignKey(Account, related_name="posts", on_delete=models.CASCADE)
  tags = models.ManyToManyField(Tag)

  objects = models.Manager()
  published = PublishManager()

  class Meta:
    ordering = ["-publish"]
    indexes = [
      models.Index(fields=["-publish"])
    ]

  def __str__(self):
    return self.title


# class Comment(models.Model):
#   content = models.TextField()

#   post = models.ForeignKey(Post, related_name="post_comments", on_delete=models.CASCADE)
#   user = models.ForeignKey(Post, related_name="user_comments", on_delete=models.CASCADE)

#   def __str__(self):
#     return self.id


# class CommentOnComment(models.Model):
#   content = models.TextField()

#   comment = models.ForeignKey(Comment, related_name="comment_commentsoncomments", on_delete=models.CASCADE)
#   user = models.ForeignKey(Post, related_name="user_commentsoncomments", on_delete=models.CASCADE)

#   def __str__(self):
#     return self.id
