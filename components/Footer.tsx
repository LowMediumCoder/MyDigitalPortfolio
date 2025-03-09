// components/Footer.tsx
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} August Languepin. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/LowMediumCoder/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-gray-300">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer