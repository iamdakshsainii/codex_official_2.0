import React, { useState } from 'react';
    import ClickableNotesList from '../../../components/ClickableNotesList';
    import ResourceModal from '../ResourceModal';

    const notes = [
      { title: 'DBMS', link: '/tutorials/dbms' },
      { title: 'Operating Systems', link: '/tutorials/operating-systems' },
      { title: 'System Design', link: '/tutorials/system-design' },
      { title: 'Algorithms', link: '/tutorials/algorithms' },
      { title: 'Computer Networks', link: '/tutorials/computer-networks' },
      { title: 'Software Engineering', link: '/tutorials/software-engineering' },
    ];

    function CoreSubjectsNotesPage() {
      const [selectedNote, setSelectedNote] = useState(null);

      const handleNoteClick = (note) => {
        setSelectedNote(note);
      };

      const handleCloseModal = () => {
        setSelectedNote(null);
      };

      const resources = {
        'DBMS': [
          { title: 'DBMS Notes 1', link: 'https://drive.google.com/drive/folders/1lURA6gv-JMtM8S8FAZXcfaKVOLJXDqmW?usp=drive_link' },
          { title: 'SQL Notes 1', link: 'https://drive.google.com/drive/folders/1lURA6gv-JMtM8S8FAZXcfaKVOLJXDqmW?usp=drive_link' },
          { title: 'DBMS Notes 2', link: 'https://example.com/dbms-notes-2' },
          { title: 'SQL Notes 2', link: 'https://example.com/sql-notes-2' },
          { title: 'Database Design Notes', link: 'https://example.com/db-design-notes' },
          { title: 'Advanced SQL Notes', link: 'https://example.com/advanced-sql-notes' },
        ],
        'Operating Systems': [
          { title: 'Operating System Notes 1', link: 'https://drive.google.com/drive/folders/1ol1VxiUv3xE3m7YDtaUNKKbFNmEwuMTi?usp=drive_link' },
          { title: 'OS Concepts Notes', link: 'https://example.com/os-concepts-notes' },
          { title: 'Process Management Notes', link: 'https://example.com/process-management-notes' },
          { title: 'Memory Management Notes', link: 'https://example.com/memory-management-notes' },
          { title: 'File Systems Notes', link: 'https://example.com/file-systems-notes' },
          { title: 'Concurrency Notes', link: 'https://example.com/concurrency-notes' },
        ],
        'System Design': [
          { title: 'System Design Notes 1', link: 'https://drive.google.com/drive/folders/1nTQGrV45W4nfg4sHDKxjXijvZIKLykeD?usp=drive_link' },
          { title: 'Scalability Notes', link: 'https://example.com/scalability-notes' },
          { title: 'Load Balancing Notes', link: 'https://example.com/load-balancing-notes' },
          { title: 'Caching Notes', link: 'https://example.com/caching-notes' },
          { title: 'Database Design Notes', link: 'https://example.com/db-design-notes' },
          { title: 'API Design Notes', link: 'https://example.com/api-design-notes' },
        ],
        'Algorithms': [
          { title: 'Algorithms Notes 1', link: 'https://drive.google.com/drive/folders/1RMGGSR2SE3Vw6qnYrhpeVOlHvkA2SEiC' },
          { title: 'Sorting Algorithms Notes', link: 'https://example.com/sorting-algorithms-notes' },
          { title: 'Searching Algorithms Notes', link: 'https://example.com/searching-algorithms-notes' },
          { title: 'Graph Algorithms Notes', link: 'https://example.com/graph-algorithms-notes' },
          { title: 'Dynamic Programming Notes', link: 'https://example.com/dynamic-programming-notes' },
          { title: 'Greedy Algorithms Notes', link: 'https://example.com/greedy-algorithms-notes' },
        ],
        'Computer Networks': [
          { title: 'Computer Networks Notes 1', link: '#' },
          { title: 'Network Topologies Notes', link: '#' },
          { title: 'Network Protocols Notes', link: '#' },
          { title: 'Network Addressing Notes', link: '#' },
          { title: 'Routing Notes', link: '#' },
          { title: 'Network Security Notes', link: '#' },
        ],
        'Software Engineering': [
          { title: 'Software Engineering Notes 1', link: '#' },
          { title: 'SDLC Notes', link: '#' },
          { title: 'Requirements Engineering Notes', link: '#' },
          { title: 'Software Design Notes', link: '#' },
          { title: 'Software Testing Notes', link: '#' },
          { title: 'Software Maintenance Notes', link: '#' },
        ],
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Core Subjects Notes</h1>
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

    export default CoreSubjectsNotesPage;
