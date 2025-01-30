import React from 'react';
    import ResourceModal from '../ResourceModal';

    function HTMLNotesModal({ isOpen, onClose, note }) {
      if (!isOpen) return null;

      const resources = [
        { title: 'HTML Workshop', link: 'https://drive.google.com/file/d/1zoWYnJv-WXEgpk4pRGIiZ4sDayD5zsHr/view?usp=drive_link', type: 'pdf' },
        { title: 'HTML, CSS, JS Combined', link: 'https://drive.google.com/file/d/1bnGbFBuKT6e2LRYOaXHQ9YOkH51v9oXG/view?usp=drive_link', type: 'pdf' },
        { title: 'HTML for Professionals', link: 'https://drive.google.com/file/d/1jNh2tx5Y-UtlWEOwzU9UOLiPzkI67XaM/view?usp=drive_link', type: 'pdf' },
        { title: 'HTML Book', link: 'https://drive.google.com/file/d/1toeVbwXVL1mQf1PdVOwJFbSe29Z7twjW/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 1', link: 'https://drive.google.com/file/d/17NmJ13qI1T8hdRJKxv5CMJLJCd2RevKF/view?usp=drive_link', type: 'pdf' },
        { title: 'Bonus 2', link: 'https://drive.google.com/file/d/1dEL-hFSb4dxSgZ4igMZ5cdR1U2WnJV9c/view?usp=drive_link', type: 'pdf' },
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

    export default HTMLNotesModal;
