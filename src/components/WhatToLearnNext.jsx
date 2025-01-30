import React, { useState, useEffect, useRef } from 'react';
    import { Link, useLocation, useNavigate } from 'react-router-dom';
    import { Menu, X, Code2, Search, ChevronDown } from 'lucide-react';

    function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const [lastScrollY, setLastScrollY] = useState(0);
      const location = useLocation();
      const [isSearchOpen, setIsSearchOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState('');
      const searchInputRef = useRef(null);
      const navigate = useNavigate();
      const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
      const discoverRef = useRef(null);
      const [isQuickAccessOpen, setIsQuickAccessOpen] = useState(false);
      const quickAccessRef = useRef(null);
      const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favoriteSubjects');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
      });

      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsScrolled(true); // Scrolling down, hide navbar
          } else {
            setIsScrolled(false); // Scrolling up, show navbar
          }

          setLastScrollY(currentScrollY); // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, [lastScrollY]);

      useEffect(() => {
        setIsOpen(false); // Close the mobile menu on route change
        setIsDiscoverOpen(false); // Close the discover dropdown on route change
        setIsQuickAccessOpen(false);
      }, [location]);

      const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen && searchInputRef.current) {
          searchInputRef.current.focus();
        }
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
          navigate(`/search?q=${searchQuery}`);
        }
        setIsSearchOpen(false);
      };

      const handleDiscoverToggle = () => {
        setIsDiscoverOpen(!isDiscoverOpen);
      };

      const handleQuickAccessToggle = () => {
        setIsQuickAccessOpen(!isQuickAccessOpen);
      };

      // Close dropdown when clicking outside
      useEffect(() => {
        function handleClickOutside(event) {
          if (discoverRef.current && !discoverRef.current.contains(event.target)) {
            setIsDiscoverOpen(false);
          }
          if (searchInputRef.current && !searchInputRef.current.contains(event.target) && isSearchOpen) {
            setIsSearchOpen(false);
          }
          if (quickAccessRef.current && !quickAccessRef.current.contains(event.target) && isQuickAccessOpen) {
            setIsQuickAccessOpen(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [discoverRef, isSearchOpen, searchInputRef, quickAccessRef, isQuickAccessOpen]);

      return (
        <nav className={`bg-black/50 backdrop-blur-md border-b border-blue-500/20 fixed top-0 left-0 w-full z-50 ${isScrolled ? 'transform -translate-y-full' : ''} transition-all duration-300`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold">CodeX Network</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6 relative items-center">
                {/* Search Icon Button and Input */}
                <div className="relative">
                  <button onClick={handleSearchToggle} className="text-gray-300 focus:outline-none relative">
                    <Search className="h-5 w-5 relative z-10" />
                  </button>
                  {isSearchOpen && (
                    <form onSubmit={handleSearchSubmit} className="absolute right-0 top-full mt-2 bg-gray-800/50 backdrop-blur-sm rounded-md p-2 border border-blue-500/20">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        ref={searchInputRef}
                        className="bg-gray-700 rounded p-2 text-white focus:outline-none border-none"
                      />
                    </form>
                  )}
                </div>
                <NavLink to="/" active={location.pathname === '/'} >Home</NavLink>
                <NavLink to="/events" active={location.pathname === '/events'}>Events</NavLink>
                 <NavLink to="/team" active={location.pathname === '/team'}>Team</NavLink>
                 <NavLink to="/khazana" active={location.pathname === '/khazana'} className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Khazana</NavLink>
                 <NavLink to="/login" className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Login</NavLink>
                 <div ref={discoverRef} className="relative">
                  <button
                    onClick={handleDiscoverToggle}
                    className="text-gray-300 px-4 py-2 relative transition-all duration-300 focus:outline-none flex items-center"
                  >
                    Discover
                    {isDiscoverOpen && <ChevronDown className="h-4 w-4 ml-1" />}
                  </button>
                  {isDiscoverOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-gray-800/50 backdrop-blur-sm rounded-md p-2 border border-blue-500/20 w-48">
                      <Link to="/projects" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Projects</Link>
                      <Link to="/careers/all" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">All Career Paths</Link>
                      <Link to="/achievements" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Achievements</Link>
                      <Link to="/favorites" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Favorites</Link>
                    </div>
                  )}
                </div>
                <div ref={quickAccessRef} className="relative">
                  <button
                    onClick={handleQuickAccessToggle}
                    className="text-gray-300 px-4 py-2 relative transition-all duration-300 focus:outline-none flex items-center"
