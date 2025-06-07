import React from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'BSc (Hons) in Computer Science',
      institution: 'University of Technology',
      period: '2020 - 2024',
      status: 'Graduated with Distinction',
      gpa: '3.8/4.0',
      description: 'Comprehensive computer science program with focus on software engineering, AI/ML, and cybersecurity.',
      modules: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Machine Learning & AI',
        'Cybersecurity Fundamentals',
        'Database Systems',
        'Web Development',
        'Mobile App Development',
        'Network Programming',
      ],
      achievements: [
        'Best Final Year Project Award',
        'Outstanding Achievement in AI/ML coursework',
      ],
    },
    {
      degree: 'Ontario Secondary School Diploma (OSSD)',
      institution: 'Riverside High School',
      period: '2016 - 2020',
      status: 'Graduated with Honours',
      gpa: '95%',
      description: 'Completed with distinction in all subjects with focus on mathematics, sciences, and computer studies.',
      modules: [
        'Advanced Mathematics',
        'Computer Science',
        'Physics',
        'Chemistry',
        'English Literature',
        'Business Studies',
      ],
      achievements: [
        'Valedictorian',
        'Best Achievement Award',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Meta Front-End Developer Certificate',
      issuer: 'Meta (Coursera)',
      date: '2023',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design'],
      credentialUrl: '#',
    },
    {
      name: 'Google Data Analytics Certificate',
      issuer: 'Google (Coursera)',
      date: '2023',
      skills: ['SQL', 'Tableau', 'R Programming', 'Data Visualization'],
      credentialUrl: '#',
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strong academic foundation complemented by industry-recognized certifications 
            and continuous learning in cutting-edge technologies.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-400" />
            Academic Background
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <h5 className="text-xl text-blue-400 font-medium mb-2">{edu.institution}</h5>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                      <span>{edu.period}</span>
                      <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full border border-green-600/30">
                        {edu.status}
                      </span>
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h6 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen size={20} className="text-blue-400" />
                      Key Modules
                    </h6>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.modules.map((module, moduleIndex) => (
                        <span
                          key={moduleIndex}
                          className="px-3 py-2 bg-gray-700 text-gray-300 text-sm rounded"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award size={20} className="text-yellow-400" />
                      Achievements
                    </h6>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-yellow-400" />
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-blue-400 mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">Completed: {cert.date}</p>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-300 mb-2">Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                      >
                        {skill}
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

export default Education;