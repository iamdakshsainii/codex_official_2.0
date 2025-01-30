const dataSources = {
      events: '/data/events.json',
      internships: '/data/internships.json',
    };

    async function fetchData(type) {
      try {
        const response = await fetch(dataSources[type]);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Failed to fetch ${type} data:`, error);
        return null;
      }
    }

    export async function getFreshData(type) {
      const storedData = localStorage.getItem(type);
      const storedTimestamp = localStorage.getItem(`${type}Timestamp`);
      const now = new Date().getTime();
      const twoToThreeDays = (2 + Math.random()) * 24 * 60 * 60 * 1000; // Randomly 2 or 3 days

      if (storedData && storedTimestamp && (now - parseInt(storedTimestamp, 10) < twoToThreeDays)) {
        return JSON.parse(storedData);
      }

      const freshData = await fetchData(type);
      if (freshData) {
        localStorage.setItem(type, JSON.stringify(freshData));
        localStorage.setItem(`${type}Timestamp`, now.toString());
        return freshData;
      }
      return storedData ? JSON.parse(storedData) : [];
    }
