from rest_framework import viewsets, permissions
from .serializers import VideoSerializer
from videos.models import Video
from rest_framework.response import Response
from rest_framework import status

class VideoViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.AllowAny] allow all access
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = VideoSerializer

    # queryset = Video.objects.all() get all videos
    def get_queryset(self):
        return self.request.user.videos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def partial_update(self, request, pk=None):
        video = Video.objects.filter(id=pk)[0]
        try:
            video.score = request.data['score']
            video.comments = request.data['comments']
            video.reviewer = request.user
            video.is_expert_reviewed = True
            video.save()
        except:
            return Response("Can't update reviews",status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)


