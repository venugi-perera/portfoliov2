import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Cybersecurity', 'Data Analytics'];

  const projects = [
    {
      title: 'Smart Inventory Management System',
      category: 'Full-Stack',
      description: 'ML-powered inventory system that predicts shortages and automates ordering. Features admin dashboards, real-time tracking, and intelligent analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'Express'],
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Freelancer Marketplace App',
      category: 'Full-Stack',
      description: 'Complete freelancing platform with role-based authentication, real-time messaging, payment integration, and project management tools.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Personal Finance Tracker',
      category: 'Full-Stack',
      description: 'Cross-platform finance app with expense categorization, trend visualization, and real-time synchronization between web and mobile.',
      tech: ['React', 'Flutter', 'Node.js', 'PostgreSQL', 'Chart.js', 'Firebase'],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Career Recommendation System',
      category: 'AI/ML',
      description: 'AI-powered platform that suggests career paths based on skills, with course tracking, progress monitoring, and personalized reminders.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Scikit-learn'],
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Document Classification System',
      category: 'AI/ML',
      description: 'NLP-powered system that automatically categorizes uploaded documents into relevant folders using advanced text processing algorithms.',
      tech: ['Python', 'NLTK', 'spaCy', 'FastAPI', 'React', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Facial Emotion Detection App',
      category: 'AI/ML',
      description: 'Real-time emotion recognition system using computer vision, perfect for educational platforms and user experience analytics.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'React', 'WebRTC', 'Flask'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Insider Threat Detection System',
      category: 'Cybersecurity',
      description: 'Advanced security system that monitors user behavior, detects anomalies, and automatically responds to potential insider threats.',
      tech: ['Python', 'Machine Learning', 'Flask', 'PostgreSQL', 'React', 'Redis'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Role-Based Access Control App',
      category: 'Cybersecurity',
      description: 'Dynamic permission management system with granular access controls, audit trails, and multi-tenant architecture.',
      tech: ['Node.js', 'React', 'MongoDB', 'JWT', 'Express', 'Redis'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Sales Forecasting Dashboard',
      category: 'Data Analytics',
      description: 'Comprehensive analytics platform that predicts future sales using historical data and advanced statistical models.',
      tech: ['Python', 'Flask', 'Chart.js', 'Pandas', 'Scikit-learn', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real-Time COVID Tracker',
      category: 'Data Analytics',
      description: 'Interactive dashboard displaying global COVID data with risk prediction models and real-time API integration.',
      tech: ['React', 'D3.js', 'Node.js', 'External APIs', 'Chart.js', 'Express'],
      image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions across multiple domains, demonstrating 
            technical expertise and problem-solving capabilities.
          </p>
        </div>

        {/* Animated Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-blue-600 transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-purple-600 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30 animate-pulse-slow">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded hover:bg-gray-600 transition-colors duration-200"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
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
    </section>
  );
};

export default Projects;