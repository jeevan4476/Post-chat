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
    localStorage.setItem('darkMode', darkMode.toString()) //pending work
}, [darkMode])

const toggleDarkMode = () => {
    setDarkMode(!darkMode)
}

return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="py-4 px-6 flex justify-between items-center border-b dark:bg-[#0A0B10] border-gray-200 dark:border-gray-700">
        <Link to={{
            "pathname":"/"
        }}>
        <div className="text-2xl font-bold text-gray-900 dark:text-[#3d77d5]">Medium</div>
        </Link>
        <nav className="hidden md:flex space-x-4">
        {nav.map((link,i)=><LinkComponent key={i} to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{link.title}</LinkComponent>)}
        <Link to={{
            "pathname":"/signin"
        }} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sign In</Link>
        </nav>
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 dark:text-[#3d77d5] transition-colors duration-300"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    </header>

    <main className="flex-grow flex items-center justify-center px-6 py-12 dark:bg-[#0A0B10]">
        <div className="max-w-4xl w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Human stories & ideas
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A place to read, write, and deepen your understanding
            </p>
            <Link
            to={{
                pathname: '/signup',
            }}
            className="inline-block bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
            >
            Get started
            </Link>
        </div>
    </main>

    <footer className="py-4 px-6 border-t dark:bg-[#0A0B10]">
        <nav className="flex flex-wrap justify-center space-x-4 text-sm">
        {Bot.map((link,i)=><LinkComponent key={i} to={link.path} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{link.title}</LinkComponent>)}
        </nav>
    </footer>
    </div>
)
}

function LinkComponent({to, className, children}:Linkprops) {
    return <Link to={to} className={className}> {children} </Link>
}