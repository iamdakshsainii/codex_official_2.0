import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function ImageSliderPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the image slider.',
      code: `
        <div class="slider-container">
          <div class="slider">
            <img src="https://i.pinimg.com/originals/cd/f4/3d/cdf43d73171e016e57b17b6a0ead6de3.jpg" alt="Slide 1" />
            <img src="https://i.pinimg.com/originals/cd/f4/3d/cdf43d73171e016e57b17b6a0ead6de3.jpg?text=Slide+2" alt="Slide 2" />
            <img src="https://i.pinimg.com/originals/cd/f4/3d/cdf43d73171e016e57b17b6a0ead6de3.jpg" alt="Slide 3" />
          </div>
        </div>
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div class="slider-container"><div class="slider"><img src="https://via.placeholder.com/200x150?text=Slide+1" alt="Slide 1" /><img src="https://via.placeholder.com/200x150?text=Slide+2" alt="Slide 2" /><img src="https://via.placeholder.com/200x150?text=Slide+3" alt="Slide 3" /></div></div></div>',
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the image slider look good.',
      code: `
        /* CSS code for styling */
        .slider-container { overflow: hidden; }
        .slider { display: flex; }
        .slider img { width: 100%; }
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div class="slider-container" style="overflow: hidden;"><div class="slider" style="display: flex;"><img src="https://via.placeholder.com/200x150?text=Slide+1" alt="Slide 1" style="width: 100%;" /><img src="https://via.placeholder.com/200x150?text=Slide+2" alt="Slide 2" style="width: 100%;" /><img src="https://via.placeholder.com/200x150?text=Slide+3" alt="Slide 3" style="width: 100%;" /></div></div></div>',
    },
    {
      title: 'Step 3: JavaScript Logic',
      description: 'Write JavaScript code to make the slider work.',
      code: `
        // JavaScript code for image slider functionality
        function updateSlider() {
          const slider = document.querySelector('.slider');
          let slideIndex = 0;
          function showSlide(index) {
            slider.style.transform = \`translateX(-\${index * 100}%) \`;
          }
          setInterval(() => {
            slideIndex = (slideIndex + 1) % 3;
            showSlide(slideIndex);
          }, 3000);
        }
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div class="slider-container" style="overflow: hidden;"><div class="slider" style="display: flex;"><img src="https://via.placeholder.com/200x150?text=Slide+1" alt="Slide 1" style="width: 100%;" /><img src="https://via.placeholder.com/200x150?text=Slide+2" alt="Slide 2" style="width: 100%;" /><img src="https://via.placeholder.com/200x150?text=Slide+3" alt="Slide 3" style="width: 100%;" /></div></div></div>',
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
        <!-- HTML -->
        <div class="slider-container">
          <div class="slider">
            <img src="https://i.pinimg.com/originals/cd/f4/3d/cdf43d73171e016e57b17b6a0ead6de3.jpg" alt="Slide 1" />
            <img src="https://via.placeholder.com/200x150?text=Slide+2" alt="Slide 2" />
            <img src="https://via.placeholder.com/200x150?text=Slide+3" alt="Slide 3" />
          </div>
        </div>

        /* CSS */
        .slider-container { overflow: hidden; }
        .slider { display: flex; transition: transform 0.5s ease-in-out; }
        .slider img { width: 100%; flex-shrink: 0; }

        // JavaScript
        function updateSlider() {
          const slider = document.querySelector('.slider');
          let slideIndex = 0;
          function showSlide(index) {
            slider.style.transform = \`translateX(-\${index * 100}%) \`;
          }
          setInterval(() => {
            slideIndex = (slideIndex + 1) % 3;
            showSlide(slideIndex);
          }, 3000);
        }
        updateSlider();
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div class="slider-container" style="overflow: hidden;"><div class="slider" style="display: flex;"><img src="https://via.placeholder.com/200x150?text=Slide+1" alt="Slide 1" style="width: 100%;" /><img src="https://via.placeholder.com/200x150?text=Slide+2" alt="Slide 2" style="width: 100%;" /><img src="https://via.placeholder.com/200x150?text=Slide+3" alt="Slide 3" style="width: 100%;" /></div></div></div>',
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return (
    <StepwiseComponent steps={steps} renderDemo={renderDemo} />
  );
}

export default ImageSliderPage;
