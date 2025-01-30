import React, { useState, useEffect, useRef } from 'react';
    import { Link, useLocation, useNavigate } from 'react-router-dom';
    import { Menu, X, Code2, Search, ChevronDown } from 'lucide-react';
    import PomodoroTimer from './PomodoroTimer';

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
      const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
      const tutorialsRef = useRef(null);

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
        setIsTutorialsOpen(false);
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

      const handleTutorialsToggle = () => {
        setIsTutorialsOpen(!isTutorialsOpen);
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
          if (tutorialsRef.current && !tutorialsRef.current.contains(event.target) && isTutorialsOpen) {
            setIsTutorialsOpen(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [discoverRef, isSearchOpen, searchInputRef, quickAccessRef, isQuickAccessOpen, tutorialsRef, isTutorialsOpen]);

      return (
        <nav className={`bg-black/50 backdrop-blur-md border-b border-blue-500/20 top-0 left-0 w-full z-50 transition-all duration-300`}>
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
                  <Link onClick={handleSearchToggle} className="text-gray-300 focus:outline-none relative hover:text-blue-400 transition-colors duration-200">
                    <Search className="h-5 w-5 relative z-10" />
                  </Link>
                  {isSearchOpen && (
                    <form onSubmit={handleSearchSubmit} className="absolute right-0 top-full mt-2 bg-gray-800/50 backdrop-blur-sm rounded-md p-2 border border-blue-500/20">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        ref={searchInputRef}
                        className="bg-gray-700 rounded p-2 text-white focus:outline-none border border-blue-500/20 w-64"
                      />
                    </form>
                  )}
                </div>
                <NavLink to="/" active={location.pathname === '/'} >Home</NavLink>
                <NavLink to="/events" active={location.pathname === '/events'}>Events</NavLink>
                 <div ref={tutorialsRef} className="relative">
                  <button
                    onClick={handleTutorialsToggle}
                    className="text-gray-300 px-4 py-2 relative transition-all duration-300 focus:outline-none flex items-center"
                  >
                    Tutorials
                    {isTutorialsOpen && <ChevronDown className="h-4 w-4 ml-1" />}
                  </button>
                  {isTutorialsOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-gray-800/50 backdrop-blur-sm rounded-md p-2 border border-blue-500/20 w-64">
                      <Link to="/tutorials/core-subjects" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Core Subjects</Link>
                      <Link to="/tutorials/dsa" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">DSA</Link>
                      <Link to="/tutorials/web-development" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Web Development</Link>
                      <Link to="/tutorials/development-challenges" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Development Challenges</Link>
                      <Link to="/tutorials/system-design" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">System Design</Link>
                      <Link to="/tutorials/handwritten-notes" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Handwritten Notes</Link>
                    </div>
                  )}
                </div>
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
                      <Link to="/projects" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Project Guidance</Link>
                      <Link to="/careers/all" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">All Career Paths</Link>
                      <Link to="/achievements" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Achievements</Link>
                      <Link to="/favorites" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Favorites</Link>
                      <Link to="/task-prioritization" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Task Prioritization</Link>
                      <Link to="/notes" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Saved Notes</Link>
                    </div>
                  )}
                </div>
                <div ref={quickAccessRef} className="relative">
                  <button
                    onClick={handleQuickAccessToggle}
                    className="text-gray-300 px-4 py-2 relative transition-all duration-300 focus:outline-none flex items-center"
                  >
                    Quick Access
                    {isQuickAccessOpen && <ChevronDown className="h-4 w-4 ml-1" />}
                  </button>
                  {isQuickAccessOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-gray-800/50 backdrop-blur-sm rounded-md p-2 border border-blue-500/20 w-96">
                      <div className="grid grid-cols-2 gap-2">
                        <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">MDN Web Docs</a>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">React Docs</a>
                        <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Node.js Docs</a>
                        <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">JavaScript.info</a>
                        <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">W3Schools</a>
                        <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">TypeScript Docs</a>
                        <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Bootstrap Docs</a>
                        <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Tailwind CSS Docs</a>
                        <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Git Docs</a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Web APIs</a>
                        <a href="https://developer.android.com/docs" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Android Docs</a>
                        <a href="https://developer.apple.com/documentation/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Apple Docs</a>
                        <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Python Docs</a>
                        <a href="https://www.java.com/en/download/help/index_installing.html" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">Java Docs</a>
                        <a href="https://www.mysql.com/support/documentation/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">MySQL Docs</a>
                        <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-300 hover:text-blue-400 whitespace-nowrap">PostgreSQL Docs</a>
                      </div>
                    </div>
                  )}
                </div>
                 <NavLink to="/team" active={location.pathname === '/team'} className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Team</NavLink>
                 <NavLink to="/khazana" active={location.pathname === '/khazana'} className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Khazana</NavLink>
                 <NavLink to="/login" className="text-gray-300 px-4 py-2 relative transition-all duration-300 hover:text-blue-400">Login</NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden pb-4">
                <div className="flex flex-col space-y-4">
                  <MobileNavLink to="/" onClick={() => setIsOpen(false)} active={location.pathname === '/'}>Home</MobileNavLink>
                  <MobileNavLink to="/events" onClick={() => setIsOpen(false)} active={location.pathname === '/events'}>Events</MobileNavLink>
                   <MobileNavLink to="/tutorials" onClick={() => setIsOpen(false)} active={location.pathname === '/tutorials'}>Tutorials</MobileNavLink>
                   <MobileNavLink to="/projects" onClick={() => setIsOpen(false)} active={location.pathname === '/projects'}>Project Guidance</MobileNavLink>
                  <MobileNavLink to="/careers/all" onClick={() => setIsOpen(false)} active={location.pathname === '/careers/all'}>All Career Paths</MobileNavLink>
                   <MobileNavLink to="/khazana" onClick={() => setIsOpen(false)} active={location.pathname === '/khazana'}>Khazana</MobileNavLink>
                   <MobileNavLink to="/login" onClick={() => setIsOpen(false)} active={location.pathname === '/login'}>Login</MobileNavLink>
                   <MobileNavLink to="/achievements" onClick={() => setIsOpen(false)}>Achievements</MobileNavLink>
                   <MobileNavLink to="/favorites" onClick={() => setIsOpen(false)}>Favorites</MobileNavLink>
                   <MobileNavLink to="/pomodoro" onClick={() => setIsOpen(false)}>Pomodoro Timer</MobileNavLink>
                   <MobileNavLink to="/task-prioritization" onClick={() => setIsOpen(false)}>Task Prioritization</MobileNavLink>
                   <MobileNavLink to="/notes" onClick={() => setIsOpen(false)} >Saved Notes</MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    }

    function NavLink({ to, children, active }) {
      return (
        <Link
          to={to}
          className={`text-gray-300 px-4 py-2 relative transition-all duration-300  ${
            active
              ? 'text-blue-400'
              : 'hover:text-blue-400'
          }`}
        >
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${active ? 'bg-blue-500' : 'bg-transparent'}`}></span>
        </Link>
      );
    }

    function MobileNavLink({ to, children, onClick, active }) {
      return (
        <Link
          to={to}
          className={`text-gray-300 px-4 py-2 relative transition-all duration-300 ${
            active
              ? 'text-blue-400'
              : 'hover:text-blue-400'
          }`}
          onClick={onClick}
        >
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${active ? 'bg-blue-500' : 'bg-transparent'}`}></span>
        </Link>
      );
    }

    export default Navbar;
