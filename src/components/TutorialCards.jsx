import React from 'react';
    import { Link } from 'react-router-dom';

    function TutorialCards({ cardData }) {
      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Tutorials</h1>
          <p className="text-gray-400 text-center mb-12">
            Explore our tutorials to enhance your skills and knowledge.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Array.isArray(cardData) && cardData.map((card) => (
              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 ${card.color} glow-card`}
                style={{ width: 'calc(50% - 12px)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6 relative z-10 container">
                  <h3 className="text-2xl font-semibold text-white mb-2">{card.heading}</h3>
                  <h4 className="text-lg text-gray-200 mb-2">{card.subheading}</h4>
                  <div className="text-center mt-4">
                    <Link
                      to={card.link}
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Click Here
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            {Array.isArray(cardData) && cardData.map((card) => (
              <div key={card.title} className="text-center mt-4">
                <p className="text-gray-200">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    TutorialCards.defaultProps = {
        cardData: [
          {
            title: 'DBMS',
            heading: 'Database Management Systems',
            subheading: 'Explore the world of databases and data management.',
            description: 'Learn about relational databases, SQL, NoSQL, and database design principles.',
            image: 'https://www.nilebits.com/wp-content/uploads/2022/09/How-To-Choose-The-Right-Database-For-Your-Application.png',
            link: '/tutorials/dbms',
            color: 'bg-teal-500',
          },
          {
            title: 'Operating Systems',
            heading: 'Operating Systems',
            subheading: 'Understand the core principles of operating systems.',
            description: 'Dive into process management, memory management, file systems, and system calls.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            link: '/tutorials/operating-systems',
            color: 'bg-indigo-500',
          },
          {
            title: 'Software Engineering',
            heading: 'Software Engineering',
            subheading: 'Learn the principles and practices of software development.',
            description: 'Explore software development methodologies, design patterns, testing, and deployment.',
            image: 'https://img.freepik.com/premium-vector/word-cloud-background-concept-software-engineering-computer-programming-system-cloud-technology-development-application-management-vector-illustration_616200-4834.jpg?w=740',
            link: '/tutorials/software-engineering',
            color: 'bg-pink-500',
          },
          {
            title: 'Computer Networks',
            heading: 'Computer Networks',
            subheading: 'Explore the fundamentals of computer networking and protocols.',
            description: 'Understand network topologies, protocols, routing, and network security.',
            image: 'https://i.ytimg.com/vi/1RyuSTamvj8/maxresdefault.jpg',
            link: '/tutorials/computer-networks',
            color: 'bg-lime-500',
          },
          {
            title: 'Algorithms',
            heading: 'Algorithms',
            subheading: 'Master essential algorithms for problem-solving.',
            description: 'Learn about sorting, searching, graph algorithms, dynamic programming, and more.',
            image: 'https://qsstudy.com/wp-content/uploads/2019/01/Algorithm-1.jpg',
            link: '/tutorials/algorithms',
            color: 'bg-orange-500',
          },
          {
            title: 'To-Do List App',
            heading: 'To-Do List App',
            subheading: 'Build a simple to-do list application',
            description: 'Create a basic to-do list app with add and remove functionality.',
            image: 'https://placekitten.com/150/122',
            link: '/tutorials/todo-list',
            color: 'bg-yellow-500',
          },
        ],
      };

    export default TutorialCards;
