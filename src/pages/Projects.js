import React from 'react';

const ProjectCard = ({ title, description, image, technologies, githubLink }) => (
  <div className="card bg-white dark:bg-gray-800 p-6 mb-8">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    {image && (
      <div className="mb-4">
        <img 
          src={`/images/projects/${image}`} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = '/images/placeholder-project.jpg';
            e.target.onerror = null;
          }}
        />
      </div>
    )}
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="font-semibold mb-2">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary inline-block"
      >
        View on GitHub →
      </a>
    )}
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Daily GitHub Counter",
      description: "A system service that automatically updates a daily counter on GitHub. Implemented with Python and Go, featuring systemd service integration and AWS S3 integration for persistent storage.",
      image: "daily-counter.jpg",
      technologies: ["Python", "Go", "Shell", "AWS S3", "systemd"],
      githubLink: "https://github.com/yourusername/daily-github-counter"
    },
    {
      title: "Password Generator",
      description: "A secure password generator with customizable options for length, complexity, and character sets.",
      image: "password-generator.jpg",
      technologies: ["Python", "Cryptography", "CLI"],
      githubLink: "https://github.com/yourusername/password-generator"
    },
    {
      title: "Port Scanner",
      description: "A network port scanner with TCP/UDP support and service detection capabilities.",
      image: "port-scanner.jpg",
      technologies: ["Python", "Networking", "Security"],
      githubLink: "https://github.com/yourusername/port-scanner"
    }
  ];

  return (
    <div className="section container-custom">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 