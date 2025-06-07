import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: '',
      location: '',
      period: 'Aug 2024 - Present',
      type: 'Full-time',
      description: 'Working on the Nissan Finance Spreading Tool, leveraging technologies like Next.js and Docker for seamless deployments.',
      achievements: [],
      tech: ['Next.js', 'Docker']
    },
    {
      title: 'Associate Software Engineer',
      company: '',
      location: '',
      period: 'Aug 2023 - Aug 2024',
      type: 'Full-time',
      description: 'Assisted in the refinement and implementation of scalable solutions for CMS Collection Management and RDB Loan Origination.',
      achievements: [
        'Actively participated in collaborative efforts to develop AI models aimed at enhancing customer segmentation and risk analysis, contributing to streamlined automation and informed decision-making processes within the team.'
      ],
      tech: ['AI', 'CMS Collection Management', 'RDB Loan Origination']
    },
    {
      title: 'Software Engineer Intern',
      company: '',
      location: '',
      period: 'Feb 2023 - Aug 2023',
      type: 'Internship',
      description: 'Led innovative solutions for CMS Collection Management and RDB Loan Origination, utilizing tech stacks like React, Node.js, and SQL Developer, integrating AI models for customer segmentation and risk analysis.',
      achievements: [],
      tech: ['React', 'Node.js', 'SQL Developer', 'AI']
    }
  ]
  ;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'Freelance':
        return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'Volunteer':
        return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A track record of delivering impactful solutions across diverse technical environments, 
            from internships to freelance projects and community contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-900/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      <span className={`px-3 py-1 text-sm rounded-full border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-xl text-blue-400 font-medium mb-2">{exp.company}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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