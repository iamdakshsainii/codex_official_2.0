import React, { useState, useEffect } from 'react';
    import YouTubeModal from './YouTubeModal';

    function YouTubeSection() {
      const [selectedVideo, setSelectedVideo] = useState(null);
      const [videos, setVideos] = useState([
        {
          id: 'SLAM7iPwiQY',
          title: 'Zero Skill to Win any Hackathon :Strategies & Internship Tips in Hindi and English',
          description: 'We sit down with an inspiring hackathon winner who has not only clinched victory in over 10 hackathons but also secured an internship with AICTE.',
          thumbnail: 'https://i.ytimg.com/vi/SLAM7iPwiQY/mqdefault.jpg',
          videoId: 'SLAM7iPwiQY',
        },
        {
          id: 'KRJYOfRub28',
          title: 'Tier 3 college student journey from no coding to 40LPA',
          description: 'As an SDE Intern at Juspay, Aditya shares his story of overcoming challenges, seizing opportunities, and how his passion for innovation drives him every day.',
          thumbnail: 'https://i.ytimg.com/vi/KRJYOfRub28/mqdefault.jpg',
          videoId: 'KRJYOfRub28',
        },
      ]);

      useEffect(() => {
        const fetchYouTubeVideos = async () => {
          try {
            const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
            const channelId = 'UC-y-1-01_g'; // Replace with your channel ID
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet,contentDetails&type=video&maxResults=10`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.items) {
              const formattedVideos = data.items.map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.medium.url,
                videoId: item.id.videoId,
              }));
              setVideos(prevVideos => [...prevVideos, ...formattedVideos]);
            }
          } catch (error) {
            console.error('Failed to fetch YouTube videos:', error);
          }
        };
        fetchYouTubeVideos();
      }, []);

      const handleVideoClick = (video) => {
        setSelectedVideo(video);
      };

      const handleCloseModal = () => {
        setSelectedVideo(null);
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">YouTube Tutorials</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-4 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden mb-4">
                  <img src={video.thumbnail} alt={video.title} className="w-full object-contain" style={{height: '200px'}} loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{video.description}</p>
                <div className="flex justify-end">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-xs"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          {selectedVideo && (
            <YouTubeModal videoId={selectedVideo.videoId} onClose={handleCloseModal} />
          )}
        </div>
      );
    }

    export default YouTubeSection;
