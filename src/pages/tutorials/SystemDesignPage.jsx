import React, { useState, useEffect } from 'react';
    import { ChevronDown, ChevronRight, Search } from 'lucide-react';

    const topics = [
      {
        title: 'Introduction to System Design',
        content: 'This is the introduction to system design. Learn about the basic concepts and importance of system design.',
      },
      {
        title: 'Scalability',
        subtopics: [
          {
            title: 'Vertical Scaling',
            content: 'Explore vertical scaling and its limitations.',
          },
          {
            title: 'Horizontal Scaling',
            content: 'Learn about horizontal scaling and its benefits.',
          },
        ],
      },
      {
        title: 'Load Balancing',
        content: 'Understand the concept of load balancing and its importance in distributed systems.',
      },
      {
        title: 'Caching',
        subtopics: [
          {
            title: 'Client-Side Caching',
            content: 'Learn about client-side caching techniques.',
          },
          {
            title: 'Server-Side Caching',
            content: 'Explore server-side caching strategies.',
          },
        ],
      },
      {
        title: 'Databases',
        subtopics: [
          {
            title: 'Relational Databases',
            content: 'Understand the use of relational databases in system design.',
          },
          {
            title: 'NoSQL Databases',
            content: 'Explore the use of NoSQL databases in system design.',
          },
        ],
      },
      {
        title: 'Message Queues',
        content: 'Learn about message queues and their role in asynchronous communication.',
      },
      {
        title: 'API Design',
        content: 'Explore the principles of designing RESTful APIs.',
      },
    ];

    function SystemDesignPage() {
      const [activeTopic, setActiveTopic] = useState('Introduction to System Design');
      const [expandedTopics, setExpandedTopics] = useState({});
      const [searchQuery, setSearchQuery] = useState('');
      const [theme, setTheme] = useState('dark');

      useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
      }, [theme]);

      const handleTopicClick = (topicTitle) => {
        setActiveTopic(topicTitle);
      };

      const handleSubtopicClick = (topicTitle, subtopicTitle) => {
        setActiveTopic(`${topicTitle}-${subtopicTitle}`);
      };

      const handleToggleExpand = (topicTitle) => {
        setExpandedTopics(prev => ({
          ...prev,
          [topicTitle]: !prev[topicTitle],
        }));
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleThemeToggle = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
      };

      const filteredTopics = topics.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (topic.subtopics && topic.subtopics.some(subtopic => subtopic.title.toLowerCase().includes(searchQuery.toLowerCase())))
      );

      const renderSubtopics = (topic) => {
        if (!topic.subtopics) return null;
        return (
          <ul className="ml-4 space-y-1">
            {topic.subtopics.map((subtopic) => (
              <li
                key={subtopic.title}
                onClick={() => handleSubtopicClick(topic.title, subtopic.title)}
                className={`cursor-pointer p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 ${activeTopic === `${topic.title}-${subtopic.title}` ? 'bg-gray-700' : ''}`}
              >
                {subtopic.title}
              </li>
            ))}
          </ul>
        );
      };

      const renderContent = () => {
        const activeTopicData = topics.find(topic => topic.title === activeTopic) ||
          topics.reduce((acc, topic) => {
            if (topic.subtopics) {
              const foundSubtopic = topic.subtopics.find(subtopic => `${topic.title}-${subtopic.title}` === activeTopic);
              if (foundSubtopic) return foundSubtopic;
            }
            return acc;
          }, null);

        const breadcrumbs = [];
        if (activeTopicData) {
          if (activeTopicData.subtopics) {
            const parentTopic = topics.find(topic => topic.subtopics && topic.subtopics.includes(activeTopicData));
            if (parentTopic) {
              breadcrumbs.push(parentTopic.title);
            }
          }
          breadcrumbs.push(activeTopicData.title || activeTopic);
        }

        return (
          <div className="p-6">
            <div className="mb-4 text-gray-400">
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  {crumb}
                  {index < breadcrumbs.length - 1 && <span className="mx-1">&gt;</span>}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-semibold mb-4">{activeTopicData?.title || activeTopic}</h2>
            <p className="text-gray-300">{activeTopicData?.content}</p>
          </div>
        );
      };

      return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          <aside className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-blue-500/20 overflow-y-auto">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full p-2 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </div>
              </div>
              <nav className="mt-4 space-y-2">
                {filteredTopics.map((topic) => (
                  <div key={topic.title}>
                    <div
                      onClick={() => handleToggleExpand(topic.title)}
                      className={`flex justify-between items-center cursor-pointer p-2 hover:bg-gray-700 rounded-md transition-colors duration-200 ${activeTopic === topic.title ? 'bg-gray-700' : ''}`}
                    >
                      <span onClick={() => handleTopicClick(topic.title)}>{topic.title}</span>
                      {topic.subtopics && (
                        <span className="text-gray-400">
                          {expandedTopics[topic.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </span>
                      )}
                    </div>
                    {expandedTopics[topic.title] && renderSubtopics(topic)}
                  </div>
                ))}
              </nav>
            </div>
            <div className="absolute bottom-4 left-4">
              <button
                onClick={handleThemeToggle}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </aside>
          <main className="flex-1 p-4">
            {renderContent()}
          </main>
        </div>
      );
    }

    export default SystemDesignPage;
