import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import InternshipsLoadMore from '../InternshipsLoadMore';
    import { getFreshData } from '../../utils/dataFetcher';

    function InternshipsSection({ className }) {
      const [internships, setInternships] = useState([]);

      useEffect(() => {
        const fetchInternships = async () => {
          const freshInternships = await getFreshData('internships');
          if (freshInternships) {
            setInternships(freshInternships);
          }
        };
        fetchInternships();

        const intervalId = setInterval(fetchInternships, 24 * 60 * 60 * 1000); // Fetch every 24 hours

        return () => clearInterval(intervalId); // Cleanup interval on unmount
      }, []);

      return (
        <section id="internships" className={`container mx-auto px-4 mb-12 ${className} transition-opacity duration-500`}>
          <h2 className="text-3xl font-bold text-center mb-6">Featured Internships</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {internships.slice(0, 3).map((internship) => (
              <a
                key={internship.title}
                href={internship.link}
                className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:shadow-[0_0_8px_3px_rgba(0,0,255,0.3)] hover:scale-102 transition-all duration-300 glow-card"
              >
                <div className="relative w-full h-48 mb-4">
                  <img src={internship.image} alt={internship.title} className="object-cover w-full h-full" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 mb-2">{internship.title}</h3>
                  <p className="text-lg text-gray-400 mb-2">{internship.company}</p>
                  <p className="text-gray-400 text-sm">{internship.duration}</p>
                  <p className="text-gray-400 text-sm">📍 {internship.location}</p>
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={() => window.open(internship.link, "_blank")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-xs"
                  >
                    Register Now
                  </button>
                </div>
              </a>
            ))}
          </div>
          <InternshipsLoadMore internships={internships} />
        </section>
      );
    }

    export default InternshipsSection;
