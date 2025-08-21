import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      role: 'Senior Full-Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Lead a team of 5 developers in building scalable web applications',
        'Architected and implemented microservices using Node.js and Docker',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'StartupXYZ',
      role: 'Full-Stack Developer',
      duration: '2020 - 2022',
      location: 'Austin, TX',
      responsibilities: [
        'Developed and maintained React-based frontend applications',
        'Built RESTful APIs using Express.js and PostgreSQL',
        'Implemented real-time features using WebSocket technology',
        'Collaborated with design team to create responsive UI components'
      ]
    },
    {
      company: 'Digital Agency Pro',
      role: 'Frontend Developer',
      duration: '2019 - 2020',
      location: 'Remote',
      responsibilities: [
        'Created responsive websites for 20+ clients using modern frameworks',
        'Optimized website performance and SEO rankings',
        'Integrated third-party APIs and payment gateways',
        'Maintained cross-browser compatibility and accessibility standards'
      ]
    },
    {
      company: 'InnovateLab',
      role: 'Junior Developer',
      duration: '2018 - 2019',
      location: 'Seattle, WA',
      responsibilities: [
        'Assisted in developing web applications using HTML, CSS, and JavaScript',
        'Participated in agile development processes and sprint planning',
        'Wrote unit tests and maintained code documentation',
        'Learned modern development practices and version control systems'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional experience and growth in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg text-blue-400 font-semibold">{exp.company}</h4>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;