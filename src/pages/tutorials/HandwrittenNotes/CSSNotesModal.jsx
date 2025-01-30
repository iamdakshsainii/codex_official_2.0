import React from 'react';
    import ResourceModal from '../ResourceModal';

    function CSSNotesModal({ isOpen, onClose, note }) {
      if (!isOpen) return null;

      const resources = [
        { title: 'CSS Beginner Guide', link: 'https://drive.google.com/file/d/1bPqLr7TRsLpdhkcSS2ltPL0DuokDZC-v/view?usp=drive_link', type: 'pdf' },
        { title: 'W3Schools CSS', link: 'https://drive.google.com/file/d/1R0PW_jucQJOoqZnjICrRvwvRfJ617mPV/view?usp=drive_link', type: 'pdf' },
        { title: 'CSS for Professionals', link: 'https://drive.google.com/file/d/1HRg6jYvDhWFUlcGb3g-qWizTUTJaS8fa/view?usp=drive_link', type: 'pdf' },
        { title: 'CSS Cheatsheet', link: 'https://drive.google.com/file/d/1cjznRzmZAptFdIcUmit8nG8HWJzGmeXS/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 1', link: 'https://drive.google.com/file/d/11RUnDWR37SJjaFcm7jnuRqrb1J4-9Lon/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 2', link: 'https://drive.google.com/file/d/107po46NIevKzdcesfOd2FFuQL-9xeHf7/view?usp=drive_link', type: 'pdf' },
      ];

      return (
        <ResourceModal
          isOpen={isOpen}
          onClose={onClose}
          note={note}
          resources={resources}
        />
      );
    }

    export default CSSNotesModal;
