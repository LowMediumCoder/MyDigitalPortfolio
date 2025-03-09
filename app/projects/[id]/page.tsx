// app/projects/[id]/page.tsx
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
        <p className="text-lg text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
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
        <nav className="flex mb-6 text-white-600 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-white-900">{project.title}</span>
        </nav>
        
        {/* Project Header */}
        <div className="mb-8 p-6 rounded-lg">
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
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center justify-center">
          <div className="w-32 h-32 bg-blue-400 rounded-lg mb-4 flex items-center justify-center">
            <i className="fas fa-laptop-code text-5xl text-white"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
          <p className="text-gray-600">Project Preview</p>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-600 opacity-70"></div>
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
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Overview</h2>
          <div className="prose prose-lg max-w-none text-white-900 p-6 rounded-lg">
            {project.longDescription?.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </section>
        
        {/* Screenshots - Using better placeholders */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(project.screenshots.length)].map((_, index) => (
                <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-gray-400 rounded-lg mb-3 flex items-center justify-center">
                    <i className="fas fa-image text-5xl text-white"></i>
                  </div>
                  <p className="text-white-600 font-medium">Screenshot {index + 1}</p>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-600 opacity-70"></div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Challenges and Solutions */}
        {(project.challenges || project.solutions) && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {project.challenges && project.challenges.length > 0 && (
              <section className="p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 text-lg">•</span>
                      <span className="text-white-900 text-base leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            
            {project.solutions && project.solutions.length > 0 && (
              <section className="p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Solutions</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1 text-lg">•</span>
                      <span className="text-white-900 text-base leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
        
        {/* Technologies Used */}
        {project.technologies && Object.keys(project.technologies).length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">Technologies Used</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="p-5 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-white-900">{category}</h3>
                  <ul className="space-y-2">
                    {techs.map((tech, techIndex) => (
                      <li key={techIndex} className="text-white-800 flex items-start">
                        <span className="text-white-500 mr-2">•</span> 
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Navigation to other projects */}
        <div className="border-t pt-8">
          <Link href="/projects" className="text-blue-600 hover:underline flex items-center gap-2">
            <i className="fas fa-arrow-left"></i>
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  )
}