from django.db import models

class Note(models.Model):
    date_created = models.DateTimeField(auto_now_add=True )
    content=models.CharField(max_length=500)
    theme_color=models.CharField(max_length=7)
    