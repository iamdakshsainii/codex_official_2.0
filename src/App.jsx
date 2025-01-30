import React, { Suspense, lazy, useState, useEffect } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './components/Home';
    import Footer from './components/Footer';
    import Team from './components/Team';
    import CareerDetails from './career/CareerDetails';
    import ProjectDetails from './pages/projects/ProjectDetails';
    import CareerPathsAll from './career/CareerPathsAll';
    import Login from './pages/login/Login';
    import SearchResults from './components/SearchResults';
    import Achievements from './extra-features/achievements/Achievements';
    import PeerSupportMessage from './pages/khazana/messages/PeerSupportMessage';
    import ChatWithExpertsMessage from './pages/khazana/messages/ChatWithExpertsMessage';
    import MentorshipProgramMessage from './pages/khazana/messages/MentorshipProgramMessage';
    import PersonalizedNotesMessage from './pages/khazana/messages/PersonalizedNotesMessage';
    import PersonalizedDashboardMessage from './pages/khazana/messages/PersonalizedDashboardMessage';
    import AchievementBadgesMessage from './pages/khazana/messages/AchievementBadgesMessage';
    import SkillExchangeForumMessage from './pages/khazana/messages/SkillExchangeForumMessage';
    import TechNewsFeedMessage from './pages/khazana/messages/TechNewsFeedMessage';
    import DailyChallengeWidgetMessage from './pages/khazana/messages/DailyChallengeWidgetMessage';
    import AboutPage from './components/sections/AboutUsSection';
    import StudyMaterialsSection from './components/sections/StudyMaterialsSection';
    import Favorites from './components/Favorites';
    import Khazana from './pages/khazana/Khazana';
    import PomodoroPage from './components/PomodoroPage';
    import TaskPrioritizationPage from './components/TaskPrioritizationPage';
    import TutorialCards from './components/TutorialCards';
    import CoreSubjects from './pages/tutorials/CoreSubjects';
    import DBMSPage from './pages/tutorials/DBMSPage';
    import AlgorithmsPage from './pages/tutorials/AlgorithmsPage';
    import OperatingSystemsPage from './pages/tutorials/OperatingSystemsPage';
    import SoftwareEngineeringPage from './pages/tutorials/SoftwareEngineeringPage';
    import ComputerNetworksPage from './pages/tutorials/ComputerNetworksPage';
    import WebDevelopmentPage from './pages/tutorials/WebDevelopmentPage';
    import SystemDesignPage from './pages/tutorials/SystemDesignPage';
    import DevelopmentChallengesPage from './pages/tutorials/DevelopmentChallengesPage';
    import ChallengePage from './pages/tutorials/ChallengePage';
    import DSAPage from './pages/tutorials/DSAPage';
    import ImageSliderDemo from './pages/tutorials/ImageSliderDemo';
    import ResponsiveImageSliderDemo from './stepwise-implementation/ResponsiveImageSliderPage';
    import DigitalClockPage from './stepwise-implementation/DigitalClockPage';
    import URLShortenerPage from './stepwise-implementation/URLShortenerPage';
    import MarkdownPreviewerPage from './stepwise-implementation/MarkdownPreviewerPage';
    import MovieSearchPage from './stepwise-implementation/MovieSearchPage';
    import ResponsiveImageSliderPage from './stepwise-implementation/ResponsiveImageSliderPage';
    import RandomJokeGeneratorPage from './stepwise-implementation/RandomJokeGeneratorPage';
    import StopwatchPage from './stepwise-implementation/StopwatchPage';
    import FormValidationPage from './stepwise-implementation/FormValidationPage';
    import QRCodeGeneratorPage from './stepwise-implementation/QRCodeGeneratorPage';
    import WeatherDashboardPage from './stepwise-implementation/WeatherDashboardPage';
    import PomodoroTimerPage from './stepwise-implementation/PomodoroTimerPage';
    import QuizAppPage from './stepwise-implementation/QuizAppPage';
    import EcommerceProductFilterPage from './stepwise-implementation/EcommerceProductFilterPage';
    import ExpenseTrackerPage from './stepwise-implementation/ExpenseTrackerPage';
    import AgeCalculatorPage from './stepwise-implementation/AgeCalculatorPage';
    import NotesPage from './pages/notes/NotesPage';
    import YouTubeSection from './components/YouTubeSection';
    import NotesRoadmapsPage from './pages/tutorials/NotesRoadmapsPage';
    import HandwrittenNotesPage from './pages/tutorials/HandwrittenNotesPage';
    import CheatsheetsNotesPage from './pages/tutorials/HandwrittenNotes/CheatsheetsNotesPage';
    import OOPSNotesPage from './pages/tutorials/HandwrittenNotes/OOPSNotesPage';
    import CoreSubjectsNotesPage from './pages/tutorials/HandwrittenNotes/CoreSubjectsNotesPage';
    import OthersNotesPage from './pages/tutorials/HandwrittenNotes/OthersNotesPage';
    import NewFeatureNotification from './components/NewFeatureNotification';

    const Projects = lazy(() => import('./pages/projects/Projects'));
    const Events = lazy(() => import('./components/events/Events'));
    const Careers = lazy(() => import('./career/Careers'));
    const Internships = lazy(() => import('./components/Internships'));

    const newFeatures = [
      {
        id: 'task-prioritization',
        title: 'Task Prioritization',
        description: 'Prioritize your tasks based on urgency and importance.',
        link: '/task-prioritization',
      },
      {
        id: 'notes',
        title: 'Saved Notes',
        description: 'Save your notes for future reference.',
        link: '/notes',
      },
    ];

    function App() {
      const [checkInPrompt, setCheckInPrompt] = useState(null);
      const [seenFeatures, setSeenFeatures] = useState(() => {
        const storedSeen = localStorage.getItem('seenFeatures');
        return storedSeen ? JSON.parse(storedSeen) : [];
      });
      const [newFeature, setNewFeature] = useState(null);

      useEffect(() => {
        const checkInInterval = setInterval(() => {
          const prompts = [
            "How are you feeling today?",
            "Are you feeling focused?",
            "Are you taking enough breaks?",
            "Is there anything you need to adjust in your study plan?",
          ];
          const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
          setCheckInPrompt(randomPrompt);
          setTimeout(() => setCheckInPrompt(null), 5000);
        }, 10 * 60 * 1000); // Check-in every 10 minutes

        return () => clearInterval(checkInInterval);
      }, []);

      useEffect(() => {
        const unseenFeature = newFeatures.find(feature => !seenFeatures.includes(feature.id));
        setNewFeature(unseenFeature || null);
      }, [seenFeatures]);

      const handleCloseNotification = () => {
        if (newFeature) {
          setSeenFeatures([...seenFeatures, newFeature.id]);
          setNewFeature(null);
        }
      };

      useEffect(() => {
        localStorage.setItem('seenFeatures', JSON.stringify(seenFeatures));
      }, [seenFeatures]);

      return (
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
              {checkInPrompt && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 z-50">
                  <p className="text-center text-gray-300">{checkInPrompt}</p>
                </div>
              )}
              {newFeature && (
                <NewFeatureNotification feature={newFeature} onClose={handleCloseNotification} />
              )}
              <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="loader"></div></div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/careers/all" element={<CareerPathsAll />} />
                  <Route path="/internships" element={<Internships />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/careers/:careerName" element={<CareerDetails />} />
                  <Route path="/khazana" element={<Khazana />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/achievements" element={<Achievements />} />
                  <Route path="/khazana/messages/peer-support" element={<PeerSupportMessage />} />
                  <Route path="/khazana/messages/chat-with-experts" element={<ChatWithExpertsMessage />} />
                  <Route path="/khazana/messages/mentorship-program" element={<MentorshipProgramMessage />} />
                  <Route path="/khazana/messages/personalized-notes" element={<PersonalizedNotesMessage />} />
                  <Route path="/khazana/messages/personalized-dashboard" element={<PersonalizedDashboardMessage />} />
                  <Route path="/khazana/messages/achievement-badges" element={<AchievementBadgesMessage />} />
                  <Route path="/khazana/messages/skill-exchange-forum" element={<SkillExchangeForumMessage />} />
                  <Route path="/khazana/messages/tech-news-feed" element={<TechNewsFeedMessage />} />
                  <Route path="/khazana/messages/daily-challenge-widget" element={<DailyChallengeWidgetMessage />} />
                  <Route path="/study-materials" element={<StudyMaterialsSection />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/pomodoro" element={<PomodoroPage />} />
                  <Route path="/task-prioritization" element={<TaskPrioritizationPage />} />
                  <Route path="/tutorials" element={<TutorialCards />} />
                  <Route path="/tutorials/core-subjects" element={<CoreSubjects />} />
                  <Route path="/tutorials/dbms" element={<DBMSPage />} />
                  <Route path="/tutorials/algorithms" element={<AlgorithmsPage />} />
                  <Route path="/tutorials/operating-systems" element={<OperatingSystemsPage />} />
                  <Route path="/tutorials/software-engineering" element={<SoftwareEngineeringPage />} />
                  <Route path="/tutorials/computer-networks" element={<ComputerNetworksPage />} />
                  <Route path="/tutorials/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/tutorials/system-design" element={<SystemDesignPage />} />
                  <Route path="/tutorials/development-challenges" element={<DevelopmentChallengesPage />} />
                  <Route path="/tutorials/development-challenges/:challengeTitle" element={<ChallengePage />} />
                  <Route path="/tutorials/dsa" element={<DSAPage />} />
                  <Route path="/tutorials/digital-clock" element={<DigitalClockPage />} />
                  <Route path="/tutorials/url-shortener" element={<URLShortenerPage />} />
                  <Route path="/tutorials/markdown-previewer" element={<MarkdownPreviewerPage />} />
                  <Route path="/tutorials/movie-search" element={<MovieSearchPage />} />
                  <Route path="/tutorials/responsive-image-slider" element={<ResponsiveImageSliderPage />} />
                  <Route path="/tutorials/random-joke-generator" element={<RandomJokeGeneratorPage />} />
                  <Route path="/tutorials/stopwatch" element={<StopwatchPage />} />
                  <Route path="/tutorials/form-validation" element={<FormValidationPage />} />
                  <Route path="/tutorials/qr-code-generator" element={<QRCodeGeneratorPage />} />
                  <Route path="/tutorials/weather-dashboard" element={<WeatherDashboardPage />} />
                  <Route path="/tutorials/pomodoro-timer" element={<PomodoroTimerPage />} />
                  <Route path="/tutorials/quiz-app" element={<QuizAppPage />} />
                  <Route path="/tutorials/ecommerce-product-filter" element={<EcommerceProductFilterPage />} />
                  <Route path="/tutorials/expense-tracker" element={<ExpenseTrackerPage />} />
                  <Route path="/tutorials/age-calculator" element={<AgeCalculatorPage />} />
                  <Route path="/notes" element={<NotesPage />} />
                  <Route path="/youtube" element={<YouTubeSection />} />
                  <Route path="/tutorials/handwritten-notes" element={<NotesRoadmapsPage />} />
                  <Route path="/tutorials/html-notes" element={<HandwrittenNotesPage category="html" />} />
                  <Route path="/tutorials/css-notes" element={<HandwrittenNotesPage category="css" />} />
                  <Route path="/tutorials/javascript-notes" element={<HandwrittenNotesPage category="javascript" />} />
                  <Route path="/tutorials/nodejs-notes" element={<HandwrittenNotesPage category="nodejs" />} />
                  <Route path="/tutorials/reactjs-notes" element={<HandwrittenNotesPage category="reactjs" />} />
                  <Route path="/tutorials/python-notes" element={<HandwrittenNotesPage category="python" />} />
                  <Route path="/tutorials/ai-notes" element={<HandwrittenNotesPage category="ai" />} />
                  <Route path="/tutorials/devops-notes" element={<HandwrittenNotesPage category="devops" />} />
                  <Route path="/tutorials/cloud-notes" element={<HandwrittenNotesPage category="cloud" />} />
                  <Route path="/tutorials/cybersecurity-notes" element={<HandwrittenNotesPage category="cybersecurity" />} />
                  <Route path="/tutorials/dsa-notes" element={<HandwrittenNotesPage category="dsa" />} />
                  <Route path="/tutorials/os-notes" element={<HandwrittenNotesPage category="os" />} />
                  <Route path="/tutorials/dbms-notes" element={<HandwrittenNotesPage category="dbms" />} />
                  <Route path="/tutorials/frontend-notes" element={<HandwrittenNotesPage category="frontend" />} />
                  <Route path="/tutorials/backend-notes" element={<HandwrittenNotesPage category="backend" />} />
                  <Route path="/tutorials/cheatsheets-notes" element={<CheatsheetsNotesPage />} />
                  <Route path="/tutorials/oops-notes" element={<OOPSNotesPage />} />
                  <Route path="/tutorials/core-subjects-notes" element={<CoreSubjectsNotesPage />} />
                  <Route path="/tutorials/others-notes" element={<OthersNotesPage />} />
                </Routes>
              </Suspense>
            </div>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
