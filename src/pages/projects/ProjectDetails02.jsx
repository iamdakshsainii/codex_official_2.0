import React, { useState, useEffect, useRef } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import { FileText } from 'lucide-react';
    import NoteModal from '../../components/NoteModal';

    const projectData = {
      'data-science': {
        title: 'Data Science',
        description: 'Analyze and visualize data to extract valuable insights.',
        levels: {
          'Basic': [
            { name: 'Basic Data Analysis with Pandas', technologies: ['Python', 'Pandas'], message: 'Start with basic data analysis! Focus on data loading and manipulation.', resources: [
              { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', type: 'Website' },
              { title: 'Python Pandas Tutorial', url: 'https://www.youtube.com/watch?v=e60ItWLvj-s', type: 'YouTube' }
            ] },
            { name: 'Data Visualization with Matplotlib', technologies: ['Python', 'Matplotlib'], message: 'Create basic visualizations! Focus on plotting and data representation.', resources: [
              { title: 'Matplotlib Documentation', url: 'https://matplotlib.org/stable/contents.html', type: 'Website' },
              { title: 'Python Matplotlib Tutorial', url: 'https://www.youtube.com/watch?v=3-012r6D09U', type: 'YouTube' }
            ] },
            { name: 'Simple Data Cleaning Project', technologies: ['Python', 'Pandas'], message: 'Clean a dataset! Focus on handling missing values and outliers.', resources: [
              { title: 'Pandas Data Cleaning', url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html', type: 'Website' },
              { title: 'Data Cleaning Tutorial', url: 'https://www.youtube.com/watch?v=v-620-b-1-0', type: 'YouTube' }
            ] },
            { name: 'Descriptive Statistics Analysis', technologies: ['Python', 'Pandas'], message: 'Calculate descriptive statistics! Focus on mean, median, and standard deviation.', resources: [
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
      'cloud-computing': {
        title: 'Cloud Computing',
        description: 'Design and deploy scalable cloud-based solutions.',
        levels: {
          'Basic': [
            { name: 'Deploy a Static Website on AWS S3', technologies: ['AWS', 'S3'], message: 'Deploy a static website! Focus on cloud storage and basic deployment.', resources: [
              { title: 'AWS S3 Documentation', url: 'https://aws.amazon.com/s3/getting-started/', type: 'Website' },
              { title: 'AWS S3 Tutorial', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Create a Virtual Machine on Azure', technologies: ['Azure', 'Virtual Machines'], message: 'Create a virtual machine! Focus on cloud compute and basic configuration.', resources: [
              { title: 'Azure Virtual Machines Docs', url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/', type: 'Website' },
              { title: 'Azure VM Tutorial', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', type: 'YouTube' }
            ] },
            { name: 'Set up a Simple Web Server on Google Cloud', technologies: ['Google Cloud', 'Compute Engine'], message: 'Set up a web server! Focus on cloud compute and basic networking.', resources: [
              { title: 'Google Compute Engine Docs', url: 'https://cloud.google.com/compute/docs', type: 'Website' },
              { title: 'Google Compute Engine Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Deploy a Simple Application on AWS Elastic Beanstalk', technologies: ['AWS', 'Elastic Beanstalk'], message: 'Deploy a simple application! Focus on platform as a service.', resources: [
              { title: 'AWS Elastic Beanstalk Docs', url: 'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/welcome.html', type: 'Website' },
              { title: 'AWS Elastic Beanstalk Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] }
          ],
          'Intermediate': [
            { name: 'Deploy a Web Application with Docker on AWS ECS', technologies: ['AWS', 'Docker', 'ECS'], message: 'Deploy a web application with Docker! Focus on containerization and orchestration.', resources: [
              { title: 'AWS ECS Documentation', url: 'https://docs.aws.amazon.com/ecs/latest/developerguide/welcome.html', type: 'Website' },
              { title: 'Docker on AWS ECS Tutorial', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Set up a Kubernetes Cluster on Azure AKS', technologies: ['Azure', 'Kubernetes', 'AKS'], message: 'Set up a Kubernetes cluster! Focus on container orchestration and management.', resources: [
              { title: 'Azure Kubernetes Service Docs', url: 'https://learn.microsoft.com/en-us/azure/aks/', type: 'Website' },
              { title: 'Azure AKS Tutorial', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', type: 'YouTube' }
            ] },
            { name: 'Create a Serverless Function on Google Cloud Functions', technologies: ['Google Cloud', 'Cloud Functions'], message: 'Create a serverless function! Focus on function as a service.', resources: [
              { title: 'Google Cloud Functions Docs', url: 'https://cloud.google.com/functions/docs', type: 'Website' },
              { title: 'Google Cloud Functions Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Implement a CI/CD Pipeline with AWS CodePipeline', technologies: ['AWS', 'CodePipeline', 'CodeBuild'], message: 'Implement a CI/CD pipeline! Focus on automation and continuous delivery.', resources: [
              { title: 'AWS CodePipeline Docs', url: 'https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html', type: 'Website' },
              { title: 'AWS CodePipeline Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] }
          ],
          'Master': [
            { name: 'Build a Scalable Microservices Architecture on AWS', technologies: ['AWS', 'ECS', 'API Gateway', 'Lambda'], message: 'Build a scalable microservices architecture! Focus on distributed systems and API design.', resources: [
              { title: 'AWS Microservices Documentation', url: 'https://aws.amazon.com/microservices/', type: 'Website' },
               { title: 'Microservices Architecture Tutorial', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Implement a CI/CD Pipeline on Azure DevOps', technologies: ['Azure', 'DevOps', 'Pipelines'], message: 'Implement a CI/CD pipeline! Focus on automation and continuous integration.', resources: [
              { title: 'Azure DevOps Documentation', url: 'https://learn.microsoft.com/en-us/azure/devops/', type: 'Website' },
              { title: 'Azure DevOps Tutorial', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', type: 'YouTube' }
            ] },
            { name: 'Set up a Data Lake on Google Cloud Storage', technologies: ['Google Cloud', 'Cloud Storage', 'BigQuery'], message: 'Set up a data lake! Focus on data storage and analytics.', resources: [
              { title: 'Google Cloud Storage Docs', url: 'https://cloud.google.com/storage/docs', type: 'Website' },
              { title: 'Google Cloud Storage Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Build a Serverless Application with AWS Lambda', technologies: ['AWS', 'Lambda', 'API Gateway', 'DynamoDB'], message: 'Build a serverless application! Focus on function as a service and event-driven architecture.', resources: [
              { title: 'AWS Lambda Documentation', url: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html', type: 'Website' },
              { title: 'AWS Lambda Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] }
          ]
        }
      },
      'cybersecurity': {
        title: 'Cybersecurity',
        description: 'Protect systems and networks from cyber threats.',
        levels: {
          'Basic': [
            { name: 'Basic Network Scanning with Nmap', technologies: ['Nmap', 'Linux'], message: 'Perform basic network scanning! Focus on network discovery and port scanning.', resources: [
              { title: 'Nmap Documentation', url: 'https://nmap.org/docs/', type: 'Website' },
              { title: 'Nmap Tutorial', url: 'https://www.youtube.com/watch?v=3c1-1-01_g', type: 'YouTube' }
            ] },
            { name: 'Vulnerability Scanning with Nessus', technologies: ['Nessus', 'Linux'], message: 'Scan for vulnerabilities! Focus on vulnerability assessment and reporting.', resources: [
              { title: 'Nessus Documentation', url: 'https://www.tenable.com/downloads/nessus', type: 'Website' },
              { title: 'Nessus Tutorial', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', type: 'YouTube' }
            ] },
            { name: 'Simple Password Cracking with John the Ripper', technologies: ['John the Ripper', 'Linux'], message: 'Crack passwords! Focus on password cracking techniques and tools.', resources: [
              { title: 'John the Ripper Documentation', url: 'https://www.openwall.com/john/', type: 'Website' },
              { title: 'John the Ripper Tutorial', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', type: 'YouTube' }
            ] },
            { name: 'Basic Web Application Security Testing', technologies: ['Burp Suite', 'OWASP ZAP'], message: 'Perform basic web application security testing! Focus on common vulnerabilities.', resources: [
              { title: 'Burp Suite Documentation', url: 'https://portswigger.net/burp/documentation', type: 'Website' },
              { title: 'OWASP ZAP Documentation', url: 'https://owasp.org/www-project-zap/', type: 'Website' }
            ] }
          ],
          'Intermediate': [
            { name: 'Web Application Penetration Testing', technologies: ['Burp Suite', 'OWASP ZAP'], message: 'Perform web application penetration testing! Focus on OWASP top 10 vulnerabilities.', resources: [
              { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'Website' },
              { title: 'Web Application Penetration Testing Tutorial', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', type: 'YouTube' }
            ] },
            { name: 'Network Traffic Analysis with Wireshark', technologies: ['Wireshark', 'Linux'], message: 'Analyze network traffic! Focus on packet capture and analysis.', resources: [
              { title: 'Wireshark Documentation', url: 'https://www.wireshark.org/docs/', type: 'Website' },
              { title: 'Wireshark Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] },
            { name: 'Security Auditing and Compliance', technologies: ['Security Frameworks', 'Compliance Standards'], message: 'Perform security auditing and compliance checks! Focus on security frameworks and standards.', resources: [
              { title: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', type: 'Website' },
              { title: 'Security Auditing Tutorial', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', type: 'YouTube' }
            ] },
            { name: 'Incident Response', technologies: ['Malware Analysis', 'Forensics'], message: 'Respond to security incidents! Focus on malware analysis and forensics.', resources: [
              { title: 'Malware Analysis Tutorial', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'YouTube' },
              { title: 'Digital Forensics Tutorial', url: 'https://www.youtube.com/watch?v=j59qQ7Yk20o', type: 'YouTube' }
            ] }
          ],
          'Master': [
            { name: 'Advanced Penetration Testing with Metasploit', technologies: ['Metasploit', 'Linux'], message: 'Perform advanced penetration testing! Focus on exploitation and post-exploitation.', resources: [
              { title: 'Metasploit Documentation', url: 'https://docs.metasploit.com/', type: 'Website' },
              { title: 'Metasploit Tutorial', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', type: 'YouTube' }
            ] },
            { name: 'Malware Analysis', technologies: ['IDA Pro', 'Ghidra', 'Sandbox'], message: 'Analyze malware! Focus on reverse engineering and malware behavior.', resources: [
              { title: 'IDA Pro Documentation', url: 'https://hex-rays.com/ida-pro/', type: 'Website' },
              { title: 'Ghidra Tutorial', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', type: 'YouTube' }
            ] },
            { name: 'Building a Security Information and Event Management (SIEM) System', technologies: ['ELK Stack', 'Security Tools'], message: 'Build a SIEM system! Focus on log management and security monitoring.', resources: [
              { title: 'ELK Stack Documentation', url: 'https://www.elastic.co/guide/index.html', type: 'Website' },
              { title: 'SIEM Tutorial', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', type: 'YouTube' }
            ] },
            { name: 'Developing a Custom Security Tool', technologies: ['Python', 'Security Libraries'], message: 'Develop a custom security tool! Focus on security automation and tool development.', resources: [
              { title: 'Python Security Libraries', url: 'https://pypi.org/search/?q=security', type: 'Website' },
              { title: 'Python Security Tool Tutorial', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', type: 'YouTube' }
            ] }
          ]
        }
      }
    };

    function ProjectDetails02() {
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

    export default ProjectDetails02;
