import { useState, useEffect } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('frontend')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 100, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 100, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 100, color: 'from-blue-500 to-blue-700' },
        { name: 'Next.js', level: 100, color: 'from-gray-400 to-gray-600' },
        { name: 'Vite', level: 100, color: 'from-blue-500 to-blue-700' },
        { name: 'Redux', level: 100, color: 'from-green-400 to-green-600' },
        { name: 'HTML5', level: 100, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 100, color: 'from-blue-300 to-blue-500' },
        { name: 'Tailwind CSS', level: 100, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Ant Design', level: 100, color: 'from-cyan-400 to-cyan-600' },
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Firebase', level: 100, color: 'from-orange-400 to-orange-600' },
        { name: 'Vercel API', level: 100, color: 'from-orange-400 to-orange-600' },
        { name: 'PostgreSQL', level: 100, color: 'from-blue-400 to-blue-600' },
      ]
    },
    tools: {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 100, color: 'from-orange-400 to-orange-600' },
        { name: 'WebStorm', level: 100, color: 'from-purple-400 to-purple-600' },
        { name: 'VS Code', level: 100, color: 'from-blue-400 to-blue-600' },
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-gray-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
