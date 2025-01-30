import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function QRCodeGeneratorPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the QR code generator.',
          code: '<!-- HTML code for QR code generator -->\n<input type="text" id="qrText" placeholder="Enter text or URL" /><button id="generateBtn">Generate QR Code</button><div id="qrCode"></div>',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter text or URL" /><button>Generate QR Code</button><div id="qrCode"></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the QR code generator look good.',
          code: '/* CSS code for styling */\ninput { padding: 10px; margin-right: 10px; }\nbutton { padding: 10px; }',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter text or URL" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Generate QR Code</button><div id="qrCode"></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (API)',
          description: 'Write JavaScript code to generate the QR code using an API.',
          code: `// JavaScript code for QR code generator functionality using API
            async function generateQRCode() {
              const qrText = document.getElementById('qrText').value;
              const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText);
              document.getElementById('qrCode').innerHTML = '<img src="' + response.url + '" alt="QR Code" />';
            }`,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter text or URL" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Generate QR Code</button><div id="qrCode"></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <input type="text" id="qrText" placeholder="Enter text or URL" />
            <button id="generateBtn">Generate QR Code</button>
            <div id="qrCode"></div>

            /* CSS */
            input { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }

            // JavaScript
            async function generateQRCode() {
              const qrText = document.getElementById('qrText').value;
              const response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText);
              document.getElementById('qrCode').innerHTML = '<img src="' + response.url + '" alt="QR Code" />';
            }
            document.getElementById('generateBtn').addEventListener('click', generateQRCode);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter text or URL" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Generate QR Code</button><div id="qrCode"></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default QRCodeGeneratorPage;
