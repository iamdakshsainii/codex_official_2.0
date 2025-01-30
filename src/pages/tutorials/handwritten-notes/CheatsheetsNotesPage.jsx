import React from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';
    import ResourceModal from '../ResourceModal';

    const notes = [
      { title: 'JavaScript Cheatsheet', link: 'https://drive.google.com/file/d/18Rw1UeYc8tceXv_gAC4_roKCrWsvz7E6/view?usp=drive_link' },
      { title: 'Next.js Cheat Sheet', link: 'https://drive.google.com/file/d/1n2IpH39ztNse88RifAzMBs9Av5gziNAr/view?usp=drive_link' },
      { title: 'React 2020 Cheatsheet (Small)', link: 'https://drive.google.com/file/d/11RUnDWR37SJjaFcm7jnuRqrb1J4-9Lon/view?usp=drive_link' },
      { title: 'Python Cheatsheets by Finxter', link: 'https://drive.google.com/file/d/1IQFNz4lG_vMQ-IilP_DyCO2TGwDCBzW0/view?usp=drive_link' },
      { title: 'Python Operator Cheatsheet', link: 'https://drive.google.com/file/d/1OVsS2Hjsnyq3mEdoWWXvt3AhIM3YwOjX/view?usp=drive_link' },
      { title: 'Python Cheat Sheet', link: 'https://drive.google.com/file/d/1toeVbwXVL1mQf1PdVOwJFbSe29Z7twjW/view?usp=drive_link' },
      { title: 'Jupyter Notebook CheatSheet (Edureka)', link: 'https://drive.google.com/file/d/1zoWYnJv-WXEgpk4pRGIiZ4sDayD5zsHr/view?usp=drive_link' },
      { title: 'GeeksforGeeks Master Sheet (List of All...)', link: 'https://drive.google.com/file/d/1bnGbFBuKT6e2LRYOaXHQ9YOkH51v9oXG/view?usp=drive_link' },
      { title: 'Cloud Computing CheatSheet', link: 'https://drive.google.com/file/d/1jNh2tx5Y-UtlWEOwzU9UOLiPzkI67XaM/view?usp=drive_link' },
      { title: 'Excel Formulas Cheatsheet', link: 'https://drive.google.com/file/d/1cjznRzmZAptFdIcUmit8nG8HWJzGmeXS/view?usp=drive_link' },
    ];

    function CheatsheetsNotesPage() {
      const [selectedNote, setSelectedNote] = useState(null);

      const handleNoteClick = (note) => {
        setSelectedNote(note);
      };

      const handleCloseModal = () => {
        setSelectedNote(null);
      };

      const resources = {
        'JavaScript Cheatsheet': [],
        'Next.js Cheat Sheet': [],
        'React 2020 Cheatsheet (Small)': [],
        'Python Cheatsheets by Finxter': [],
        'Python Operator Cheatsheet': [],
        'Python Cheat Sheet': [],
        'Jupyter Notebook CheatSheet (Edureka)': [],
        'GeeksforGeeks Master Sheet (List of All...)': [],
        'Cloud Computing CheatSheet': [],
        'Excel Formulas Cheatsheet': [],
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Programming Cheatsheets</h1>
          <p className="text-gray-400 text-center mb-8">
            Explore handwritten notes that offer a unique perspective on complex topics.
          </p>
          <ClickableNotesList notes={notes} onItemClick={handleNoteClick} />
          {selectedNote && (
            <ResourceModal
              isOpen={selectedNote !== null}
              onClose={handleCloseModal}
              note={selectedNote}
              resources={resources[selectedNote.title]}
            />
          )}
        </div>
      );
    }

    export default CheatsheetsNotesPage;
