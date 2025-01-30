import React from 'react';
    import { Link } from 'react-router-dom';
    import * as Lucide from 'lucide-react';
    import FeatureCard from './FeatureCard';

    function Khazana() {
      return (
        <div className="container mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <h1 className="text-5xl font-bold text-center mb-16 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-24 before:bg-blue-500 before:rounded">
            Khazana: What's Next?
          </h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl">
            Explore the exciting features we're working on! Click on each card to reveal a sneak peek of what's coming.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              featureName="Peer Support"
              icon={<Lucide.Users className="h-8 w-8 text-blue-500 mr-2" />}
              description="Connect with fellow students, share experiences, and learn from each other."
              comingSoon="A dedicated space for peer-to-peer interaction and support."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/peer-support"
            />
            <FeatureCard
              featureName="Chat with Experts"
              icon={<Lucide.MessageCircle className="h-8 w-8 text-blue-500 mr-2" />}
              description="Get personalized guidance from industry experts and experienced professionals."
              comingSoon="Live chat sessions and Q&A forums with mentors."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/chat-with-experts"
            />
            <FeatureCard
              featureName="Mentorship Program"
              icon={<Lucide.UserPlus className="h-8 w-8 text-blue-500 mr-2" />}
              description="Connect with mentors who can guide you through your academic and career path."
              comingSoon="A structured mentorship program with experienced professionals."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/mentorship-program"
            />
            <FeatureCard
              featureName="Personalized Notes"
              icon={<Lucide.FileText className="h-8 w-8 text-blue-500 mr-2" />}
              description="Take notes on resources and save them for future reference."
              comingSoon="A personalized note-taking system with local storage."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/personalized-notes"
            />
            <FeatureCard
              featureName="Personalized Dashboard"
              icon={<Lucide.LayoutDashboard className="h-8 w-8 text-blue-500 mr-2" />}
              description="View your progress, recent activity, and recommended resources."
              comingSoon="A personalized dashboard to track your learning journey."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/personalized-dashboard"
            />
            <FeatureCard
              featureName="Achievement Badges"
              icon={<Lucide.Award className="h-8 w-8 text-blue-500 mr-2" />}
              description="Track your progress and achievements with visual badges."
              comingSoon="A system to award badges for completing courses, projects, or challenges."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/achievement-badges"
            />
            <FeatureCard
              featureName="Skill Exchange Forum"
              icon={<Lucide.Share2 className="h-8 w-8 text-blue-500 mr-2" />}
              description="Offer your skills and request help from others in the community."
              comingSoon="A forum to connect with peers and exchange knowledge."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/skill-exchange-forum"
            />
            <FeatureCard
              featureName="Tech News Feed"
              icon={<Lucide.Newspaper className="h-8 w-8 text-blue-500 mr-2" />}
              description="Stay updated with the latest tech news and articles."
              comingSoon="A curated feed of relevant tech news and articles."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/tech-news-feed"
            />
            <FeatureCard
              featureName="Daily Challenge Widget"
              icon={<Lucide.Puzzle className="h-8 w-8 text-blue-500 mr-2" />}
              description="Engage with a small, daily coding challenge."
              comingSoon="A daily coding challenge to keep you engaged."
              cardStyle="bg-gray-800/50"
              link="/khazana/messages/daily-challenge-widget"
              unlocked={true}
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Stay tuned for these exciting features!
            </p>
          </div>
        </div>
      );
    }

    export default Khazana;
