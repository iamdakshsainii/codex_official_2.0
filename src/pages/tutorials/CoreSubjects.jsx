import React from 'react';
    import TutorialCards from '../../components/TutorialCards';

    const cardData = [
      {
        title: 'DBMS',
        heading: 'Database Management Systems',
        subheading: 'Explore the world of databases and data management.',
        description: 'Learn about relational databases, SQL, NoSQL, and database design principles.',
        image: 'https://www.nilebits.com/wp-content/uploads/2022/09/How-To-Choose-The-Right-Database-For-Your-Application.png',
        link: '/tutorials/dbms',
        color: 'bg-teal-500',
        syllabus: [
          'Introduction to Database Systems',
          'Relational Model',
          'SQL Fundamentals',
          'Advanced SQL',
          'Database Design',
          'Normalization',
          'Transaction Management',
          'NoSQL Databases',
          'Database Security',
          'Database Tuning',
        ],
        resources: [
          { title: 'Database System Concepts', url: 'https://www.db-book.com/' },
          { title: 'SQLZoo', url: 'https://sqlzoo.net/' },
          { title: 'MongoDB University', url: 'https://university.mongodb.com/' },
        ],
      },
      {
        title: 'Operating Systems',
        heading: 'Operating Systems',
        subheading: 'Understand the core principles of operating systems.',
        description: 'Dive into process management, memory management, file systems, and system calls.',
        image: 'https://pcdonline.ie/wp-content/uploads/2022/02/Operating-System.jpg',
        link: '/tutorials/operating-systems',
        color: 'bg-indigo-500',
        syllabus: [
          'Introduction to Operating Systems',
          'Process Management',
          'Memory Management',
          'File Systems',
          'Input/Output Management',
          'Virtualization',
          'Concurrency Control',
          'Deadlocks',
          'Security in Operating Systems',
          'Real-Time Operating Systems',
        ],
        resources: [
          { title: 'Operating System Concepts', url: 'https://os-book.com/' },
          { title: 'MIT OpenCourseware: Operating Systems', url: 'https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/' },
          { title: 'Linux Kernel Documentation', url: 'https://www.kernel.org/doc/html/latest/' },
        ],
      },
      {
        title: 'Software Engineering',
        heading: 'Software Engineering',
        subheading: 'Learn the principles and practices of software development.',
        description: 'Explore software development methodologies, design patterns, testing, and deployment.',
        image: 'https://img.freepik.com/premium-vector/word-cloud-background-concept-software-engineering-computer-programming-system-cloud-technology-development-application-management-vector-illustration_616200-4834.jpg?w=740',
        link: '/tutorials/software-engineering',
        color: 'bg-pink-500',
        syllabus: [
          'Introduction to Software Engineering',
          'Software Development Life Cycle (SDLC)',
          'Requirements Engineering',
          'Software Design',
          'Software Testing',
          'Software Maintenance',
          'Software Project Management',
          'Agile Methodologies',
          'Design Patterns',
          'Software Architecture',
        ],
        resources: [
          { title: 'Software Engineering by Ian Sommerville', url: 'https://iansommerville.com/software-engineering-9/' },
          { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612' },
          { title: 'Agile Manifesto', url: 'https://agilemanifesto.org/' },
        ],
      },
      {
        title: 'Computer Networks',
        heading: 'Computer Networks',
        subheading: 'Explore the fundamentals of computer networking and protocols.',
        description: 'Understand network topologies, protocols, routing, and network security.',
        image: 'https://i.ytimg.com/vi/1RyuSTamvj8/maxresdefault.jpg',
        link: '/tutorials/computer-networks',
        color: 'bg-lime-500',
        syllabus: [
          'Introduction to Computer Networks',
          'Network Topologies',
          'Network Protocols',
          'TCP/IP Model',
          'Network Addressing',
          'Routing Algorithms',
          'Network Security',
          'Wireless Networks',
          'Network Performance',
          'Network Management',
        ],
        resources: [
          { title: 'Computer Networking: A Top-Down Approach', url: 'https://gaia.cs.umass.edu/kurose_ross/index.htm' },
          { title: 'TCP/IP Guide', url: 'https://www.tcpipguide.com/' },
          { title: 'Wireshark Documentation', url: 'https://www.wireshark.org/docs/' },
        ],
      },
      {
        title: 'Algorithms',
        heading: 'Algorithms',
        subheading: 'Master essential algorithms for problem-solving.',
        description: 'Learn about sorting, searching, graph algorithms, dynamic programming, and more.',
        image: 'https://qsstudy.com/wp-content/uploads/2019/01/Algorithm-1.jpg',
        link: '/tutorials/algorithms',
        color: 'bg-orange-500',
        syllabus: [
          'Introduction to Algorithms',
          'Sorting Algorithms',
          'Searching Algorithms',
          'Graph Algorithms',
          'Dynamic Programming',
          'Greedy Algorithms',
          'Divide and Conquer',
          'Backtracking',
          'String Algorithms',
          'Computational Complexity',
        ],
        resources: [
          { title: 'Introduction to Algorithms by Thomas H. Cormen', url: 'https://mitpress.mit.edu/9780262033848/introduction-to-algorithms/' },
          { title: 'Algorithms by Robert Sedgewick', url: 'https://algs4.cs.princeton.edu/home/' },
          { title: 'LeetCode', url: 'https://leetcode.com/' },
        ],
      },
    ];

    function CoreSubjects() {
      return (
          <TutorialCards cardData={cardData} />
      );
    }

    export default CoreSubjects;
