import React, { useState, useEffect } from 'react';

    function ResponsiveImageSliderDemo({ onClose }) {
      const [currentSlide, setCurrentSlide] = useState(0);
      const slides = [
        'https://placekitten.com/300/200',
        'https://placekitten.com/301/200',
        'https://placekitten.com/302/200',
      ];

      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
      }, [slides.length]);

      const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };

      const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };

      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-semibold text-center mb-4">Responsive Image Slider Demo</h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
                ))}
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between">
                <button onClick={handlePrevSlide} className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all">
                  Prev
                </button>
                <button onClick={handleNextSlide} className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all">
                  Next
                </button>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }

    export default ResponsiveImageSliderDemo;
