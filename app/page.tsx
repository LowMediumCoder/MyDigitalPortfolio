// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProjects } from '@/data/projects'

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">August Languepin</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white-700">
            Front-end Developer
          </h2>
          <p className="text-lg text-white-600 mb-6">
            I create responsive, user-friendly web experiences with clean, efficient code.
          </p>
          <div className="flex space-x-4">
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              View My Projects
            </Link>
            <Link href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
            {/* Replace with your own image */}
            <Image 
              src="/profile-placeholder.jpg" 
              alt="August Languepin" 
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-600" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-600" },
        { 
          name: "Tailwind CSS", 
          customIcon: true, 
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          color: "text-blue-400" 
        },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
        { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
        { 
          name: "Symfony PHP", 
          customIcon: true, 
          iconUrl: "https://symfony.com/logos/symfony_black_03.svg",
          color: "text-black" 
        },
        { name: "Next.js", icon: "fab fa-js-square", color: "text-black" },
        { 
          name: "TypeScript", 
          customIcon: true, 
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
          color: "text-blue-600" 
        },
        { name: "GitHub", icon: "fab fa-github", color: "text-gray-800" },
          ].map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4 text-5xl">
            {skill.customIcon ? (
          <img 
            src={skill.iconUrl} 
            alt={skill.name}
            className="h-12 w-12"
          />
            ) : (
          <i className={`${skill.icon} ${skill.color}`}></i>
            )}
          </div>
          <h3 className="font-medium text-gray-900">{skill.name}</h3>
        </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition hover:shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-800 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">{tag}</span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">+{project.tags.length - 3}</span>
                )}
              </div>
              <div className="flex justify-between">
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
                <div className="space-x-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}