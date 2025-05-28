import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';


const projectsData = [
  {
    id: "1",
    title: "Pharmacy Website",
    description: "A front-end website for a pharmacy",
    detailedDescription: "This front-end pharmacy website offers a user-friendly and modern platform for accessing several essential health-related services. The site is divided into three main sections: Consultation, Parapharmacy, and Journal. Each section is designed to meet visitors' needs efficiently and effectively.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Allows users to schedule pharmaceutical consultations online.",
      "Dynamic catalog of non-medication products (healthcare, hygiene, dietary supplements).",
      "Dedicated section for publishing health articles, prevention tips, medical news, and seasonal recommendations."
    ],
    imageUrl: "/image/healthwave.jpg",
  },
  {
    id: "2",
    title: "Lego Piece Exchange Platform",
    description: "Back-end website built with Node.js",
    detailedDescription: "This back-end website built with Node.js provides an interactive platform for users to exchange construction pieces (such as LEGO). It includes a secure authentication system, dynamic management of available pieces, and features to post and remove exchanges between users.",
    technologies: ["Node.js", "SQL", "HTML/CSS", "JavaScript"],
    features: [
      "Secure authentication with session management, allowing users to log in and out to protect their exchanges.",
      "Users can browse pieces available for exchange, including details such as name, color, quantity, and condition.",
      "Users can post new exchange listings, describing the piece they offer and the piece they are seeking.",
      "A user can remove a listing they posted once the exchange is completed or canceled."
    ],
    imageUrl: "/image/brichange1.png",
  },
   {
    id: "3",
    title: "Inventory Management Desktop Application",
    description: "Desktop application built with C# and WPF for inventory management",
    detailedDescription: "This desktop application, developed using C# and WPF, is designed to efficiently manage inventory. It allows users to track, update, and organize stock items in real-time. The app features a clean, user-friendly interface that provides a seamless experience for adding, removing, and editing inventory items. The system is designed with two levels of access: Manager and Employee. Managers have full control over inventory data, while Employees have restricted access to certain features based on their role.",
    technologies: ["C#", "WPF", "SQL", "MVVM", "XAML"],
    features: [
      "Add, remove, and update inventory items with real-time synchronization.",
      "View detailed product information such as name, quantity, category, and price.",
      "User authentication to restrict access and protect sensitive data.",
      "Search functionality to quickly find items by name or category."
    ],
    imageUrl: "/image/inventaire.png",
  }

];

export default function ProjectDetail({ params }) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center mb-6 text-cyan-400 hover:text-blue-600 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

        {/* Project Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Detailed Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-gray-400 leading-relaxed">{project.detailedDescription}</p>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
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
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-400 leading-relaxed">{feature}</li>
            ))}
          </ul>
        </section>

      </main>
    </>
  );
}

// Static Paths generation for Next.js
export async function generateStaticParams() {
  return projectsData.map(project => ({
    id: project.id,
  }));
}