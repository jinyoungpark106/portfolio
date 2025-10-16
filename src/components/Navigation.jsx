import { useState } from 'react'

const menuItems = ['home', 'about', 'skills', 'projects', 'contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-sm shadow-lg`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-400"/>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 capitalize cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 pr-5" onClick={() => setIsOpen(true)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    {isOpen &&
      <div
        className={`fixed top-0 right-0 h-full w-48 bg-gray-800 text-white transform z-[9999]
          ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white pr-5"
        >
          ✕
        </button>
        <ul className="mt-16 space-y-4 text-lg p-4 capitalize">
          {menuItems.map((item, i) => (
            <li key={i}>
              <div onClick={() => {
                setIsOpen(false);
                scrollToSection(item);
              }}>{item}</div>
            </li>
          ))}
        </ul>
      </div>
    }
    </>
  )
}

export default Navigation
