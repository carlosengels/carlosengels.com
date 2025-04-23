import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/cloud-solutions-carlos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {currentYear} Carlos Engels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 