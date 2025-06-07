import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Shield, BarChart3, Smartphone, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js/Express', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 90 },
        { name: 'React Native', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'App Store Deploy', level: 80 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python/TensorFlow', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'NLP/spaCy', level: 80 },
        { name: 'Computer Vision', level: 75 },
        { name: 'Data Analysis', level: 90 },
        { name: 'Pandas/NumPy', level: 85 },
      ],
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Threat Detection', level: 80 },
        { name: 'Network Security', level: 75 },
        { name: 'Access Control', level: 85 },
        { name: 'Security Auditing', level: 75 },
        { name: 'Penetration Testing', level: 70 },
        { name: 'Risk Assessment', level: 80 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'AWS/Azure', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Linux/Ubuntu', level: 85 },
        { name: 'Nginx/Apache', level: 75 },
      ],
    },
  ];

  const tools = [
    'VS Code', 'IntelliJ IDEA', 'Figma', 'Postman', 'Docker Desktop',
    'AWS Console', 'MongoDB Compass', 'Git', 'Jira', 'Slack',
    'Notion', 'Tableau', 'Jupyter Notebook', 'Android Studio'
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-gray-800/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning modern web technologies, mobile development, 
            AI/ML, cybersecurity, and cloud infrastructure.
          </p>
        </div>

        {/* Animated Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-900/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm group-hover/skill:text-white transition-colors duration-200">{skill.name}</span>
                        <span className="text-gray-400 text-sm group-hover/skill:text-blue-400 transition-colors duration-200">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out transform origin-left ${
                            animateSkills ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Tools Section */}
        <div className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-gray-800/70 text-gray-300 rounded-full border border-gray-600/50 hover:bg-gray-700/70 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${1400 + (index * 50)}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Animated Soft Skills */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
            { title: 'Team Collaboration', description: 'Effective communication and teamwork' },
            { title: 'Project Management', description: 'Agile methodologies and time management' },
            { title: 'Continuous Learning', description: 'Staying updated with latest technologies' },
          ].map((softSkill, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center hover:bg-gray-900/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${1600 + (index * 150)}ms` }}
            >
              <h4 className="text-lg font-semibold text-white mb-2 hover:text-blue-300 transition-colors duration-300">{softSkill.title}</h4>
              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">{softSkill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;