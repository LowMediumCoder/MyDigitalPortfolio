// components/AnimatedSection.tsx
"use client"
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1
      }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedSection