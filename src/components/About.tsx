import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Shield, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const specializations = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in MERN stack and Flutter development, creating scalable web and mobile applications with modern architectures.',
    },
    {
      icon: Database,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems using NLP, computer vision, and predictive analytics to solve complex problems.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Building secure systems with threat detection, access control, and anomaly detection capabilities.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Creating insightful dashboards and forecasting systems using Python, visualization tools, and statistical analysis.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gray-800/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a versatile software engineer with a passion for creating innovative solutions 
            that make a real impact. My expertise spans multiple domains, allowing me to approach 
            problems from unique perspectives and deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/50 p-8 rounded-2xl hover:bg-gray-900/70 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">{spec.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{spec.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
            <h3 className="text-2xl font-semibold mb-4 text-white">My Philosophy</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Technology should empower people and solve real-world problems. I believe in writing 
              clean, maintainable code, following best practices, and continuously learning new 
              technologies. Every project is an opportunity to create something meaningful and push 
              the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;