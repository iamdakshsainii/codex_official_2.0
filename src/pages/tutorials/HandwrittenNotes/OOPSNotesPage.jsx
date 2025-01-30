import React, { useState } from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';
    import ResourceModal from '../ResourceModal';

    const notes = [
      { title: 'OOPS Interview Questions', link: '#' },
      { title: 'Recommended YouTube Channels', link: '#' },
      { title: 'Last Minute Revision', link: '#' },
    ];

    function OOPSNotesPage() {
      const [selectedNote, setSelectedNote] = useState(null);

      const handleNoteClick = (note) => {
        setSelectedNote(note);
      };

      const handleCloseModal = () => {
        setSelectedNote(null);
      };

      const resources = {
        'OOPS Interview Questions': [
          { title: 'OOPS Interview Questions', link: 'https://flexiple.com/oops/interview-questions' },
          { title: 'OOPS Basics', link: 'https://drive.google.com/file/d/186OfN-cqH9xKwNs1XJVsEcxJRZbZqqt4/view?usp=sharing' },
          { title: 'OOPS Interview Questions Resource 2', link: 'https://www.interviewbit.com/oops-interview-questions/' },
          { title: '100 OOPS Interview Questions ', link: 'https://www.lambdatest.com/learning-hub/oops-interview-questions' },
        ],
        'Recommended YouTube Channels': [
          { title: 'Notes and Channels', link: 'https://github.com/riti2409/OOPS_NOTES?tab=readme-ov-file' },
          { title: 'OOPS in Java', link: 'https://youtu.be/NNLoi8QqzaY?si=u57n-8ndz2uT_kGf' },
          { title: 'OOPS in Java ', link: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=Y_F2spxhyw50_BUZ' },
          { title: 'OOPS in Python', link: 'https://youtu.be/Mf2RdpEiXjU?si=dks1cp_UjocIKMSX' },
          { title: 'OOPS in C++', link: 'https://youtu.be/i_5pvt7ag7E?si=yA19cCGSOYkwFntP' },
          { title: 'OOPS in JavaScript', link: 'https://youtu.be/PFmuCDHHpwk?si=k28tpOFpbHC0WlHo' },
        ],
        'Last Minute Revision': [
          { title: 'Last Minute Revision 1', link: 'https://github.com/aman0046/LastMinuteRevision-OOP' },
          { title: 'Last Minute Revision 2', link: 'https://youtu.be/00tmb4vdr80?si=DOcItJlLhqvcHYW1' },
          { title: 'Last Minute Revision 3', link: 'https://youtu.be/Mf2RdpEiXjU?si=QDNw48FjsMWaMDJf' },
          { title: 'Last Minute Revision 4', link: 'https://youtu.be/LepLT82RtxA?si=NXwe21uOC4KkdiqB' },
        ],
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Object-Oriented Programming Notes</h1>
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

    export default OOPSNotesPage;
