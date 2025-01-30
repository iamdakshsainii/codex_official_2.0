import React, { useState, useEffect } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';

    function Favorites() {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const subjectName = queryParams.get('subject');
      const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favoriteSubjects');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
      });
      const navigate = useNavigate();
      const [subjectDetails, setSubjectDetails] = useState(null);
      const [skillDetails, setSkillDetails] = useState(null);

      useEffect(() => {
        localStorage.setItem('favoriteSubjects', JSON.stringify(favorites));
      }, [favorites]);

      useEffect(() => {
        if (subjectName) {
          const studyMaterials = [
            {
              year: 1,
              semesters: [
                {
                    sem: 1,
                    subjects: [
                      { name: 'Maths I', pdfLink: 'https://drive.google.com/drive/folders/1r7NJeYbb1rcLl4U2ormjC4EArCXHhpMR?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLU6SqdYcYsfINU_Y9CMp1pZ827ZB1U-Xn&si=eu2nbhDJT1UOOowC' },
                      { name: 'Physics', pdfLink: 'https://drive.google.com/file/d/1xoKV4OQ9GTxwtZ_odF_G8mNCSiNSSdTl/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLuAADu3OvBt495Awir13ZNM-gv5IwLGQy&si=gVNEO6RsKd1Rdyi_' },
                      { name: 'Soft Skill', pdfLink: 'https://drive.google.com/drive/folders/1XPcKMrAveyRB3eU7SkyxeZFnE22lawnu?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL-vEH_IPWrhBantzFj0nsC6el-_PTT0gb&si=cG9_sUU4REr0n_wW' },
                      { name: 'Electronics Engineering', pdfLink: 'https://drive.google.com/drive/folders/16oBr6R-m7sJITzdCvFQnTTVVJb9qfrHR?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLgwJf8NK-2e5G05PTgyTTSVyzTOKRfmTn&si=whSMygL3KEDnKL9A' },
                      { name: 'Mechanics', pdfLink: 'https://drive.google.com/file/d/1qRs8T3rFBa4-LdSkAdbK8pqTCthUir8m/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI&si=RomUMQCm1wfcvZde' },
                    ],
                },
                {
                    sem: 2,
                    subjects: [
                      { name: 'Chemistry', pdfLink: 'https://drive.google.com/file/d/14eI51zuwmKjbRpXwYkeqNPzbKP1VVlUu/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL-vEH_IPWrhAmgQHtlNe2b8wnoK3RxKfh&si=Y3DvkM6SpLPr53Pi' },
                      { name: 'Mathematics-II', pdfLink: 'https://drive.google.com/file/d/1q6pfms1gSGFCUq9A7sH0rYj9kmblWrhn/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLKS7ZMKnbPrQukeSraYiel-cNtwscFtlQ&si=pXk_Sh9iD_CAbrXj' },
                      { name: 'Electrical Engineering', pdfLink: '/resources/y1s2/electrical.pdf', youtubePlaylist: 'https://youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc&si=pQaQevLA1BbJgbcQ' },
                      { name: 'Environmental Science', pdfLink: 'https://drive.google.com/file/d/1YjVHD2yiHPkr80UjHmNAIsf7FHGWLdJ2/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&si=uU51jzbfxI8bYEvy' },
                      { name: 'Problem Solving', pdfLink: 'https://drive.google.com/file/d/1M-RMaSG2eYM0z4b83i_pIbasQ9yB1JkI/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLmRclvVt5DtksgReOH3s7R1_cb1QA8vrb&si=yhvy5ACdTrQPZQqv' },
                    ],
                },
              ],
            },
            {
              year: 2,
              semesters: [
                {
                    sem: 1,
                    subjects: [
                      { name: 'Data Structures and Algorithm', pdfLink: 'https://drive.google.com/file/d/1RU82is6FJfuk-Myd2nOtH2vb2ZWSMvuQ/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT&si=l0ko0o312bvGOM9y' },
                      { name: 'Universal Human Value', pdfLink: 'https://drive.google.com/drive/folders/13ub8CNMzcaPGKbbzqMBNkGAcVCpqnYDB?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLBvTTYUOHEmeYjzc3qrXrX5O6VQhgGEA-&si=F2rFfe92q0jp0goe' },
                      { name: 'COA', pdfLink: 'https://drive.google.com/drive/folders/1ZQck8TwgOkqNYB9Td9_U5YUxUPGP1jfH?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&si=2W_Ilk0FIdhaZ0pH' },
                      { name: 'Digital Logic', pdfLink: '/resources/y2s1/dl.pdf', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&si=KUhhZJSrcN11gnSX' },
                      { name: 'Maths-III', pdfLink: '/resources/y2s1/ss.pdf', youtubePlaylist: 'https://youtube.com/playlist?list=PLRLB5WCqU54Xh434IarqVO_jpM08445Bh&si=SW91VSiKttwfbCmW' },
                      { name: 'DSTL', pdfLink: 'https://drive.google.com/drive/folders/1HlRsiaGIoUhtPUZI_Wa_VfKU49Fgvagk?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLRLB5WCqU54Xh434IarqVO_jpM08445Bh&si=SW91VSiKttwfbCmW' },
                    ],
                },
                {
                    sem: 2,
                    subjects: [
                      { name: 'Math IV', pdfLink: 'https://drive.google.com/drive/folders/1XPPp1LvhmxE5NXXdsh627sxLa6Op2xcx?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL92QhapxkNLFbjBos-MlDDORNgIbCCH6V&si=vvicNyqa0esB6uNL' },
                      { name: 'Operating Systems', pdfLink: 'https://drive.google.com/drive/folders/1P2HlX5sF-eu4Y61Ku1X1qb-j_qbU5sDE?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=CHsnI1-XkfQMxGEl' },
                      { name: 'Technical Communication', pdfLink: 'https://drive.google.com/drive/folders/1OvAY79p_ZqMeV8injJHWEJyKlKfezZEA?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLaGBxvvw_eMUhn3H7mlBnqCUcd2Vqgq2s&si=AzpxFGZqtgG0jFH9' },
                      { name: 'Theory of Automata', pdfLink: 'https://drive.google.com/drive/folders/13ub8CNMzcaPGKbbzqMBNkGAcVCpqnYDB?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&si=8nyqVsl6T0gjHSq9' },
                      { name: 'OOPS JAVA', pdfLink: 'https://drive.google.com/drive/folders/1vBDus9C3EL-mJq0ghW3bN1HqYRsLhvNw?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=ebgeHbspVjckvL_F' },
                      { name: 'Python', pdfLink: 'https://drive.google.com/drive/folders/1o7j3MNntiUprXN5huXF1GOAobhmWCNVD?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLRLB5WCqU54Xh434IarqVO_jpM08445Bh&si=SW91VSiKttwfbCmW' },
                    ],
                },
              ],
            },
            {
                year: 3,
                semesters: [
                  {
                    sem: 1,
                    subjects: [
                      { name: 'Web Technology', pdfLink: 'https://drive.google.com/drive/folders/120yVpZQrT27bT8ZCaEy5dR8oEGUtpEyg?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PL49mRA0Y_C8u2dOqXa-f9KSoSx9XICZ1E&si=JlThNLtspAboLAsM' },
                      { name: 'Design and Analysis of Algorithm', pdfLink: 'https://drive.google.com/drive/folders/1RMGGSR2SE3Vw6qnYrhpeVOlHvkA2SEiC', youtubePlaylist: 'https://youtube.com/playlist?list=PL1QH9gyQXfgs7foRxIbIH8wmJyDh5QzAm&si=K1JlmLB13AClKX7x' },
                      { name: 'Object Oriented System Design with C++', pdfLink: 'https://drive.google.com/drive/folders/18ANiupEbP3_EIUkbqnbtT1meo3r2zFXs?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHUUi6ZlansKbDw_cXut0El&si=7FFnRtunwpjBwk0j' },
                      { name: 'Big Data', pdfLink: 'https://drive.google.com/drive/folders/18ANiupEbP3_EIUkbqnbtT1meo3r2zFXs?usp=sharing', youtubePlaylist: 'https://youtu.be/q3Z3Qa1UNBA?si=FJiNGD5cv2FtJSDd' },
                      { name: 'Database Management System', pdfLink: 'https://drive.google.com/drive/folders/1wpdNzcOiqmmGdh7mPf_u2wtz9lOX8gQt?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=-f1XIF_WS_jOwZcF' },
                    ],
                  },
                  {
                      sem: 2,
                      subjects: [
                        { name: 'Machine Learning', pdfLink: 'https://drive.google.com/drive/folders/1qq3W-pNLSQuNtaeJESmABVbQuwhTqh7N?usp=drive_link', youtubePlaylist: 'https://youtu.be/2oGsCHlfBUg?si=nwtJQuOVifTwuV5E' },
                        { name: 'Cloud Computing', pdfLink: 'https://drive.google.com/file/d/1wyA1u-OKTLa9vkbGO733HfDrxoqvGlBk/view?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4&si=1lvcF7DHTYZuBECz' },
                        { name: 'Compiler Design', pdfLink: 'https://drive.google.com/drive/folders/1YZ72XtP0HD2QEA6YPnFx9ntqayoD4VzH?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr&si=ETOj6QjEFoAHGnPr' },
                        { name: 'Computer Networks', pdfLink: 'https://drive.google.com/drive/folders/1Gnuvbc1KzYbgxf4HxdESNVljiyyzyY8C?usp=drive_link', youtubePlaylist: 'https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=ouQxyMmSRFWupXls' },
                        { name: 'Data Compression', pdfLink: 'https://drive.google.com/drive/folders/1TbYPiq8xCF9NAh-0xTZknD9wNAtlrREb?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLh11ucJN276JEKspf_OmmCL-JGOh6sT3-&si=kUY2Bt7vhhmneHeF' },
                        { name: 'Software Engineering', pdfLink: 'https://drive.google.com/drive/folders/1G2zDN9yBkj0F9IQRrczMqacDVJFNKe7V?usp=sharing', youtubePlaylist: 'https://youtube.com/playlist?list=PLmXKhU9FNesTrw7n8ouPsSLEcduRlENHr&si=efbJRNfqam1pc3Vn' },
                      ],
                },
              ],
            },
            {
              year: 4,
              semesters: [
                {
                  sem: 1,
                  subjects: [
                    { name: 'Advanced Algorithms', pdfLink: '/resources/y4s1/aa.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Big Data', pdfLink: '/resources/y4s1/bd.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'DevOps', pdfLink: '/resources/y4s1/devops.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Blockchain', pdfLink: '/resources/y4s1/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Artificial Intelligence', pdfLink: '/resources/y4s1/ai.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
                {
                  sem: 2,
                  subjects: [
                    { name: 'Blockchain', pdfLink: '/resources/y4s2/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'IoT', pdfLink: '/resources/y4s2/iot.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Cybersecurity', pdfLink: '/resources/y4s2/cybersecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Cloud Security', pdfLink: '/resources/y4s2/cloudsecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Network Security', pdfLink: '/resources/y4s2/networksecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
              ],
            },
          ];
          let foundSubject = null;
          studyMaterials.forEach(yearData => {
            yearData.semesters.forEach(semester => {
              semester.subjects.forEach(subject => {
                if (subject.name === subjectName) {
                  foundSubject = subject;
                }
              });
            });
          });
          setSubjectDetails(foundSubject);
        } else {
          setSubjectDetails(null);
        }

        if (subjectName) {
          const careerData = {
            'software-developer': {
              title: 'Software Developer',
              skills: {
                'Core Programming': ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'],
                'Frontend Development': ['React', 'Angular', 'Vue.js', 'Responsive Design', 'UI/UX Principles', 'State Management (Redux, Context API)', 'Testing (Jest, Cypress)'],
                'Backend Development': ['Node.js', 'Express.js', 'Python (Flask/Django)', 'RESTful APIs', 'GraphQL', 'Authentication & Authorization', 'Serverless Functions'],
                'Databases': ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Firebase)', 'Database Design', 'ORM (Sequelize, Prisma)'],
                'Version Control': ['Git', 'GitHub', 'GitLab', 'Branching Strategies'],
                'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Test-Driven Development (TDD)'],
                'DevOps': ['Docker', 'CI/CD Pipelines', 'Cloud Deployment (AWS, Azure, GCP)'],
                'Problem Solving': ['Algorithms', 'Data Structures', 'Design Patterns'],
              },
              youtube: [
                { title: 'freeCodeCamp.org', url: 'https://www.youtube.com/c/freecodecamp' },
                { title: 'The Net Ninja', url: 'https://www.youtube.com/c/TheNetNinja' },
                { title: 'Traversy Media', url: 'https://www.youtube.com/c/TraversyMedia' },
              ],
            },
            'data-scientist': {
              title: 'Data Scientist',
              skills: {
                'Programming': ['Python', 'R', 'SQL'],
                'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Model Selection'],
                'Statistics': ['Hypothesis Testing', 'Regression Analysis', 'Probability', 'Statistical Modeling', 'Experimental Design'],
                'Data Analysis': ['Data Cleaning', 'Data Wrangling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
                'Data Visualization': ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
                'Databases': ['SQL', 'NoSQL', 'Data Warehousing', 'ETL Processes'],
                'Big Data': ['Hadoop', 'Spark', 'Data Lakes'],
              },
              youtube: [
                { title: 'Sentdex', url: 'https://www.youtube.com/c/sentdex' },
                { title: 'StatQuest with Josh Starmer', url: 'https://www.youtube.com/c/joshstarmer' },
                { title: '3Blue1Brown', url: 'https://www.youtube.com/c/3blue1brown' },
              ],
            },
            'cybersecurity-analyst': {
              title: 'Cybersecurity Analyst',
              skills: {
                'Network Security': ['Firewalls', 'Intrusion Detection Systems', 'VPNs', 'Network Protocols'],
                'Ethical Hacking': ['Penetration Testing', 'Vulnerability Scanning', 'Exploitation'],
                'Cryptography': ['Encryption', 'Hashing', 'Digital Signatures', 'PKI'],
                'Security Auditing': ['Risk Assessment', 'Compliance', 'Security Policies'],
                'Incident Response': ['Malware Analysis', 'Forensics', 'Incident Handling'],
                'Security Tools': ['Nmap', 'Wireshark', 'Metasploit'],
                'Operating Systems': ['Linux', 'Windows'],
              },
              youtube: [
                { title: 'The Cyber Mentor', url: 'https://www.youtube.com/c/TheCyberMentor' },
                { title: 'John Hammond', url: 'https://www.youtube.com/c/JohnHammond010' },
                { title: 'LiveOverflow', url: 'https://www.youtube.com/c/LiveOverflow' },
              ],
            },
            'ui-ux-designer': {
              title: 'UI/UX Designer',
              skills: {
                'Design Tools': ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Illustrator'],
                'User Research': ['User Interviews', 'Surveys', 'Usability Testing', 'User Personas'],
                'Wireframing': ['Low-Fidelity Wireframes', 'High-Fidelity Wireframes', 'User Flows'],
                'Prototyping': ['Interactive Prototypes', 'Clickable Prototypes', 'Microinteractions'],
                'Usability Testing': ['A/B Testing', 'User Feedback Analysis', 'Heuristic Evaluation'],
                'Accessibility': ['WCAG Guidelines', 'Inclusive Design'],
                'Design Systems': ['Component Libraries', 'Style Guides'],
              },
              youtube: [
                { title: 'Flux', url: 'https://www.youtube.com/c/FluxWithRanSegall' },
                { title: 'Jesse Showalter', url: 'https://www.youtube.com/c/JesseShowalter' },
                { title: 'DesignCourse', url: 'https://www.youtube.com/c/DesignCourse' },
              ],
            },
            'ai-ml-engineer': {
              title: 'AI/ML Engineer',
              skills: {
                'Programming': ['Python', 'R'],
                'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Model Selection'],
                'Data Analysis': ['Data Cleaning', 'Data Wrangling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
                'Deep Learning': ['TensorFlow', 'Keras', 'PyTorch'],
                'Natural Language Processing': ['NLTK', 'SpaCy', 'Transformers'],
                'Computer Vision': ['OpenCV', 'Image Processing', 'Object Detection'],
              },
              youtube: [
                { title: 'DeepLearningAI', url: 'https://www.youtube.com/c/Deeplearningai' },
                { title: 'Arxiv Insights', url: 'https://www.youtube.com/c/ArxivInsights' },
                { title: 'Two Minute Papers', url: 'https://www.youtube.com/c/TwoMinutePapers' },
              ],
            },
            'devops-engineer': {
              title: 'DevOps Engineer',
              skills: {
                'Infrastructure as Code': ['Terraform', 'CloudFormation', 'Ansible'],
                'Containerization': ['Docker', 'Kubernetes', 'Container Orchestration'],
                'CI/CD': ['Jenkins', 'GitLab CI', 'GitHub Actions'],
                'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack'],
                'Scripting': ['Bash', 'Python'],
                'Version Control': ['Git', 'GitHub', 'GitLab'],
              },
              youtube: [
                { title: 'TechWorld with Nana', url: 'https://www.youtube.com/c/TechWorldwithNana' },
                { title: 'DevOps Toolkit', url: 'https://www.youtube.com/c/DevOpsToolkit' },
                { title: 'Kunal Kushwaha', url: 'https://www.youtube.com/c/KunalKushwaha' },
              ],
            },
            'mobile-app-developer': {
              title: 'Mobile App Developer',
              skills: {
                'Cross-Platform Development': ['React Native', 'Flutter', 'Xamarin'],
                'Native iOS Development': ['Swift', 'Objective-C', 'Xcode'],
                'Native Android Development': ['Kotlin', 'Java', 'Android Studio'],
                'UI/UX Design': ['Mobile UI/UX Principles', 'Responsive Design'],
                'Testing': ['Unit Testing', 'UI Testing', 'Integration Testing'],
                'API Integration': ['RESTful APIs', 'GraphQL'],
                'State Management': ['Redux', 'Context API', 'MobX'],
              },
              youtube: [
                { title: 'The Flutter Way', url: 'https://www.youtube.com/c/TheFlutterWay' },
                { title: 'React Native Radio', url: 'https://www.youtube.com/c/ReactNativeradio' },
                { title: 'Android Developers', url: 'https://www.youtube.com/user/AndroidDevelopers' },
              ],
            },
            'blockchain-developer': {
              title: 'Blockchain Developer',
              skills: {
                'Smart Contracts': ['Solidity', 'Vyper', 'Web3.js'],
                'Blockchain Platforms': ['Ethereum', 'Hyperledger Fabric', 'Binance Smart Chain'],
                'Cryptography': ['Hashing', 'Encryption', 'Digital Signatures'],
                'Decentralized Applications (DApps)': ['Web3.js', 'Ethers.js', 'Truffle'],
                'Consensus Mechanisms': ['Proof of Work', 'Proof of Stake', 'Delegated Proof of Stake'],
                'Tokenomics': ['Token Design', 'Token Distribution', 'Token Utility'],
                'Security': ['Smart Contract Security', 'Vulnerability Analysis'],
              },
              youtube: [
                { title: 'EatTheBlocks', url: 'https://www.youtube.com/c/EatTheBlocks' },
                { title: 'Dapp University', url: 'https://www.youtube.com/c/DappUniversity' },
                { title: 'Patrick Collins', url: 'https://www.youtube.com/c/patrickcollins' },
              ],
            },
            'embedded-systems-engineer': {
              title: 'Embedded Systems Engineer',
              skills: {
                'Programming': ['C', 'C++', 'Assembly Language'],
                'Microcontrollers': ['ARM', 'AVR', 'PIC'],
                'Real-Time Operating Systems (RTOS)': ['FreeRTOS', 'uC/OS', 'VxWorks'],
                'Hardware Interfacing': ['SPI', 'I2C', 'UART', 'GPIO'],
                'Digital Signal Processing (DSP)': ['Filtering', 'FFT', 'Signal Analysis'],
                'PCB Design': ['Schematic Capture', 'Layout Design', 'Prototyping'],
                'Testing': ['Unit Testing', 'Integration Testing', 'Hardware Debugging'],
              },
              youtube: [
                { title: 'Digi-Key Electronics', url: 'https://www.youtube.com/c/digikey' },
                { title: 'Shawn Hymel', url: 'https://www.youtube.com/c/ShawnHymel' },
                { title: 'GreatScott!', url: 'https://www.youtube.com/c/GreatScott' },
              ],
            },
            'technical-writer': {
              title: 'Technical Writer',
              skills: {
                'Technical Writing': ['Documentation', 'User Manuals', 'API Documentation'],
                'Communication': ['Clear Writing', 'Concise Language', 'Audience Analysis'],
                'Content Creation': ['Content Planning', 'Content Strategy', 'Content Editing'],
                'Tools': ['Markdown', 'LaTeX', 'Confluence', 'Jira'],
                'Information Architecture': ['Content Organization', 'Navigation Design'],
                'Collaboration': ['Teamwork', 'Feedback Management'],
                'Version Control': ['Git', 'GitHub', 'GitLab'],
              },
              youtube: [
                { title: 'Tom Johnson', url: 'https://www.youtube.com/c/TomJohnsonTechnicalCommunication' },
                { title: 'I’d Rather Be Writing', url: 'https://www.youtube.com/c/idratherbewriting' },
                { title: 'ClickHelp', url: 'https://www.youtube.com/c/ClickHelp' },
              ],
            },
            'backend-developer': {
              title: 'Backend Developer',
               skills: {
                'Server-Side Languages': ['Node.js', 'Python', 'Java', 'Go', 'C#'],
                'Frameworks': ['Express.js', 'Django', 'Spring Boot', 'ASP.NET Core', 'Gin'],
                'Databases': ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Cassandra)', 'Database Design', 'ORM (Sequelize, Prisma)'],
                'API Design': ['RESTful APIs', 'GraphQL', 'API Documentation'],
                'Authentication & Authorization': ['OAuth 2.0', 'JWT', 'Session Management'],
                'Server Management': ['Linux', 'Docker', 'Kubernetes'],
                'Testing': ['Unit Testing', 'Integration Testing', 'API Testing'],
                'Cloud Services': ['AWS', 'Azure', 'GCP'],
              },
              youtube: [
                { title: 'Fireship', url: 'https://www.youtube.com/c/Fireship' },
                { title: 'Code with Ania Kubów', url: 'https://www.youtube.com/c/AniaKubow' },
                { title: 'Web Dev Simplified', url: 'https://www.youtube.com/c/WebDevSimplified' },
              ],
            },
             'game-developer': {
              title: 'Game Developer',
              skills: {
                'Game Engines': ['Unity', 'Unreal Engine', 'Godot'],
                'Programming Languages': ['C#', 'C++', 'GDScript'],
                'Game Design': ['Level Design', 'Game Mechanics', 'Storytelling'],
                'Graphics': ['3D Modeling', 'Texturing', 'Animation'],
                'Physics': ['Collision Detection', 'Rigid Body Dynamics'],
                'Audio': ['Sound Design', 'Music Composition'],
                'AI': ['Pathfinding', 'Behavior Trees'],
                'Networking': ['Multiplayer Game Development', 'Server-Side Logic'],
              },
              youtube: [
                { title: 'Brackeys', url: 'https://www.youtube.com/c/Brackeys' },
                { title: 'Sebastian Lague', url: 'https://www.youtube.com/c/SebastianLague' },
                { title: 'Code Monkey', url: 'https://www.youtube.com/c/CodeMonkeyUnity' },
              ],
            },
            'frontend-developer': {
              title: 'Frontend Developer',
              skills: {
                'Core Languages': ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
                'Frameworks/Libraries': ['React', 'Angular', 'Vue.js', 'Svelte'],
                'State Management': ['Redux', 'Context API', 'Vuex', 'Zustand'],
                'UI/UX': ['Responsive Design', 'Accessibility', 'UI Libraries (Material UI, Tailwind CSS)'],
                'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing'],
                'Build Tools': ['Webpack', 'Parcel', 'Vite'],
                'Version Control': ['Git', 'GitHub', 'GitLab'],
                'API Integration': ['RESTful APIs', 'GraphQL'],
              },
              youtube: [
                { title: 'Kevin Powell', url: 'https://www.youtube.com/c/KevinPowell' },
                { title: 'Ben Awad', url: 'https://www.youtube.com/c/BenAwad97' },
                { title: 'codedamn', url: 'https://www.youtube.com/c/codedamn' },
              ],
            },
          };
          let foundSkill = null;
          for (const career in careerData) {
            if (careerData.hasOwnProperty(career)) {
              for (const skill in careerData[career].skills) {
                if (careerData[career].skills.hasOwnProperty(skill)) {
                  if (Array.isArray(careerData[career].skills[skill])) {
                    if (careerData[career].skills[skill].includes(subjectName)) {
                      foundSkill = {
                        youtubePlaylist: careerData[career].youtube,
                        name: subjectName
                      };
                      break;
                    }
                  } else if (skill === subjectName) {
                    foundSkill = {
                      youtubePlaylist: careerData[career].youtube,
                      name: subjectName
                    };
                    break;
                  }
                }
              }
              if (foundSkill) break;
            }
          }
          setSkillDetails(foundSkill);
        } else {
          setSkillDetails(null);
        }
      }, [subjectName]);

      return (
        <div className="container mx-auto py-12 px-4">
          {subjectName && (subjectDetails || skillDetails) ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-8">{subjectName}</h1>
              <div className="flex justify-center space-x-4">
                {(subjectDetails?.pdfLink) && (
                  <a href={subjectDetails?.pdfLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
                    View PDF
                  </a>
                )}
                {(subjectDetails?.youtubePlaylist || skillDetails?.youtubePlaylist) && (
                  <a href={subjectDetails?.youtubePlaylist || skillDetails?.youtubePlaylist} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200">
                    View YouTube Playlist
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-center mb-8">Favorite Subjects</h1>
              {favorites.length > 0 ? (
                <ul className="space-y-4">
                  {favorites.map((fav, index) => (
                    <li key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 transition-all duration-300">
                      <button onClick={() => navigate(`/favorites?subject=${fav}`)} className="text-gray-300">{fav}</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-center">
                  You have not marked any subjects as favorites yet.
                </p>
              )}
            </>
          )}
        </div>
      );
    }

    export default Favorites;
