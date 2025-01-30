import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    function GetInspiredSection({ className }) {
      const [videoHeights, setVideoHeights] = useState({});
      const videos = [
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
      ];

      useEffect(() => {
        const calculateHeights = async () => {
          const heights = {};
          for (const video of videos) {
            const img = new Image();
            img.src = video.thumbnail;
            await new Promise((resolve) => {
              img.onload = () => {
                heights[video.id] = img.height;
                resolve();
              };
            });
          }
          setVideoHeights(heights);
        };
        calculateHeights();
      }, [videos]);

      return (
        <section id="get-inspired" className={`container mx-auto px-4 mb-12 ${className} transition-opacity duration-500`}>
          <h2 className="text-3xl font-bold text-center mb-8">Get Inspired</h2>
          <p className="text-gray-400 text-center mb-12">
            Watch these inspiring stories from fellow students and get motivated to achieve your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {videos.map((video) => (
              <div
                key={video.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-4 hover:shadow-[0_0_8px_3px_rgba(0,0,255,0.3)] hover:scale-102 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden mb-4" style={{height: videoHeights[video.id] || '180px'}}>
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-fit" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{video.description}</p>
                <div className="text-center mt-auto">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600
                             transition-colors duration-200 transform hover:-translate-y-1"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    export default GetInspiredSection;
