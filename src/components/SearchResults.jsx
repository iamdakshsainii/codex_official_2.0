import React from 'react';
    import { useLocation, Link } from 'react-router-dom';

    function SearchResults() {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const searchQuery = queryParams.get('q');

      // Dummy data for demonstration
      const searchResults = [
        { title: 'Web Development Projects', link: '/projects/web-development', type: 'project' },
        { title: 'Android Development Projects', link: '/projects/android-development', type: 'project' },
        { title: 'Machine Learning Projects', link: '/projects/machine-learning', type: 'project' },
        { title: 'Data Science Projects', link: '/projects/data-science', type: 'project' },
        { title: 'Cloud Computing Projects', link: '/projects/cloud-computing', type: 'project' },
        { title: 'Cybersecurity Projects', link: '/projects/cybersecurity', type: 'project' },
        { title: 'Game Development Projects', link: '/projects/game-development', type: 'project' },
        { title: 'IoT Projects', link: '/projects/iot-projects', type: 'project' },
        { title: 'Data Analytics Projects', link: '/projects/data-analytics', type: 'project' },
        { title: 'DevOps Projects', link: '/projects/devops', type: 'project' },
        { title: 'Software Developer Career Path', link: '/careers/software-developer', type: 'career' },
        { title: 'Frontend Developer Career Path', link: '/careers/frontend-developer', type: 'career' },
        { title: 'Backend Developer Career Path', link: '/careers/backend-developer', type: 'career' },
        { title: 'Data Scientist Career Path', link: '/careers/data-scientist', type: 'career' },
        { title: 'Cloud Engineer Career Path', link: '/careers/cloud-engineer', type: 'career' },
        { title: 'Cybersecurity Analyst Career Path', link: '/careers/cybersecurity-analyst', type: 'career' },
        { title: 'UI/UX Designer Career Path', link: '/careers/ui-ux-designer', type: 'career' },
        { title: 'AI/ML Engineer Career Path', link: '/careers/ai-ml-engineer', type: 'career' },
        { title: 'DevOps Engineer Career Path', link: '/careers/devops-engineer', type: 'career' },
        { title: 'Mobile App Developer Career Path', link: '/careers/mobile-app-developer', type: 'career' },
        { title: 'Blockchain Developer Career Path', link: '/careers/blockchain-developer', type: 'career' },
        { title: 'Embedded Systems Engineer Career Path', link: '/careers/embedded-systems-engineer', type: 'career' },
        { title: 'Technical Writer Career Path', link: '/careers/technical-writer', type: 'career' },
        { title: 'Game Developer Career Path', link: '/careers/game-developer', type: 'career' },
        { title: "HACKHAZARDS '25", link: 'https://hackhazards24.devfolio.co/', type: 'event' },
        { title: 'Google Cloud x MLB(TM) Hackathon', link: 'https://next2025challenge.devpost.com/', type: 'event' },
        { title: 'Smart India Hackathon', link: 'https://sih.gov.in/', type: 'event' },
        { title: 'Sparkathon 2025', link: 'https://walmart.converge.tech/content/converge/en_in/sparkathon.html', type: 'event' },
        { title: 'India Tech Summit', link: 'https://www.eventbrite.com/e/india-tech-summit-tickets-97765875365?aff=ebdssbdestsearch', type: 'event' },
        { title: 'Google Girl Hackathon', link: 'https://buildyourfuture.withgoogle.com/programs/girl-hackathon', type: 'event' },
        { title: 'MLH Local Hack Day', link: 'https://localhackday.mlh.io/', type: 'event' },
        { title: 'CodeChef SnackDown', link: 'https://www.codechef.com/snackdown', type: 'event' },
        { title: 'Microsoft Imagine Cup', link: 'https://imaginecup.microsoft.com/', type: 'event' },
        { title: 'ACM International Collegiate Programming Contest (ICPC)', link: 'https://icpc.global/', type: 'event' },
        { title: 'Year 1 Semester 1 Study Materials', link: '/resources/y1s1.pdf', type: 'study-material', subjects: ['Maths', 'Physics', 'Computer Science', 'Engineering Drawing', 'Mechanics'] },
        { title: 'Year 1 Semester 2 Study Materials', link: '/resources/y1s2.pdf', type: 'study-material', subjects: ['Chemistry', 'Biology', 'Electrical', 'Environmental Science', 'Engineering Mechanics'] },
        { title: 'Year 2 Semester 1 Study Materials', link: '/resources/y2s1.pdf', type: 'study-material', subjects: ['Data Structures', 'Algorithm', 'Electronics', 'Digital Logic', 'Signals and Systems'] },
        { title: 'Year 2 Semester 2 Study Materials', link: '/resources/y2s2.pdf', type: 'study-material', subjects: ['Database', 'Operating Systems', 'Networking', 'Software Engineering', 'Mathematics II'] },
        { title: 'Year 3 Semester 1 Study Materials', link: '/resources/y3s1.pdf', type: 'study-material', subjects: ['Web Development', 'AI', 'Software Engineering', 'Computer Networks', 'Database Systems'] },
        { title: 'Year 3 Semester 2 Study Materials', link: '/resources/y3s2.pdf', type: 'study-material', subjects: ['Machine Learning', 'Cloud Computing', 'Security', 'Cryptography', 'Mobile Computing'] },
        { title: 'Year 4 Semester 1 Study Materials', link: '/resources/y4s1.pdf', type: 'study-material', subjects: ['Advanced Algorithms', 'Big Data', 'DevOps', 'Blockchain', 'Artificial Intelligence'] },
        { title: 'Year 4 Semester 2 Study Materials', link: '/resources/y4s2.pdf', type: 'study-material', subjects: ['Blockchain', 'IoT', 'Cybersecurity', 'Cloud Security', 'Network Security'] },
      ];

      const filteredResults = searchResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery?.toLowerCase() || '') ||
        (result.subjects && result.subjects.some(subject => subject.toLowerCase().includes(searchQuery?.toLowerCase() || '')))
      );

      const categorizedResults = {
        'project': [],
        'career': [],
        'study-material': [],
        'event': [],
      };

      filteredResults.forEach(result => {
        if (categorizedResults[result.type]) {
          categorizedResults[result.type].push(result);
        }
      });

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Search Results</h1>
          {searchQuery ? (
            filteredResults.length > 0 ? (
              <>
                {Object.keys(categorizedResults).map(type => (
                  categorizedResults[type].length > 0 && (
                    <div key={type} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-4 capitalize">{type}</h2>
                      <ul className="space-y-4">
                        {categorizedResults[type].map((result, index) => (
                          <li key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                            {result.type === 'event' ? (
                              <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                {result.title}
                              </a>
                            ) : result.type === 'study-material' ? (
                              <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                {result.title}
                              </a>
                            ) : (
                              <Link to={result.link} className="text-blue-400 hover:underline">
                                {result.title}
                              </Link>
                            )}
                            {result.subjects && result.subjects.length > 0 && (
                              <p className="text-gray-400 text-sm ml-2">
                                Subjects: {result.subjects.join(', ')}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </>
            ) : (
              <p className="text-gray-400 text-center">
                We are under development. Please come back in the future, maybe you will get what you are looking for!
                <Link to="/khazana" className="text-blue-500 hover:underline ml-1">
                  Go to Khazana
                </Link>
              </p>
            )
          ) : (
            <p className="text-gray-400 text-center">
              Please enter a search query.
            </p>
          )}
        </div>
      );
    }

    export default SearchResults;
