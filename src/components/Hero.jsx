import { useEffect, useRef } from 'react'

const Hero = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current
    if (text) {
      const textContent = text.textContent
      text.textContent = ''
      
      let i = 0
      const typeWriter = () => {
        if (i < textContent.length) {
          text.textContent += textContent.charAt(i)
          i++
          setTimeout(typeWriter, 100)
        }
      }
      typeWriter()
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center overflow-hidden touch-pan-y">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
        <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Jinyoung
          </h1>
          <h2 ref={textRef} className="text-2xl md:text-3xl text-gray-300 mb-8">
            Web Developer
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, responsive, and user-friendly web applications using modern technologies like React, Javascript, Vite, tailwind and more.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-gray-500 to-purple-600 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-gray-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
