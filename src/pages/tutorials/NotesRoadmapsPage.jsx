import React from 'react';
    import { Link } from 'react-router-dom';
    import { Code, Cpu, Database, Globe, Smartphone, Brain, Cloud, Shield, FileText, Music, Edit, Zap } from 'lucide-react';

    function NotesRoadmapsPage() {
      const techSectors = [
        {
          title: 'Cheatsheets',
          description: 'Explore handwritten notes on Cheatsheets.',
          icon: <FileText className="h-6 w-6" />,
          link: '/tutorials/cheatsheets-notes',
          concepts: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'SQL']
        },
        {
          title: 'OOPS',
          description: 'Explore handwritten notes on Object-Oriented Programming.',
          icon: <Code className="h-6 w-6" />,
          link: '/tutorials/oops-notes',
          concepts: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction']
        },
        {
          title: 'Core Subjects',
          description: 'Explore handwritten notes on Core Subjects.',
          icon: <Code className="h-6 w-6" />,
          link: '/tutorials/core-subjects-notes',
          concepts: ['DBMS', 'Operating Systems', 'System Design', 'Algorithms', 'Computer Networks', 'Software Engineering']
        },
        {
          title: 'DSA',
          description: 'Explore handwritten notes on Data Structures and Algorithms.',
          icon: <Code className="h-6 w-6" />,
          link: '/tutorials/dsa-notes',
          concepts: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting', 'Searching']
        },
        {
          title: 'DevOps',
          description: 'Explore handwritten notes on DevOps practices and tools.',
          icon: <Cpu className="h-6 w-6" />,
          link: '/tutorials/devops-notes',
          concepts: ['CI/CD', 'Docker', 'Kubernetes', 'Automation']
        },
        {
          title: 'AI',
          description: 'Explore handwritten notes on artificial intelligence and machine learning.',
          icon: <Brain className="h-6 w-6" />,
          link: '/tutorials/ai-notes',
          concepts: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Data Science']
        },
        {
          title: 'Cloud',
          description: 'Explore handwritten notes on cloud computing.',
          icon: <Cloud className="h-6 w-6" />,
          link: '/tutorials/cloud-notes',
          concepts: ['AWS', 'Azure', 'GCP', 'Serverless']
        },
        {
          title: 'Cybersecurity',
          description: 'Explore handwritten notes on cybersecurity concepts.',
          icon: <Shield className="h-6 w-6" />,
          link: '/tutorials/cybersecurity-notes',
          concepts: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Vulnerability Assessment']
        },
        {
          title: 'Python',
          description: 'Explore handwritten notes on Python.',
          icon: <Code className="h-6 w-6" />,
          link: '/tutorials/python-notes',
          concepts: ['Data Structures', 'Algorithms', 'Web Frameworks', 'Data Analysis']
        },
        {
          title: 'Frontend',
          description: 'Explore handwritten notes on Frontend technologies.',
          icon: <Code className="h-6 w-6" />,
          link: '/tutorials/frontend-notes',
          concepts: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
          title: 'Backend',
          description: 'Explore handwritten notes on Backend technologies.',
          icon: <Cpu className="h-6 w-6" />,
          link: '/tutorials/backend-notes',
          concepts: ['Node.js', 'Python', 'Databases', 'APIs']
        },
        {
          title: 'Others',
          description: 'Explore handwritten notes on other topics.',
          icon: <FileText className="h-6 w-6" />,
          link: '/tutorials/others-notes',
          concepts: ['Data Structures', 'Algorithms', 'System Design', 'Operating Systems', 'Computer Networks']
        },
      ];

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Handwritten Notes</h1>
          <p className="text-gray-400 text-center mb-8">
            Explore handwritten notes that offer a unique perspective on complex topics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSectors.map((sector) => (
              <Link
                key={sector.title}
                to={sector.link}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {sector.icon}
                  <h3 className="text-xl font-semibold ml-3 group-hover:text-blue-400 transition-colors">{sector.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{sector.description}</p>
                <div className="flex flex-wrap gap-2">
                  {sector.concepts.map((concept, index) => (
                    <span
                      key={index}
                      className="text-sm px-2 py-1 bg-blue-500/10 rounded text-blue-400"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    export default NotesRoadmapsPage;
