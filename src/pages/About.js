import React from 'react';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">About Me</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Professional Background
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">
            Site Reliability Engineer with expertise in cloud infrastructure and automation.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Experience</h2>
            <div className="mt-12 space-y-10">
              {/* Current Role */}
              <div className="relative">
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Site Reliability Engineer at Vertafore
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Specializing in cloud infrastructure, automation, and reliability engineering.
                    Building scalable and resilient systems with AWS, Kubernetes, and Terraform.
                  </p>
                </div>
              </div>

              {/* Previous Role */}
              <div className="relative">
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Audiovisual/IT Services Engineer at Twilio
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                    Managed IT infrastructure and provided technical support for audiovisual systems.
                    Implemented automation solutions and improved system reliability.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="relative">
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Education & Certifications
                  </h3>
                  <ul className="mt-2 text-base text-gray-500 dark:text-gray-300 space-y-2">
                    <li>• AWS Certified Cloud Practitioner</li>
                    <li>• CompTIA Network+</li>
                    <li>• BloomTech - Software Engineering</li>
                    <li>• SAE Institute Germany - Audio Engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Technical Skills</h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cloud Infrastructure (AWS)</li>
                    <li>Containerization (Docker, Kubernetes)</li>
                    <li>Infrastructure as Code (Terraform)</li>
                    <li>CI/CD Pipelines (GitLab, Jenkins)</li>
                    <li>Monitoring & Observability</li>
                    <li>Scripting & Automation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Soft Skills</h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Technical Documentation</li>
                    <li>Project Management</li>
                    <li>Communication</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 