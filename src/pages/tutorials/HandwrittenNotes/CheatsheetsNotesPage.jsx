import React from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';
    import { Link } from 'react-router-dom';

    const notes = [
      { title: 'JavaScript Cheatsheet', link: 'https://drive.google.com/file/d/10Ct5SyKap_K-VigjM3g-zuI70-EtJNqR/view?usp=drive_link' },
      { title: 'Next.js Cheat Sheet', link: 'https://drive.google.com/file/d/1Ne1MRpW7GP6ZweOGx5yYoLq0JneJsEaF/view?usp=drive_link' },
      { title: 'React 2020 Cheatsheet (Small)', link: 'https://drive.google.com/file/d/1QYZD8K-VbQufP19zqQovEEPj-tKuD1yy/view?usp=drive_link' },
      { title: 'Python Cheatsheets', link: 'https://drive.google.com/file/d/1CEtsPIX0lHy3PHuebXmQ7KMUGd9zLtOV/view?usp=drive_link' },
      { title: 'Python Operator Cheatsheet', link: 'https://drive.google.com/file/d/1OVsS2Hjsnyq3mEdoWWXvt3AhIM3YwOjX/view?usp=drive_link' },
      { title: 'Python Cheat Sheet 2', link: 'https://www.datacamp.com/cheat-sheet/getting-started-with-python-cheat-sheet' },
      { title: 'Jupyter Notebook CheatSheet (Edureka)', link: 'https://drive.google.com/file/d/1D6eQhemuS0OuUXDgAAG89EWdxC5eQCpg/view?usp=drive_link' },
      { title: 'GeeksforGeeks Master Sheet (List of All...)', link: 'https://drive.google.com/file/d/16HNcTJDa8oRcuDKnU5I8nnAiKPHyAWVZ/view?usp=drive_link' },
      { title: 'Cloud Computing CheatSheet', link: 'https://drive.google.com/file/d/1dVXtI6tC2Q6TV-yxJ-3FQdPWYb6kzFpQ/view?usp=drive_link' },
      { title: 'Excel Formulas Cheatsheet', link: 'https://drive.google.com/file/d/1TuiqGKMhwMphyunNp6NyHDiuBsV93amq/view?usp=drive_link' },
    ];

    function CheatsheetsNotesPage() {
      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Programming Cheatsheets</h1>
          <p className="text-gray-400 text-center mb-8">
            Explore handwritten notes that offer a unique perspective on complex topics.
          </p>
          <ul className="space-y-4">
            {notes.map((note, index) => (
              <li key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1 flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-300">
                  {note.title}
                </span>
                <a
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Click Here
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default CheatsheetsNotesPage;
