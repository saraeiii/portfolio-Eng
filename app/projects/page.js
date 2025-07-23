import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    id: "1",
    title: "Pharmacy Website",
    description: "A front-end website for a pharmacy",
    imageUrl: "/image/healthwave.jpg",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "2",
    title: "Lego Piece Exchange Platform",
    description: "A platform for exchanging Lego pieces",
    imageUrl: "/image/brique.png",
    technologies: ["Node.js", "JavaScript", "HTML/CSS"]
  },
   {
    id: "3",
    title: "Inventory Management Desktop Application",
    description: "A desktop application designed for efficient inventory management.",
    imageUrl: "/image/warehouse.jpg",
    technologies: ["C#", "WPF"]
  },
  {
    id : "4",
    title: "Digital accessibility audit website",
    description: "A website dedicated to digital accessibility audits, helping websites comply with WCAG standards and ensuring they are usable by everyone, including people with disabilities.",
    imageUrl :"/image/banner.jpg",
    technologies: ["Node.js", "React", "JavaScript"]
 }

];

export default function ProjectsList() {
  return (
    <>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map(project => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group block"
              aria-label={`View details of ${project.title}`}
            >
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                {/* Project Details */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}