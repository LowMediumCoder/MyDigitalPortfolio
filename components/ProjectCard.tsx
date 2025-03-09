// components/ProjectCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  id: string | number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ id, title, description, image, tags, demoUrl, githubUrl }: ProjectProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition hover:shadow-lg border border-gray-200">
      <div className="relative h-48">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-800 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              GitHub
            </a>
          )}
          <Link 
            href={`/projects/${id}`} 
            className="text-blue-600 font-medium hover:underline ml-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard