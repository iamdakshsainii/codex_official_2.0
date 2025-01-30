import React, { useState, useEffect } from 'react';
    import NoteCard from './NoteCard';
    import NoteModal from '../../components/NoteModal';

    function NotesPage() {
      const [notes, setNotes] = useState({});
      const [selectedNote, setSelectedNote] = useState(null);
      const [isEditing, setIsEditing] = useState(false);

      useEffect(() => {
        const allKeys = Object.keys(localStorage);
        const projectNotesKeys = allKeys.filter(key => key.startsWith('projectNotes-'));
        const allNotes = {};
        projectNotesKeys.forEach(key => {
          try {
            const notes = JSON.parse(localStorage.getItem(key));
            if (notes && typeof notes === 'object') {
              Object.assign(allNotes, notes);
            }
          } catch (error) {
            console.error('Error parsing notes from local storage', key, error);
          }
        });
        setNotes(allNotes);
      }, []);

      const handleNoteClick = (itemName, noteText, resources) => {
        setSelectedNote({ itemName, noteText, resources });
      };

      const handleCloseNote = () => {
        setSelectedNote(null);
        setIsEditing(false);
      };

      const handleEditNote = (itemName, noteText, resources) => {
        setSelectedNote({ itemName, noteText, resources });
        setIsEditing(true);
      };

      const handleSaveNote = (itemName, newNoteText, resources) => {
        setNotes(prevNotes => {
          const updatedNotes = { ...prevNotes, [itemName]: { noteText: newNoteText, resources: resources } };
          localStorage.setItem(`projectNotes-${itemName.split('-')[0]}`, JSON.stringify(updatedNotes));
          return updatedNotes;
        });
        setIsEditing(false);
        setSelectedNote(null);
      };

      const handleDeleteNote = (itemName) => {
        setNotes(prevNotes => {
          const updatedNotes = { ...prevNotes };
          delete updatedNotes[itemName];
          localStorage.setItem(`projectNotes-${itemName.split('-')[0]}`, JSON.stringify(updatedNotes));
          return updatedNotes;
        });
        setSelectedNote(null);
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Saved Notes</h1>
          {Object.keys(notes).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(notes).map(([itemName, noteData]) => (
                <NoteCard
                  key={itemName}
                  itemName={itemName}
                  noteText={noteData.noteText}
                  resources={noteData.resources}
                  onClick={handleNoteClick}
                  onEdit={handleEditNote}
                  onDelete={handleDeleteNote}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">
              You have not saved any notes yet.
            </p>
          )}
          {selectedNote && (
            <NoteModal
              isOpen={selectedNote !== null}
              onClose={handleCloseNote}
              onSave={handleSaveNote}
              initialNote={selectedNote.noteText}
              itemName={selectedNote.itemName}
              initialResources={selectedNote.resources}
            />
          )}
        </div>
      );
    }

    export default NotesPage;
