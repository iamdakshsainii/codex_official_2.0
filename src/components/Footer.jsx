import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

    function Footer() {
      return (
        <footer className="bg-black/50 backdrop-blur-md border-t border-blue-500/20 py-12 text-center mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h4 className="text-xl font-semibold mb-4">
                  CodeX <span className="text-blue-400">Network</span>
                </h4>
                <p className="text-gray-400 text-sm">
                  Your comprehensive resource hub for B.Tech students.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://www.instagram.com/codexnetwork8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/codex-network/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a href="https://chat.whatsapp.com/JbGXT1pjy0a020qAhGGmCx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/@CodeX-Network8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-1">
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                  <li><Link to="/projects" className="hover:text-blue-400">Project Ideas</Link></li>
                  <li><Link to="/careers" className="hover:text-blue-400">Career Roadmap</Link></li>
                  <li><Link to="/events" className="hover:text-blue-400">Events &amp; Fests</Link></li>
                  <li><Link to="/internships" className="hover:text-blue-400">Internship Updates</Link></li>
                </ul>
              </div>
              <div className="md:col-span-1">
                <h4 className="text-xl font-semibold mb-4">Legal</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
                  <li><Link to="/terms-and-conditions" className="hover:text-blue-400">Terms &amp; Conditions</Link></li>
                </ul>
              </div>
              <div className="md:col-span-1">
                <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
                <p className="text-gray-400 text-sm">
                  Contact us at: <a href="mailto:codexnetwork8@gmail.com" className="text-blue-500 hover:underline">codexnetwork8@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      );
    }

    export default Footer;
