import React from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';

    const notes = [
      { title: 'Angular', link: 'https://drive.google.com/drive/folders/1GPim_EIN6OnWhTqhpfvLc5VOiPem1g0v?usp=drive_link' },
      { title: '400+_ Web Development Resources & Projects', link: 'https://drive.google.com/drive/folders/1B8nsz1LfBt4TzjfOeUw3SE2aNIdX7gCa?usp=drive_link' },
      { title: 'Interview Prep Set', link: 'https://drive.google.com/drive/folders/1lXutvoG69PA5NEDw_psJzRNsLNuy6Ji6?usp=drive_link' },
      { title: 'Notes Collections', link: 'https://drive.google.com/drive/folders/17KisR7Jd8SNWuw-2DWXxqdvTUsDZ74js?usp=drive_link' },
      { title: 'Git & GitHub', link: 'https://drive.google.com/drive/folders/1-3BYt4N0LfbaL79iEnKTXhHfjEGVjaIi?usp=drive_link' },
    ];

    function OthersNotesPage() {
      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Other Notes</h1>
          <p className="text-gray-400 text-center mb-8">
            Explore handwritten notes that offer a unique perspective on complex topics.
          </p>
          <ClickableNotesList notes={notes} />
        </div>
      );
    }

    export default OthersNotesPage;
