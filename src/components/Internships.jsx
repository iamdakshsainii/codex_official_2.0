import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import InternshipsLoadMore from './InternshipsLoadMore';
    import { getFreshData } from '../utils/dataFetcher';

    function Internships() {
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
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-12">All Internships</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship) => (
              <a
                key={internship.title}
                href={internship.link}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:shadow-[0_0_8px_3px_rgba(0,0,255,0.3)] hover:scale-102 transition-all duration-300 glow-card"
              >
                <div className="relative w-full h-48 mb-6">
                  <img src={internship.image} alt={internship.title} className="object-cover w-full h-full" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-400 mb-2">{internship.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">{internship.company}</p>
                  <p className="text-gray-400">{internship.duration}</p>
                  <p className="text-gray-400">📍 {internship.location}</p>
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={() => window.open(internship.link, "_blank")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                  >
                    Register Now
                  </button>
                </div>
              </a>
            ))}
          </div>
          <InternshipsLoadMore internships={internships} />
        </div>
      );
    }

    export default Internships;
