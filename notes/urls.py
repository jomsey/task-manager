from django.urls import path
from . import views

urlpatterns = [
    path('notes',views.get_notes),
    path('notes/<int:pk>',views.get_note),
    path('notes/delete/<int:pk>',views.delete_note)
    
]
