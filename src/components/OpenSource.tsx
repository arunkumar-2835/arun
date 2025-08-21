import React from 'react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      name: 'react-ui-toolkit',
      description: 'A comprehensive React component library with modern design principles and accessibility features.',
      language: 'TypeScript',
      stars: 2856,
      forks: 342,
      topics: ['react', 'typescript', 'ui-components', 'accessibility']
    },
    {
      name: 'node-api-boilerplate',
      description: 'Production-ready Node.js API boilerplate with authentication, validation, and testing setup.',
      language: 'JavaScript',
      stars: 1923,
      forks: 287,
      topics: ['nodejs', 'express', 'api', 'mongodb', 'jwt']
    },
    {
      name: 'css-animations-collection',
      description: 'A curated collection of smooth CSS animations and transitions for modern web applications.',
      language: 'CSS',
      stars: 4567,
      forks: 678,
      topics: ['css', 'animations', 'transitions', 'web-design']
    },
    {
      name: 'data-viz-toolkit',
      description: 'Lightweight JavaScript library for creating beautiful and interactive data visualizations.',
      language: 'JavaScript',
      stars: 1456,
      forks: 198,
      topics: ['javascript', 'data-visualization', 'charts', 'd3js']
    },
    {
      name: 'mobile-first-starter',
      description: 'Mobile-first React Native starter template with navigation, state management, and UI components.',
      language: 'TypeScript',
      stars: 892,
      forks: 156,
      topics: ['react-native', 'mobile', 'typescript', 'starter-template']
    },
    {
      name: 'dev-tools-cli',
      description: 'Command-line tool for developers with utilities for project setup, code generation, and deployment.',
      language: 'Python',
      stars: 756,
      forks: 89,
      topics: ['cli', 'developer-tools', 'python', 'automation']
    }
  ];

  const languageColors = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    CSS: '#1572b6',
    Python: '#3776ab'
  };

  return (
    <section id="opensource" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Contributing to the developer community through open source projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Github className="text-white" size={20} />
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-white transition-colors duration-300" size={16} />
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: languageColors[project.language as keyof typeof languageColors] }}
                  ></div>
                  <span className="text-gray-400 text-sm">{project.language}</span>
                </div>

                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star size={14} />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork size={14} />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.topics.slice(0, 3).map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                  >
                    {topic}
                  </span>
                ))}
                {project.topics.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    +{project.topics.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;