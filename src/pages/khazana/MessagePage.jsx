import React from 'react';
    import { useLocation, Link } from 'react-router-dom';

    function MessagePage() {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const feature = queryParams.get('feature');

      const featureDetails = {
        'Peer Support': {
          title: 'Peer Support Unveiled!',
          description: "Get ready to connect with fellow students like never before! We're building a dedicated space where you can share your experiences, ask questions, and learn from each other's journeys. Expect interactive forums, study groups, and a supportive community to help you thrive.",
        },
        'Chat with Experts': {
          title: 'Chat with Experts Unveiled!',
          description: "Prepare to gain invaluable insights from
