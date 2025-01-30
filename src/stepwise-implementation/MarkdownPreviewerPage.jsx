import React, { useState } from 'react';
import StepwiseComponent from './StepwiseComponent';

function MarkdownPreviewerPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the Markdown previewer.',
      code: `
        <!-- HTML code for Markdown previewer -->
        <textarea id="markdownInput"></textarea>
        <div id="previewOutput"></div>
      `,
      demo: `
        <textarea placeholder="Enter Markdown"></textarea>
        <div id="previewOutput"></div>
      `,
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the Markdown previewer look good.',
      code: `
        /* CSS code for styling */
        textarea { width: 50%; height: 150px; }
        #previewOutput { width: 50%; height: 150px; border: 1px solid #ccc; overflow: auto; }
      `,
      demo: `
        <textarea placeholder="Enter Markdown" style="width: 50%; height: 150px;"></textarea>
        <div id="previewOutput" style="width: 50%; height: 150px; border: 1px solid #ccc; overflow: auto;"></div>
      `,
    },
    {
      title: 'Step 3: JavaScript Logic',
      description: 'Write JavaScript code to convert Markdown to HTML.',
      code: `
        // JavaScript code for Markdown previewer functionality
        function updatePreview() {
          const markdownInput = document.getElementById('markdownInput').value;
          const htmlOutput = marked.parse(markdownInput);
          document.getElementById('previewOutput').innerHTML = htmlOutput;
        }
      `,
      demo: `
        <textarea placeholder="Enter Markdown" style="width: 50%; height: 150px;"></textarea>
        <div id="previewOutput" style="width: 50%; height: 150px; border: 1px solid #ccc; overflow: auto;"></div>
      `,
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
        <!-- HTML -->
        <textarea id="markdownInput"></textarea>
        <div id="previewOutput"></div>

        /* CSS */
        textarea { width: 50%; height: 150px; }
        #previewOutput { width: 50%; height: 150px; border: 1px solid #ccc; overflow: auto; }

        // JavaScript
        function updatePreview() {
          const markdownInput = document.getElementById('markdownInput').value;
          const htmlOutput = marked.parse(markdownInput);
          document.getElementById('previewOutput').innerHTML = htmlOutput;
        }
        document.getElementById('markdownInput').addEventListener('input', updatePreview);
      `,
      demo: `
        <textarea placeholder="Enter Markdown" style="width: 50%; height: 150px;"></textarea>
        <div id="previewOutput" style="width: 50%; height: 150px; border: 1px solid #ccc; overflow: auto;"></div>
      `,
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return (
    <StepwiseComponent steps={steps} renderDemo={renderDemo} />
  );
}

export default MarkdownPreviewerPage;
