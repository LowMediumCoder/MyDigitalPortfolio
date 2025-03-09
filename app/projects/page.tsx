// app/projects/page.tsx
import ProjectCard from '@/components/ProjectCard'
import { getAllProjects } from '@/data/projects'

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">My Projects</h1>
      <p className="text-lg text-white-800 mb-8">
        Here are some of the projects I've worked on. Each project represents different 
        challenges and learning experiences.
      </p>
      
      <div className="flex flex-wrap bg-gray-50 p-6 rounded-lg">
        {projects.map(project => (
          <div key={project.id} className="w-full md:w-1/2 p-4 flex">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}