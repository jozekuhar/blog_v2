from django.db import models
from django.contrib.auth import get_user_model

Account = get_user_model()


class Tag(models.Model):
  name = models.CharField(max_length=50)

  def __str__(self):
    return self.name


class Post(models.Model):

  class Status:
    DRAFT = "DR", "Draft"
    PUBLISHED = "PB", "Published"

  title = models.CharField(max_length=250)
  slug = models.SlugField(max_length=50)
  content = models.TextField()
  published = models.DateTimeField(auto_now_add=True)
  status = models.CharField(max_length=2, choices=Status.choices, default=Status.DRAFT)

  user = models.ForeignKey(Account, related_name="posts", on_delete=models.CASCADE)
  tags = models.ManyToManyField(Tag)

  def __str__(self):
    return self.title


class Comment(models.Model):
  content = models.TextField()

  post = models.ForeignKey(Post, related_name="post_comments", on_delete=models.CASCADE)
  user = models.ForeignKey(Post, related_name="user_comments", on_delete=models.CASCADE)

  def __str__(self):
    return self.id


class CommentOnComment(models.Model):
  content = models.TextField()

  comment = models.ForeignKey(Comment, related_name="comment_commentsoncomments", on_delete=models.CASCADE)
  user = models.ForeignKey(Post, related_name="user_commentsoncomments", on_delete=models.CASCADE)

  def __str__(self):
    return self.id
