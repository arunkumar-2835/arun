import React from 'react';
import { Award, Trophy, Star, AlignCenterVertical as Certificate } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      description: '1st Place at TechCrunch Disrupt Hackathon 2023',
      date: '2023',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Certificate,
      title: 'AWS Solutions Architect',
      description: 'AWS Certified Solutions Architect - Professional',
      date: '2023',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Award,
      title: 'Google Developer Expert',
      description: 'Google Developer Expert in Web Technologies',
      date: '2022',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Star,
      title: 'Open Source Contributor',
      description: 'Top 100 JavaScript contributors on GitHub',
      date: '2022',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Certificate,
      title: 'React Specialist',
      description: 'Meta React Developer Professional Certificate',
      date: '2021',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Trophy,
      title: 'Innovation Award',
      description: 'Company Innovation Award for Best Technical Solution',
      date: '2021',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Recognition and certifications earned throughout my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="inline-flex items-center px-3 py-1 bg-gray-700 rounded-full">
                  <span className="text-purple-400 text-sm font-semibold">{achievement.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;