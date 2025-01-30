import React from 'react';
    import ResourceModal from '../ResourceModal';

    function JavaScriptNotesModal({ isOpen, onClose, note }) {
      if (!isOpen) return null;

      const resources = [
        { title: 'JavaScript Cheatsheet', link: 'https://drive.google.com/file/d/18Rw1UeYc8tceXv_gAC4_roKCrWsvz7E6/view?usp=drive_link', type: 'pdf' },
        { title: 'Array Methods', link: 'https://drive.google.com/file/d/1-DxeP6eHBqdLZJs3M59iXObyNmvvIBun/view?usp=drive_link', type: 'pdf' },
        { title: 'JavaScript Projects', link: 'https://drive.google.com/file/d/11RUnDWR37SJjaFcm7jnuRqrb1J4-9Lon/view?usp=drive_link', type: 'pdf' },
        { title: 'DSA with JavaScript', link: 'https://drive.google.com/file/d/1IQFNz4lG_vMQ-IilP_DyCO2TGwDCBzW0/view?usp=drive_link', type: 'pdf' },
        { title: 'JavaScript Roadmap', link: 'https://drive.google.com/file/d/1n2IpH39ztNse88RifAzMBs9Av5gziNAr/view?usp=drive_link', type: 'pdf' },
        { title: 'JavaScript Interview Questions', link: 'https://drive.google.com/file/d/1OVsS2Hjsnyq3mEdoWWXvt3AhIM3YwOjX/view?usp=drive_link', type: 'pdf' },
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

    export default JavaScriptNotesModal;
