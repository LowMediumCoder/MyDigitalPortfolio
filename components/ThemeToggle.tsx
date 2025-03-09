// components/ThemeToggle.tsx
"use client"
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  useEffect(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])
  
  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <i className="fas fa-sun text-yellow-500"></i>
      ) : (
        <i className="fas fa-moon text-gray-700"></i>
      )}
    </button>
  )
}

export default ThemeToggle