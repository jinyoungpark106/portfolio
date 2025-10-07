import { useState, useEffect } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'English Premier League Score',
      description: 'An English Premier League information platform built with React, Node.js, and Firebase. Features include match results, team and player statistics, league standings, and match schedules.',
      image: '⚽',
      technologies: ['React', 'Typescript', 'Vite', 'Tailwind CSS', 'Firebase', 'Vercel API'],
      category: 'fullstack',
      liveUrl: 'https://football-league-info.web.app',
      githubUrl: 'https://github.com/jinyoungpark106/soccer-league',
      isShowBtn: true,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations.',
      image: '💼',
      technologies: ['React', 'Javascript', 'Tailwind CSS', 'Vite'],
      category: 'frontend',
      liveUrl: 'https://portfolio-jinyoung.web.app',
      githubUrl: 'https://github.com/jinyoungpark106/portfolio',
      isShowBtn: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-700}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.isShowBtn &&
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-gray-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-gray-600 hover:to-purple-700 transition-all duration-300"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-gray-600 text-gray-300 text-center py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
