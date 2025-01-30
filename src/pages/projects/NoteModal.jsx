import React, { useState, useEffect, useRef } from 'react';

    function NoteModal({ projectName, onClose, onNoteChange, initialNote }) {
      const [noteText, setNoteText] = useState(initialNote);
      const [wordCount, setWordCount] = useState(0);
      const textareaRef = useRef(null);

      useEffect(() => {
        setWordCount(noteText.trim().split(/\s+/).filter(Boolean).length);
      }, [note
