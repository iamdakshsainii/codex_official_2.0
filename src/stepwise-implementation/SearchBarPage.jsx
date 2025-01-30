import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function SearchBarPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the search bar.',
          code: '<input type="text" id="searchInput" placeholder="Search..." />',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Search..." /></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the search bar look good using Tailwind CSS.',
          code: '/* CSS code for styling using Tailwind CSS */\n<input type="text" class="p-2 border border-gray-300 rounded" placeholder="Search..." />',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Search..." style="padding: 10px; border: 1px solid #ccc;" /></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (React)',
          description: 'Write React code to handle search input.',
          code: `
            // JavaScript code for search bar functionality using React
            import React, { useState } from 'react';

            function SearchBar() {
              const [searchTerm, setSearchTerm] = useState('');

              const handleSearch = () => {
                alert('Searching for: ' + searchTerm);
              };

              return (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onBlur={handleSearch}
                />
              );
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Search..." style="padding: 10px; border: 1px solid #ccc;" /></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <input type="text" id="searchInput" placeholder="Search..." />

            /* CSS */
            input { padding: 10px; border: 1px solid #ccc; }

            // JavaScript
            import React, { useState } from 'react';

            function SearchBar() {
              const [searchTerm, setSearchTerm] = useState('');

              const handleSearch = () => {
                alert('Searching for: ' + searchTerm);
              };

              return (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onBlur={handleSearch}
                />
              );
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Search..." style="padding: 10px; border: 1px solid #ccc;" /></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default SearchBarPage;
