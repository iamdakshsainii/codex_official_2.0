import React, { useState, useRef } from 'react';
    import { Link } from 'react-router-dom';
    import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
    import { Puzzle, Clock, Youtube } from 'lucide-react';
    import MCQChallenge from '../MCQChallenge';
    import PomodoroPopup from '../PomodoroPopup';
    import animationData from '../../assets/lottie/coding-animation.json';

    function HeaderSection({ className }) {
      const [isMCQOpen, setIsMCQOpen] = useState(false);
      const [isPomodoroOpen, setIsPomodoroOpen] = useState(false);
      const animationRef = useRef(null);

      const handleMCQOpen = () => {
        setIsMCQOpen(true);
      };

      const handleMCQClose = () => {
        setIsMCQOpen(false);
      };

      const handlePomodoroOpen = () => {
        setIsPomodoroOpen(true);
      };

      const handlePomodoroClose = () => {
        setIsPomodoroOpen(false);
      };

      const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

      return (
        <header className={`text-center py-12 px-4 mt-8 ${className} flex items-center justify-center h-[calc(100vh-4rem)] relative overflow-hidden transition-opacity duration-500`}>
          <div className="max-w-3xl z-10">
            <h1 className="text-5xl font-bold mb-4">
              CodeX
              <span className="inline-block w-4"></span>
              <span className="text-blue-500">Network</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
              Your comprehensive resource hub for B.Tech students - from study materials to career opportunities.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <Link to="/internships" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Explore Internships
              </Link>
              <Link to="/careers" className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200">
                Explore Careers
              </Link>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.instagram.com/codexnetwork8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/codex-network/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://chat.whatsapp.com/JbGXT1pjy0a020qAhGGmCx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@CodeX-Network8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          <Link
            onClick={handleMCQOpen}
            className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 focus:outline-none z-20 transition-colors duration-200"
          >
            <Puzzle className="h-8 w-8" />
          </Link>
          <Link
            onClick={handlePomodoroOpen}
            className="absolute top-4 right-16 text-gray-400 hover:text-blue-500 focus:outline-none z-20 transition-colors duration-200"
          >
            <Clock className="h-8 w-8" />
          </Link>
          <Link
            to="/youtube"
            className="absolute top-4 right-28 text-gray-400 hover:text-blue-500 focus:outline-none z-20 transition-colors duration-200"
          >
            <Youtube className="h-8 w-8" />
          </Link>
          {isMCQOpen && <MCQChallenge onClose={handleMCQClose} />}
          {isPomodoroOpen && <PomodoroPopup onClose={handlePomodoroClose} />}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-40 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl z-0"></div>
        </header>
      );
    }

    export default HeaderSection;
