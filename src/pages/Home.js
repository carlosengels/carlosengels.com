import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Carlos Engels</span>
                  <span className="block text-primary-600">Site Reliability Engineer</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Specializing in cloud infrastructure, automation, and reliability engineering.
                  Building scalable and resilient systems with AWS, Kubernetes, and Terraform.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/projects"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      View Projects
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Technical Expertise
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Cloud & Infrastructure */}
              <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Cloud & Infrastructure
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
                    <ul className="list-disc list-inside">
                      <li>AWS Services</li>
                      <li>Kubernetes</li>
                      <li>Terraform</li>
                      <li>Docker</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DevOps & Automation */}
              <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    DevOps & Automation
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
                    <ul className="list-disc list-inside">
                      <li>CI/CD Pipelines</li>
                      <li>GitLab</li>
                      <li>Jenkins</li>
                      <li>Ansible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Monitoring & Reliability */}
              <div className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    Monitoring & Reliability
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
                    <ul className="list-disc list-inside">
                      <li>Dynatrace</li>
                      <li>Prometheus</li>
                      <li>Grafana</li>
                      <li>CloudWatch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 