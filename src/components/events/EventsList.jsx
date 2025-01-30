import React, { useState, useEffect } from 'react';
    import EventCard from './EventCard';
    import { getFreshData } from '../../utils/dataFetcher';

    function EventsList() {
      const [events, setEvents] = useState([]);

      useEffect(() => {
        const fetchEvents = async () => {
          const freshEvents = await getFreshData('events');
          if (freshEvents) {
            setEvents(freshEvents);
          }
        };
        fetchEvents();
      }, []);

      return (
        <div className="container mx-auto py-12 px-4 mt-16">
          <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      );
    }

    export default EventsList;
