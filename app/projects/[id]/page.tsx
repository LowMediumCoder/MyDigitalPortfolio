// app/projects/[id]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getProjectById } from '@/data/projects'

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  // Find the project by ID
  const project = await getProjectById(params.id)
  
  // Handle case where project is not found
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="text-lg text-white-600 mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Back to Projects
        </Link>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-gray-600 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{project.title}</span>
        </nav>
        
        {/* Project Header */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Banner */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        {/* Project Links */}
        <div className="flex gap-4 mb-8">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <i className="fab fa-github"></i>
              View Code
            </a>
          )}
        </div>
        
        {/* Project Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="prose prose-lg max-w-none text-white-700">
            {project.longDescription && project.longDescription.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Challenges and Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <ul className="space-y-2">
              {project.challenges && project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-white-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <ul className="space-y-2">
              {project.solutions && project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-white-700">{solution}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        
        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.technologies && Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <ul className="space-y-1">
                  {techs.map((tech, techIndex) => (
                    <li key={techIndex} className="text-white-700">• {tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Navigation to other projects */}
        <div className="border-t pt-8">
          <Link href="/projects" className="text-blue-600 hover:underline flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  )
}