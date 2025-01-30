import React from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';
    import JavaScriptNotesModal from './JavaScriptNotesModal';
    import { useState } from 'react';

    const notes = [
      { title: 'Node.js – JavaScript runtime', link: 'https://github.com/Complete-Coding/NodeJS_Complete_YouTube' },
      { title: 'Express.js – Lightweight Node.js framework', link: 'https://github.com/codersgyan/Express-Js-crash-course' },
      { title: 'MongoDB – NoSQL database', link: 'https://www.canva.com/design/DAGMvEWWNiA/45pt6qAw4b5LyswAqKLRPA/edit' },
      { title: 'PostgreSQL', link: 'https://www.canva.com/design/DAGGQI3jsQo/aZYZy0_PSEFsRfFUMNZx2g/edit' },
      { title: 'REST APIs – API development (CRUD operations)', link: 'https://github.com/Complete-Coding/NodeJS_Complete_YouTube' },
      { title: 'GraphQL – Alternative to REST for APIs', link: 'https://drive.google.com/file/d/1xFYTYDr1S9GgN8Pjd7Zut8Tx0o0vVC5u/view' },
      { title: 'SQL', link: 'https://drive.google.com/file/d/1HO1fxqH4VTBruhc2Scc18OPoo0ERv0q0/view' },
    ];

    function BackendNotesPage() {
      const [selectedNote, setSelectedNote] = useState(null);

      const handleNoteClick = (note) => {
        setSelectedNote(note);
      };

      const handleCloseModal = () => {
        setSelectedNote(null);
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Backend Notes</h1>
          <p className="text-gray-400 text-center mb-8">
            Explore handwritten notes that offer a unique perspective on complex topics.
          </p>
          <ClickableNotesList notes={notes} onItemClick={handleNoteClick} />
          {selectedNote && (
            <JavaScriptNotesModal
              isOpen={selectedNote !== null}
              onClose={handleCloseModal}
              note={selectedNote}
            />
          )}
        </div>
      );
    }

    export default BackendNotesPage;
