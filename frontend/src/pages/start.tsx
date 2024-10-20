import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { nav,Bot } from '../data'

interface Linkprops{
    to: string,
    className: string,
    children: string
}

export function Start() {
const [darkMode, setDarkMode] = useState(false)
useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
}, [darkMode])

const toggleDarkMode = () => {
    setDarkMode(!darkMode)
}

return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <Link to={{
            "pathname":"/"
        }}>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Medium</div>
        </Link>
        <nav className="hidden md:flex space-x-4">
        <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Our story</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Membership</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Write</Link>
          <Link to={{
            "pathname":"/signin"
        }} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign In</Link>
        </nav>
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    </header>

    <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Human stories & ideas
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A place to read, write, and deepen your understanding
            </p>
            <Link
            to={{
                pathname: '/blogs',
            }}
            className="inline-block bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
            Get started
            </Link>
        </div>
    </main>

    <footer className="py-4 px-6 border-t border-gray-200 dark:border-gray-700">
        <nav className="flex flex-wrap justify-center space-x-4 text-sm">
        <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Help</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Status</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Text to speech</Link>
          <Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Teams</Link>
        </nav>
    </footer>
    </div>
)
}
