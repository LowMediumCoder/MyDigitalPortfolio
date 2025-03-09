// app/about/page.tsx
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/profile-placeholder.jpg" 
                alt="Your Name" 
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Your Name</h2>
            <h3 className="text-xl text-gray-700 mb-4">Front-end Developer</h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate front-end developer with a strong focus on creating intuitive 
              and responsive user interfaces. With 3+ years of experience building web applications, 
              I bring creativity and technical expertise to every project.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in web development began during my Computer Science studies, where I 
              discovered my passion for bridging the gap between users and technology through 
              thoughtful design and clean code.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, 
              or experimenting with new cooking recipes.
            </p>
          </div>
        </div>
        
        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Senior Front-end Developer</h3>
                <span className="text-gray-600">2021 - Present</span>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">Company Name, Location</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Led the front-end development of the company's flagship product</li>
                <li>Implemented responsive designs and improved page load times by 40%</li>
                <li>Collaborated with UX/UI designers to create intuitive user experiences</li>
                <li>Mentored junior developers through code reviews and pair programming</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <span className="text-gray-600">2019 - 2021</span>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">Previous Company, Location</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Developed and maintained client websites using React and WordPress</li>
                <li>Implemented responsive designs ensuring cross-browser compatibility</li>
                <li>Integrated third-party APIs and payment gateways</li>
                <li>Optimized website performance and SEO</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between mb-2">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <span className="text-gray-600">2015 - 2019</span>
            </div>
            <h4 className="text-lg text-gray-700 mb-2">University Name, Location</h4>
            <p className="text-gray-600">
              Graduated with honors. Focused on web development and user interface design.
            </p>
          </div>
        </section>
        
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { category: "Languages", skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"] },
              { category: "Frameworks & Libraries", skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"] },
              { category: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "AWS"] },
              { category: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"] },
              { category: "Other", skills: ["Responsive Design", "RESTful APIs", "GraphQL", "Agile/Scrum", "UI/UX Principles"] }
            ].map((skillGroup, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{skillGroup.category}</h3>
                <ul className="space-y-1">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600">• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}