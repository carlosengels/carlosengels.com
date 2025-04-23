import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'CLI Network Port Scanner',
      description: 'A multithreaded CLI tool for determining TCP/UDP port status on given IP addresses. Features include saving multiple host profiles with scan results in JSON format, customizable port ranges, and connection timeouts. Includes a user-friendly menu interface for managing scans and results.',
      technologies: ['Java', 'JSON', 'Multithreading', 'Socket Programming'],
      image: '/images/port-scanner.jpg',
      link: 'https://github.com/carlosengels/cli_network_port_scanner'
    },
    {
      title: 'CLI Password Generator',
      description: 'A command-line tool for generating secure, random passwords. Built with Java, this utility provides customizable password generation options and secure random number generation.',
      technologies: ['Java', 'CLI', 'Security'],
      image: '/images/password-generator.jpg',
      link: 'https://github.com/carlosengels/cli-pw-generator'
    },
    {
      title: 'Daily GitHub Counter',
      description: 'A system service that automatically updates a daily counter on GitHub. Implemented with Python and Go, featuring systemd service integration and AWS S3 integration for persistent storage.',
      technologies: ['Python', 'Go', 'Shell', 'AWS S3', 'systemd'],
      image: '/images/daily-counter.jpg',
      link: 'https://github.com/carlosengels/daily_counter'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Projects</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Featured Work
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            A collection of my open-source projects showcasing my expertise in software development and system administration.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          Technologies Used:
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          View on GitHub →
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/3 md:pl-8">
                      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Projects Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Other Projects</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  System Administration Tools
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  A collection of shell and Go scripts for system administration tasks and automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 