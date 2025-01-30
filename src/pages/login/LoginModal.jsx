import React from 'react';
    import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

    function LoginModal({ onClose }) {
      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20 max-w-md w-full">
            <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 w-full"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="p-2 text-gray-400 hover:text-blue-500">
                <FaGoogle className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-500">
                <FaFacebook className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-500">
                <FaGithub className="h-6 w-6" />
              </button>
            </div>
            <p className="text-center text-gray-400 mt-8">
              This login feature is not active yet. We'll be back soon!
            </p>
            <div className="text-center mt-4">
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

    export default LoginModal;
