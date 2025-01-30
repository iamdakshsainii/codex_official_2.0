import React, { useState } from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';
    import ResourceModal from '../ResourceModal';

    const notes = [
      { title: 'HTML – Structure of webpages', link: '/tutorials/html-notes', resources: [
        { title: 'HTML Workshop', link: 'https://drive.google.com/file/d/1zoWYnJv-WXEgpk4pRGIiZ4sDayD5zsHr/view?usp=drive_link', type: 'pdf' },
        { title: 'HTML, CSS, JS Combined', link: 'https://drive.google.com/file/d/1bnGbFBuKT6e2LRYOaXHQ9YOkH51v9oXG/view?usp=drive_link', type: 'pdf' },
        { title: 'HTML for Professionals', link: 'https://drive.google.com/file/d/1jNh2tx5Y-UtlWEOwzU9UOLiPzkI67XaM/view?usp=drive_link', type: 'pdf' },
        { title: 'HTML Book', link: 'https://drive.google.com/file/d/1toeVbwXVL1mQf1PdVOwJFbSe29Z7twjW/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 1', link: 'https://drive.google.com/file/d/17NmJ13qI1T8hdRJKxv5CMJLJCd2RevKF/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 2', link: 'https://drive.google.com/file/d/1dEL-hFSb4dxSgZ4igMZ5cdR1U2WnJV9c/view?usp=drive_link', type: 'pdf' },
      ] },
      { title: 'CSS – Styling (Tailwind CSS, Bootstrap)', link: '/tutorials/css-notes', resources: [
        { title: 'CSS Beginner Guide', link: 'https://drive.google.com/file/d/1bPqLr7TRsLpdhkcSS2ltPL0DuokDZC-v/view?usp=drive_link', type: 'pdf' },
        { title: 'W3Schools CSS', link: 'https://drive.google.com/file/d/1R0PW_jucQJOoqZnjICrRvwvRfJ617mPV/view?usp=drive_link', type: 'pdf' },
        { title: 'CSS for Professionals', link: 'https://drive.google.com/file/d/1HRg6jYvDhWFUlcGb3g-qWizTUTJaS8fa/view?usp=drive_link', type: 'pdf' },
        { title: 'CSS Cheatsheet', link: 'https://drive.google.com/file/d/1cjznRzmZAptFdIcUmit8nG8HWJzGmeXS/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 1', link: 'https://drive.google.com/file/d/11RUnDWR37SJjaFcm7jnuRqrb1J4-9Lon/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 2', link: 'https://drive.google.com/file/d/107po46NIevKzdcesfOd2FFuQL-9xeHf7/view?usp=drive_link', type: 'pdf' },
      ] },
      { title: 'JavaScript – Core scripting language', link: '/tutorials/javascript-notes', resources: [
        { title: 'JavaScript Cheatsheet', link: 'https://drive.google.com/file/d/18Rw1UeYc8tceXv_gAC4_roKCrWsvz7E6/view?usp=drive_link', type: 'pdf' },
        { title: 'Array Methods', link: 'https://drive.google.com/file/d/1-DxeP6eHBqdLZJs3M59iXObyNmvvIBun/view?usp=drive_link', type: 'pdf' },
        { title: 'JavaScript Projects', link: 'https://drive.google.com/file/d/11RUnDWR37SJjaFcm7jnuRqrb1J4-9Lon/view?usp=drive_link', type: 'pdf' },
        { title: 'DSA with JavaScript', link: 'https://drive.google.com/file/d/1IQFNz4lG_vMQ-IilP_DyCO2TGwDCBzW0/view?usp=drive_link', type: 'pdf' },
        { title: 'JavaScript Roadmap', link: 'https://drive.google.com/file/d/1n2IpH39ztNse88RifAzMBs9Av5gziNAr/view?usp=drive_link', type: 'pdf' },
        { title: 'JavaScript Interview Questions', link: 'https://drive.google.com/file/d/1OVsS2Hjsnyq3mEdoWWXvt3AhIM3YwOjX/view?usp=drive_link', type: 'pdf' },
      ] },
      { title: 'React.js – Popular frontend framework', link: '/tutorials/reactjs-notes', resources: [
        { title: '50 Project Ideas', link: 'https://drive.google.com/file/d/1ZF4tNvrlx9JWhUPGTn0_o-spi1-lu9un/view?usp=drive_link', type: 'pdf' },
        { title: 'ReactNative (For App)', link: 'https://drive.google.com/file/d/1jOz0VYPUwV7SuF_vz6TIDvXEc1LqWM0u/view?usp=drive_link', type: 'pdf' },
        { title: 'React Interview Questions', link: 'https://drive.google.com/file/d/1aVce31wNDh_5eFeD_V3NDxn6u43kfjcX/view?usp=drive_link', type: 'pdf' },
        { title: 'React Handbook', link: 'https://drive.google.com/file/d/12KFTQTFrZEjTbVC1s336mGX2NSFOAZQD/view?usp=drive_link', type: 'pdf' },
        { title: 'React Roadmap', link: 'https://drive.google.com/file/d/1jI5UyJYsT9zBTJSd7_sVW0mhbCFqOsC8/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 1', link: 'https://drive.google.com/file/d/1sRqtbSi1km9lW0Rizf0PbvArx7Wl18DU/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 2', link: 'https://drive.google.com/file/d/1xOh7h4DJEW93bNoVoa4V5GZXEHCBJYDj/view?usp=drive_link', type: 'pdf' },
      ] },
      { title: 'TypeScript – Strongly typed JavaScript', link: 'https://fullstackopen.com/en/part9', resources: [] },
      { title: 'Next.js – React-based full-stack framework', link: 'https://www.freecodecamp.org/news/the-next-js-handbook/', resources: [] },
    ];

    function FrontendNotesPage() {
      const [selectedNote, setSelectedNote] = useState(null);

      const handleNoteClick = (note) => {
        setSelectedNote(note);
      };

      const handleCloseModal = () => {
        setSelectedNote(null);
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Frontend Notes</h1>
          <p className="text-gray-400 text-center mb-8">
            Explore handwritten notes that offer a unique perspective on complex topics.
          </p>
          <ClickableNotesList notes={notes} onItemClick={handleNoteClick} />
          {selectedNote && (
            <ResourceModal
              isOpen={selectedNote !== null}
              onClose={handleCloseModal}
              note={selectedNote}
              resources={selectedNote.resources}
            />
          )}
        </div>
      );
    }

    export default FrontendNotesPage;
