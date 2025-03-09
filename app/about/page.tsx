// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <i className="fas fa-user-circle text-7xl text-gray-500"></i>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">August Languepin</h2>
            <h3 className="text-xl text-white-700 mb-4">Front-End Developer</h3>
            <p className="text-lg text-white-600 mb-6">
              I'm a passionate front-end developer with a strong focus on creating intuitive 
              and responsive user interfaces. With 3+ years of experience building web applications, 
              I bring creativity and technical expertise to every project.
            </p>
            <p className="text-lg text-white-600 mb-6">
              My journey in web development began during my high school career, where I started teaching myself HTML and CSS.
              I then went on to study Computing at Technological University of Dublin, where I further developed my skills in web development.
              I started using Bootstrap CSS and JavaScript to create more interactive and responsive websites. Although I don't have any work experience at the moment, 
              I am currently working on a few projects to build up my portfolio. I am still trying to work on my Javascript skills and learning new frameworks like Next.js.
            </p>
            <p className="text-lg text-white-600">
              When I'm not coding, you can find me chilling with my mates online on Discord or watching Twitch streams. Or maybe even playing some games.
            </p>
          </div>
        </div>
        
        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Not current Work Experiences at the moment</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">#</h3>
                <span className="text-white-600">#</span>
              </div>
              <h4 className="text-lg text-white-700 mb-2">#</h4>
              <ul className="list-disc pl-5 text-white-600 space-y-1">
                <li>#</li>
                <li>#</li>
                <li>#</li>
                <li>#</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <span className="text-white-600">#</span>
              </div>
              <h4 className="text-lg text-white-700 mb-2">#</h4>
              <ul className="list-disc pl-5 text-white-600 space-y-1">
                <li>#</li>
                <li>#</li>
                <li>#</li>
                <li>#</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between mb-2">
              <h3 className="text-xl font-semibold">Bachelor of Science in Computing</h3>
              <span className="text-white-600">2020</span>
            </div>
            <h4 className="text-lg text-white-700 mb-2">Technological University of Dublin, Dublin Ireland</h4>
            <p className="text-white-600">
              Focused on primarly on software development and computer science fundamentals. 
            </p>
          </div>
        </section>
        
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { category: "Languages", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"] },
              { category: "Frameworks & Libraries", skills: ["Boostrap CSS", "Tailwind CSS", "Next.js"] },
              { category: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
              { category: "Databases", skills: ["MongoDB", "MySQL", "MariaDB"] },
            ].map((skillGroup, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{skillGroup.category}</h3>
                <ul className="space-y-1">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-white-600">• {skill}</li>
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