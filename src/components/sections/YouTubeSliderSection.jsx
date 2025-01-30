import React, { useState, useEffect, useRef } from 'react';
    import YouTubeModal from '../YouTubeModal';
    import { ChevronLeft, ChevronRight } from 'lucide-react';

    function YouTubeSliderSection({ className }) {
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
      const [currentSlide, setCurrentSlide] = useState(0);
      const sliderRef = useRef(null);
      const cardWidth = 350; // Fixed card width
      const [isSliderActive, setIsSliderActive] = useState(false);

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

      useEffect(() => {
        if (videos.length > 2) {
          setIsSliderActive(true);
          const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
          }, 5000);
          return () => clearInterval(timer);
        }
      }, [videos.length]);

      useEffect(() => {
        if (sliderRef.current && isSliderActive) {
          sliderRef.current.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
        }
      }, [currentSlide, cardWidth, isSliderActive]);

      const handleVideoClick = (video) => {
        setSelectedVideo(video);
      };

      const handleCloseModal = () => {
        setSelectedVideo(null);
      };

      const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + videos.length) % videos.length);
      };

      const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
      };

      return (
        <section id="youtube-slider" className={`container mx-auto px-4 mb-12 ${className} transition-opacity duration-500`}>
          <h2 className="text-3xl font-bold text-center mb-8">YouTube Tutorials</h2>
          <div className="relative overflow-hidden max-h-[500px]">
            <div
              ref={sliderRef}
              className={`flex transition-transform duration-500 ${isSliderActive ? '' : 'justify-start'}`}
              style={{ width: isSliderActive ? `${videos.length * cardWidth}px` : 'auto' }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 p-4"
                  style={{ width: isSliderActive ? `${cardWidth}px` : 'auto' }}
                >
                  <div
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-4 hover:shadow-[0_0_8px_3px_rgba(0,0,255,0.3)] hover:scale-102 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative overflow-hidden mb-4" style={{height: '200px'}}>
                      <img src={video.thumbnail} alt={video.title} className="w-full object-contain" style={{height: '200px'}} loading="lazy" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{video.description}</p>
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
                </div>
              ))}
            </div>
            {videos.length > 2 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between">
                <button onClick={handlePrevSlide} className="text-gray-400 hover:text-blue-500 focus:outline-none transition-colors duration-200">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button onClick={handleNextSlide} className="text-gray-400 hover:text-blue-500 focus:outline-none transition-colors duration-200">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
          {selectedVideo && (
            <YouTubeModal videoId={selectedVideo.videoId} onClose={handleCloseModal} />
          )}
        </section>
      );
    }

    export default YouTubeSliderSection;
