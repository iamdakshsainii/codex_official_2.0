import React, { useState } from 'react';

    function StepwiseComponent({ steps, initialStep = 1, renderDemo }) {
      const [currentStep, setCurrentStep] = useState(initialStep);
      const [showCode, setShowCode] = useState(false);
      const [isDemoOpen, setIsDemoOpen] = useState(false);

      const handleGetCode = () => {
        setShowCode(!showCode);
      };

      const handleOpenDemo = () => {
        setIsDemoOpen(true);
      };

      const handleCloseDemo = () => {
        setIsDemoOpen(false);
      };

      const handleNextStep = () => {
        if (currentStep < steps.length) {
          setCurrentStep(currentStep + 1);
        }
      };

      const handlePrevStep = () => {
        if (currentStep > 1) {
          setCurrentStep(currentStep - 1);
        }
      };

      const currentStepData = steps[currentStep - 1];

      return (
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Steps to Solve</h2>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous Step
              </button>
              <button
                onClick={handleNextStep}
                disabled={currentStep === steps.length}
                className={`px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs ${currentStep === steps.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Next Step
              </button>
            </div>
          </div>
          <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Step {currentStep}: {currentStepData.title}</h3>
            <p className="text-gray-300 mb-2">{currentStepData.description}</p>
            <div className="text-center">
              <button
                onClick={handleGetCode}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Get Code
              </button>
              <button
                onClick={handleOpenDemo}
                className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                View Demo
              </button>
            </div>
            {showCode && (
              <pre className="bg-gray-600 p-3 rounded-md overflow-x-auto mt-2">
                <code className="text-white whitespace-pre-wrap">{currentStepData.code}</code>
              </pre>
            )}
            {isDemoOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-gray-800 p-8 rounded-lg max-w-3xl w-full">
                  <h2 className="text-2xl font-semibold text-center mb-4">Demo</h2>
                  <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                    {renderDemo && renderDemo(currentStepData)}
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={handleCloseDemo}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    export default StepwiseComponent;
