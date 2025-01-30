import React, { useState, useEffect, useRef } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import { Bookmark, BookmarkMinus, FileText } from 'lucide-react';
    import NoteModal from '../../components/NoteModal';

    const projectData = {
      'iot-projects': {
        title: 'IoT Projects',
        description: 'Explore the world of connected devices and IoT.',
        levels: {
          'Basic': [
            { name: 'Blink an LED with Arduino', technologies: ['Arduino', 'C++'], message: 'Start with the basics! Control an LED using Arduino.', resources: [
              { title: 'Arduino Documentation', url: 'https://www.arduino.cc/reference/en/', type: 'Website' },
              { title: 'Arduino Tutorial', url: 'https://www.youtube.com/watch?v=fJWR7dB1rqo', type: 'YouTube' }
            ] },
            { name: 'Read Sensor Data with Raspberry Pi', technologies: ['Raspberry Pi', 'Python'], message: 'Read data from a sensor! Focus on sensor interfacing and data handling.', resources: [
              { title: 'Raspberry Pi Documentation', url: 'https://www.raspberrypi.com/documentation/', type: 'Website' },
              { title: 'Raspberry Pi Tutorial', url: 'https://www.youtube.com/watch?v=s71-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Control a Servo Motor with Arduino', technologies: ['Arduino', 'C++'], message: 'Control a servo motor! Focus on motor control and basic robotics.', resources: [
              { title: 'Arduino Servo Library', url: 'https://www.arduino.cc/reference/en/libraries/servo/', type: 'Website' },
              { title: 'Servo Motor Control Tutorial', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', type: 'YouTube' }
            ] },
            { name: 'Display Sensor Data on LCD with Raspberry Pi', technologies: ['Raspberry Pi', 'Python', 'LCD'], message: 'Display sensor data on an LCD! Focus on display interfacing and data visualization.', resources: [
              { title: 'Raspberry Pi LCD Guide', url: 'https://www.raspberrypi.com/tutorials/lcd-screen-on-raspberry-pi/', type: 'Website' },
              { title: 'LCD Interfacing Tutorial', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', type: 'YouTube' }
            ] }
          ],
          'Intermediate': [
            { name: 'Build a Smart Home System with ESP32', technologies: ['ESP32', 'Arduino', 'MQTT'], message: 'Build a smart home system! Focus on wireless communication and IoT protocols.', resources: [] },
            { name: 'Create a Weather Station with Raspberry Pi', technologies: ['Raspberry Pi', 'Python', 'Sensors'], message: 'Create a weather station! Focus on sensor integration and data logging.', resources: [] },
            { name: 'Build a Remote Monitoring System with Arduino', technologies: ['Arduino', 'GSM', 'Cloud'], message: 'Build a remote monitoring system! Focus on wireless communication and cloud integration.', resources: [] },
            { name: 'Create a Smart Agriculture System with ESP32', technologies: ['ESP32', 'Sensors', 'Cloud'], message: 'Create a smart agriculture system! Focus on sensor data and cloud analytics.', resources: [] }
          ],
          'Master': [
            { name: 'Build a Smart City System with Multiple Devices', technologies: ['Multiple IoT Devices', 'Cloud', 'MQTT'], message: 'Build a smart city system! Focus on large-scale IoT deployments and data management.', resources: [] },
            { name: 'Create a Predictive Maintenance System with IoT', technologies: ['IoT Devices', 'Machine Learning', 'Cloud'], message: 'Create a predictive maintenance system! Focus on machine learning and data analysis.', resources: [] },
            { name: 'Build a Smart Healthcare System with Wearables', technologies: ['Wearable Devices', 'Cloud', 'Data Analysis'], message: 'Build a smart healthcare system! Focus on wearable devices and data analysis.', resources: [] },
            { name: 'Create a Smart Transportation System with IoT', technologies: ['IoT Devices', 'GPS', 'Cloud'], message: 'Create a smart transportation system! Focus on location tracking and data analysis.', resources: [] }
          ]
        }
      },
      'data-analytics': {
        title: 'Data Analytics',
        description: 'Learn data analysis techniques and tools.',
        levels: {
          'Basic': [
            { name: 'Learn Basic SQL Queries', technologies: ['SQL'], message: 'Write basic SQL queries to retrieve data from databases.', resources: [
              { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'Website' },
              { title: 'SQL for Data Analysis', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', type: 'YouTube' }
            ] },
            { name: 'Explore Data with Pandas', technologies: ['Python', 'Pandas'], message: 'Use Pandas to explore and manipulate datasets.', resources: [
              { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', type: 'Website' },
              { title: 'Python Pandas Tutorial', url: 'https://www.youtube.com/watch?v=e60ItWLvj-s', type: 'YouTube' }
            ] },
            { name: 'Create Basic Charts with Matplotlib', technologies: ['Python', 'Matplotlib'], message: 'Create basic charts to visualize data.', resources: [
              { title: 'Matplotlib Documentation', url: 'https://matplotlib.org/stable/contents.html', type: 'Website' },
              { title: 'Python Matplotlib Tutorial', url: 'https://www.youtube.com/watch?v=3-012r6D09U', type: 'YouTube' }
            ] },
            { name: 'Calculate Descriptive Statistics', technologies: ['Python', 'Pandas'], message: 'Calculate descriptive statistics for datasets.', resources: [
              { title: 'Pandas Descriptive Statistics', url: 'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html', type: 'Website' },
              { title: 'Descriptive Statistics Tutorial', url: 'https://www.youtube.com/watch?v=0j7s_0_1_1_1', type: 'YouTube' }
            ] }
          ],
          'Intermediate': [
            { name: 'Exploratory Data Analysis (EDA)', technologies: ['Python', 'Pandas', 'Seaborn'], message: 'Perform exploratory data analysis! Focus on data distribution and relationships.', resources: [
              { title: 'Seaborn Documentation', url: 'https://seaborn.pydata.org/tutorial.html', type: 'Website' },
              { title: 'Exploratory Data Analysis Tutorial', url: 'https://www.youtube.com/watch?v=v-620-b-1-0', type: 'YouTube' }
            ] },
            { name: 'Data Analysis with SQL', technologies: ['Python', 'SQL', 'Pandas'], message: 'Analyze data using SQL! Focus on database queries and data retrieval.', resources: [
              { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'Website' },
              { title: 'SQL for Data Analysis', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', type: 'YouTube' }
            ] },
            { name: 'Time Series Analysis', technologies: ['Python', 'Pandas', 'Statsmodels'], message: 'Analyze time series data! Focus on time series decomposition and forecasting.', resources: [
              { title: 'Statsmodels Time Series', url: 'https://www.statsmodels.org/stable/tsa.html', type: 'Website' },
              { title: 'Time Series Analysis Tutorial', url: 'https://www.youtube.com/watch?v=0j7s_0_1_1_1', type: 'YouTube' }
            ] },
            { name: 'A/B Testing Analysis', technologies: ['Python', 'Pandas', 'Statsmodels'], message: 'Analyze A/B testing results! Focus on statistical significance and hypothesis testing.', resources: [
              { title: 'Statsmodels Hypothesis Testing', url: 'https://www.statsmodels.org/stable/stats.html', type: 'Website' },
              { title: 'A/B Testing Tutorial', url: 'https://www.youtube.com/watch?v=0j7s_0_1_1_1', type: 'YouTube' }
            ] }
          ],
          'Master': [
            { name: 'Machine Learning Model Deployment', technologies: ['Python', 'Flask', 'Docker'], message: 'Deploy a machine learning model! Focus on API development and containerization.', resources: [
              { title: 'Flask Documentation', url: 'https://flask.palletsprojects.com/en/2.3.x/', type: 'Website' },
              { title: 'Docker Tutorial', url: 'https://www.youtube.com/watch?v=3c1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Big Data Analysis with Spark', technologies: ['Python', 'PySpark', 'Hadoop'], message: 'Analyze big data using Spark! Focus on distributed computing and data processing.', resources: [
              { title: 'PySpark Documentation', url: 'https://spark.apache.org/docs/latest/api/python/', type: 'Website' },
              { title: 'PySpark Tutorial', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', type: 'YouTube' }
            ] },
            { name: 'Advanced Data Visualization with D3.js', technologies: ['JavaScript', 'D3.js'], message: 'Create advanced data visualizations! Focus on interactive charts and data storytelling.', resources: [
              { title: 'D3.js Documentation', url: 'https://d3js.org/', type: 'Website' },
              { title: 'D3.js Tutorial', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', type: 'YouTube' }
            ] },
            { name: 'Building a Data Pipeline', technologies: ['Python', 'Airflow', 'Cloud Services'], message: 'Build a data pipeline! Focus on data ingestion, transformation, and loading.', resources: [
              { title: 'Apache Airflow Documentation', url: 'https://airflow.apache.org/docs/', type: 'Website' },
              { title: 'Data Pipeline Tutorial', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', type: 'YouTube' }
            ] }
          ]
        }
      },
      'devops': {
        title: 'DevOps',
        description: 'Master DevOps practices and tools.',
        levels: {
          'Basic': [
            { name: 'Learn Basic Linux Commands', technologies: ['Linux'], message: 'Master basic Linux commands for system administration.', resources: [
              { title: 'Linux Documentation', url: 'https://www.linux.org/docs/', type: 'Website' },
              { title: 'Linux Tutorial', url: 'https://www.youtube.com/watch?v=wbpMiKiSKm8', type: 'YouTube' }
            ] },
            { name: 'Set up a Docker Container', technologies: ['Docker'], message: 'Set up a Docker container to run applications.', resources: [
              { title: 'Docker Documentation', url: 'https://docs.docker.com/', type: 'Website' },
              { title: 'Docker Tutorial', url: 'https://www.youtube.com/watch?v=3c1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Create a Simple CI/CD Pipeline with GitHub Actions', technologies: ['GitHub Actions'], message: 'Create a simple CI/CD pipeline to automate deployments.', resources: [
              { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'Website' },
              { title: 'GitHub Actions Tutorial', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', type: 'YouTube' }
            ] },
            { name: 'Learn Basic Git Commands', technologies: ['Git'], message: 'Master basic Git commands for version control.', resources: [
              { title: 'Git Documentation', url: 'https://git-scm.com/doc', type: 'Website' },
              { title: 'Git Tutorial', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', type: 'YouTube' }
            ] }
          ],
          'Intermediate': [
            { name: 'Set up a Kubernetes Cluster', technologies: ['Kubernetes'], message: 'Set up a Kubernetes cluster to manage containerized applications.', resources: [
              { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/', type: 'Website' },
              { title: 'Kubernetes Tutorial', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', type: 'YouTube' }
            ] },
            { name: 'Implement Infrastructure as Code with Terraform', technologies: ['Terraform'], message: 'Implement infrastructure as code to manage cloud resources.', resources: [
              { title: 'Terraform Documentation', url: 'https://www.terraform.io/docs', type: 'Website' },
              { title: 'Terraform Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Automate Deployments with Ansible', technologies: ['Ansible'], message: 'Automate deployments with Ansible for configuration management.', resources: [
              { title: 'Ansible Documentation', url: 'https://docs.ansible.com/', type: 'Website' },
              { title: 'Ansible Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] },
            { name: 'Monitor Applications with Prometheus and Grafana', technologies: ['Prometheus', 'Grafana'], message: 'Monitor applications using Prometheus and Grafana.', resources: [
              { title: 'Prometheus Documentation', url: 'https://prometheus.io/docs/', type: 'Website' },
              { title: 'Grafana Documentation', url: 'https://grafana.com/docs/', type: 'Website' }
            ] }
          ],
          'Master': [
            { name: 'Build a Scalable Microservices Architecture', technologies: ['Docker', 'Kubernetes', 'API Gateway'], message: 'Build a scalable microservices architecture! Focus on container orchestration and API design.', resources: [] },
            { name: 'Implement a CI/CD Pipeline with Jenkins', technologies: ['Jenkins', 'Git', 'Docker'], message: 'Implement a CI/CD pipeline with Jenkins! Focus on automation and continuous integration.', resources: [] },
            { name: 'Set up a Monitoring System with ELK Stack', technologies: ['ELK Stack', 'Prometheus', 'Grafana'], message: 'Set up a monitoring system with ELK Stack! Focus on log management and monitoring.', resources: [] },
            { name: 'Build a Cloud-Native Application', technologies: ['Docker', 'Kubernetes', 'Cloud Services'], message: 'Build a cloud-native application! Focus on cloud services and container orchestration.', resources: [] }
          ]
        }
      },
      'game-development': {
        title: 'Game Development',
        description: 'Creating interactive games using Unity and Unreal Engine.',
        levels: {
          'Basic': [
            { name: 'Simple 2D Platformer Game', technologies: ['Unity', 'C#'], message: 'Create a simple 2D platformer! Focus on basic game mechanics and player movement.', resources: [
              { title: 'Unity Documentation', url: 'https://docs.unity3d.com/Manual/', type: 'Website' },
              { title: 'Unity 2D Platformer Tutorial', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', type: 'YouTube' }
            ] },
            { name: 'Basic Puzzle Game', technologies: ['Unity', 'C#'], message: 'Build a basic puzzle game! Focus on game logic and puzzle design.', resources: [
              { title: 'Unity Documentation', url: 'https://docs.unity3d.com/Manual/', type: 'Website' },
              { title: 'Unity Puzzle Game Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Simple First-Person Shooter', technologies: ['Unreal Engine', 'C++'], message: 'Create a simple first-person shooter! Focus on player movement and shooting mechanics.', resources: [
              { title: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/', type: 'Website' },
              { title: 'Unreal Engine FPS Tutorial', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Basic Top-Down Shooter', technologies: ['Unity', 'C#'], message: 'Build a basic top-down shooter! Focus on player movement and enemy AI.', resources: [
              { title: 'Unity Documentation', url: 'https://docs.unity3d.com/Manual/', type: 'Website' },
              { title: 'Unity Top-Down Shooter Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] },
            { name: 'Simple Racing Game', technologies: ['Unreal Engine', 'C++'], message: 'Create a simple racing game! Focus on vehicle physics and track design.', resources: [
              { title: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/', type: 'Website' },
              { title: 'Unreal Engine Racing Tutorial', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'YouTube' }
            ] }
          ],
          'Intermediate': [
            { name: 'Multiplayer Game with Networking', technologies: ['Unity', 'C#', 'Photon'], message: 'Build a multiplayer game! Focus on networking and real-time interactions.', resources: [
              { title: 'Photon Documentation', url: 'https://doc.photonengine.com/', type: 'Website' },
              { title: 'Unity Multiplayer Tutorial', url: 'https://www.youtube.com/watch?v=j59qQ7Yk20o', type: 'YouTube' }
            ] },
            { name: '3D Adventure Game', technologies: ['Unreal Engine', 'C++'], message: 'Create a 3D adventure game! Focus on level design and character interaction.', resources: [
              { title: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/', type: 'Website' },
              { title: 'Unreal Engine 3D Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Mobile Game with Touch Controls', technologies: ['Unity', 'C#', 'Android SDK'], message: 'Build a mobile game with touch controls! Focus on mobile UI and touch input.', resources: [
              { title: 'Unity Touch Input Docs', url: 'https://docs.unity3d.com/Manual/MobileInput.html', type: 'Website' },
              { title: 'Unity Mobile Game Tutorial', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'RPG Game with Inventory System', technologies: ['Unity', 'C#'], message: 'Create an RPG game with an inventory system! Focus on game mechanics and data management.', resources: [
              { title: 'Unity Inventory System Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' },
              { title: 'Unity Documentation', url: 'https://docs.unity3d.com/Manual/', type: 'Website' }
            ] },
            { name: 'Puzzle Game with Advanced Mechanics', technologies: ['Unreal Engine', 'C++'], message: 'Build a puzzle game with advanced mechanics! Focus on puzzle design and logic.', resources: [
              { title: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/', type: 'Website' },
              { title: 'Unreal Engine Puzzle Tutorial', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'YouTube' }
            ] }
          ],
          'Master': [
            { name: 'Advanced AI for Game Characters', technologies: ['Unity', 'C#', 'Behavior Trees'], message: 'Implement advanced AI for game characters! Focus on behavior trees and AI algorithms.', resources: [
              { title: 'Unity AI Navigation', url: 'https://docs.unity3d.com/Manual/nav-BuildingNavMesh.html', type: 'Website' },
              { title: 'Behavior Trees Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Procedural Content Generation', technologies: ['Unreal Engine', 'C++', 'Algorithms'], message: 'Create procedural content! Focus on algorithms and random generation.', resources: [
              { title: 'Unreal Engine Procedural Generation', url: 'https://docs.unrealengine.com/4.27/en-US/Basics/Levels/WorldComposition/', type: 'Website' },
              { title: 'Procedural Generation Tutorial', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'VR Game Development', technologies: ['Unity', 'C#', 'VR SDK'], message: 'Build a VR game! Focus on VR interaction and immersion.', resources: [
              { title: 'Unity VR Documentation', url: 'https://docs.unity3d.com/Manual/VROverview.html', type: 'Website' },
              { title: 'Unity VR Tutorial', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', type: 'YouTube' }
            ] },
            { name: 'Open-World Game with Dynamic Environment', technologies: ['Unreal Engine', 'C++', 'World Composition'], message: 'Create an open-world game! Focus on world composition and dynamic environments.', resources: [
              { title: 'Unreal Engine World Composition', url: 'https://docs.unrealengine.com/4.27/en-US/Basics/Levels/WorldComposition/', type: 'Website' },
              { title: 'Open-World Game Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] },
            { name: 'Multiplayer Game with Custom Server', technologies: ['Unity', 'C#', 'Custom Server'], message: 'Build a multiplayer game with a custom server! Focus on server-side logic and networking.', resources: [
              { title: 'Unity Networking Documentation', url: 'https://docs.unity3d.com/Manual/UNet.html', type: 'Website' },
              { title: 'Multiplayer Game Tutorial', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'YouTube' }
            ] }
          ]
        }
      }
    };

    function ProjectDetails03() {
      const { projectTitle } = useParams();
      const navigate = useNavigate();
      const project = projectData[projectTitle];
      const [completedProjects, setCompletedProjects] = useState({});
      const [completionMessage, setCompletionMessage] = useState('');
      const [resourceModal, setResourceModal] = useState({ isOpen: false, resources: [] });
      const [notes, setNotes] = useState(() => {
        const storedNotes = localStorage.getItem(`projectNotes-${projectTitle}`) || '{}';
        return JSON.parse(storedNotes);
      });
      const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
      const [currentNoteItem, setCurrentNoteItem] = useState(null);
      const dbRef = useRef(null);

      useEffect(() => {
        const openDB = () => {
          return new Promise((resolve, reject) => {
            const request = window.indexedDB.open('projectDB', 1);

            request.onerror = (event) => {
              console.error('Error opening database', event);
              reject(event.target.error);
            };

            request.onsuccess = (event) => {
              dbRef.current = event.target.result;
              resolve();
            };

            request.onupgradeneeded = (event) => {
              const db = event.target.result;
              if (!db.objectStoreNames.contains('projects')) {
                db.createObjectStore('projects');
              }
            };
          });
        };

        const closeDB = () => {
          if (dbRef.current) {
            dbRef.current.close();
            dbRef.current = null;
          }
        };

        openDB().catch(console.error);

        return () => {
          closeDB();
        };
      }, []);

      useEffect(() => {
        localStorage.setItem(`projectNotes-${projectTitle}`, JSON.stringify(notes));
      }, [notes, projectTitle]);

      const handleProjectComplete = (level, projectName) => {
        if (!dbRef.current) {
          console.error('Database not initialized');
          return;
        }

        const db = dbRef.current;
        const transaction = db.transaction(['projects'], 'readwrite');
        const store = transaction.objectStore('projects');

        const key = `${projectTitle}-${level}-${projectName}`;
        const request = store.put(true, key);

        request.onsuccess = () => {
          setCompletedProjects(prev => ({
            ...prev,
            [level]: {
              ...prev[level],
              [projectName]: true,
            }
          }));
          setCompletionMessage('Congratulations! You have completed this project.');
          setTimeout(() => setCompletionMessage(''), 3000);
        };

        request.onerror = (event) => {
          console.error('Error saving project completion', event);
        };
      };

      const handlePrev = () => {
        navigate(-1);
      };

      const handleNext = () => {
        navigate(1);
      };

      const handleOpenResources = (resources) => {
        setResourceModal({ isOpen: true, resources });
      };

      const handleCloseResources = () => {
        setResourceModal({ isOpen: false, resources: [] });
      };

      const handleOpenNoteModal = (itemName, resources) => {
        setCurrentNoteItem(itemName);
        setIsNoteModalOpen(true);
      };

      const handleCloseNoteModal = () => {
        setIsNoteModalOpen(false);
        setCurrentNoteItem(null);
      };

      const handleSaveNote = (noteText, resources) => {
        setNotes(prevNotes => ({
          ...prevNotes,
          [currentNoteItem]: { noteText, resources },
        }));
        handleCloseNoteModal();
      };

      const projectKeys = Object.keys(projectData);
      const currentIndex = projectKeys.indexOf(projectTitle);
      const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
      const nextProject = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

      return (
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
            >
              Next
            </button>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>
          <p className="text-gray-400 text-center mb-8">{project.description}</p>
          {completionMessage && (
            <div className="text-center mb-8 text-green-500 font-semibold">
              {completionMessage}
            </div>
          )}
          <div className="space-y-8">
            {Object.keys(project.levels).map((level) => (
              <div key={level} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4">{level}</h2>
                <ul className="space-y-4">
                  {project.levels[level].map((item) => (
                    <li key={item.name} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{item.message}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.technologies.map((tech, index) => (
                            <span key={index} className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">{tech}</span>
                          ))}
                        </div>
                         <div className="mt-2">
                          <button
                            onClick={() => handleOpenNoteModal(item.name, item.resources)}
                            className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs flex items-center"
                          >
                            <FileText className="h-4 w-4 mr-1" />
                            Add Notes
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => handleOpenResources(item.resources)}
                          className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs"
                        >
                          Resources
                        </button>
                        <button
                          onClick={() => handleProjectComplete(level, item.name)}
                          disabled={completedProjects[level]?.[item.name]}
                          className={`px-4 py-2 rounded hover:bg-blue-600 transition-all text-xs ${completedProjects[level]?.[item.name] ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                        >
                          {completedProjects[level]?.[item.name] ? 'Completed!' : 'Mark Complete'}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {resourceModal.isOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                <h3 className="text-2xl font-semibold text-center mb-4">Resources</h3>
                <ul className="space-y-2">
                  {resourceModal.resources && Array.isArray(resourceModal.resources) && resourceModal.resources.map((resource, index) => (
                    <li key={index} className="text-gray-300 text-left">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        {resource.title} ({resource.type})
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-6">
                  <button
                    onClick={handleCloseResources}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
           {isNoteModalOpen && (
            <NoteModal
              isOpen={isNoteModalOpen}
              onClose={handleCloseNoteModal}
              onSave={handleSaveNote}
              initialNote={notes[currentNoteItem]?.noteText || ''}
              itemName={currentNoteItem}
              initialResources={notes[currentNoteItem]?.resources || []}
            />
          )}
        </div>
      );
    }

    export default ProjectDetails03;
