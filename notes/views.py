from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import NoteSerializer
from .models import Note


@api_view(['GET','POST'])
def get_notes(request):
    if request.method == "GET":
        notes = Note.objects.all().order_by('date_created')
        serializer = NoteSerializer(notes,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    elif request.method == "POST":
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        
        
@api_view(['GET','PUT'])
def get_note(request,pk):
      if request.method == "GET":
        notes = Note.objects.get(pk=pk)
        serializer = NoteSerializer(notes,many=False)
        return Response(serializer.data,status=status.HTTP_200_OK)
      
      if request.method=="PUT":
          notes = Note.objects.get(pk=pk)
          serializer = NoteSerializer(notes ,data=request.data)
          if serializer.is_valid():
              serializer.save()
              return Response(serializer.data,status=status.HTTP_200_OK)
          
@api_view(['DELETE'])
def delete_note(request,pk):
        note = Note.objects.get(pk=pk)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
        