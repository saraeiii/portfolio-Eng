/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <title>Sara&apos;s Portfolio - Web Developer</title>

      <main className="flex flex-col gap-[32px] items-center justify-center flex-1 py-12 px-6" aria-labelledby="main-content">
        <Image 
          alt="Sara's professional headshot" 
          className="rounded-full shadow-xl border-4 border-white"
          src="/portfolio-Eng/image/headShot1.jpg"
          width={300} 
          height={300} 
          priority 
        />
        
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mt-6" role="heading" aria-level="1">
  Hi, I&apos;m Sara!
</h1>
        
        <p className="text-center sm:text-left mt-4 text-lg sm:w-2/3">
          I am a Computer Programming graduate with a strong passion for modern technologies and web development. With expertise in React, Next.js, and Node.js, I enjoy creating dynamic and responsive applications. I am driven by the desire to continually grow and tackle new challenges in the tech industry.
        </p>
        
        <h2 id="skills" className="mt-8 text-xl font-medium" aria-labelledby="skills">
          Skills & Expertise:
        </h2>
        
          <ul className="list-disc pl-6 space-y-2 sm:w-2/3" aria-labelledby="skills">
          <li><strong>Front-End Development:</strong> Proficient in React, Next.js, HTML, CSS, and JavaScript for building user-friendly interfaces.</li>
          <li><strong>Back-End Development:</strong> Experience with Node.js, Express, and SQL databases (MySQL, SQLite) to create robust back-end systems.</li>
          <li><strong>Software Development:</strong> Strong skills in C#, Java, and Python for software solutions, with experience in WPF and .NET.</li>
          <li><strong>Version Control & Collaboration:</strong> Experienced in using Git/GitHub for version control and Agile methodologies (Scrum, Kanban) for project management.</li>
          <li><strong>Web Accessibility:</strong> Knowledge of WCAG and ARIA standards to build accessible websites, ensuring inclusivity for all users.</li>
        </ul>

        
      </main>

    </div>
  );
}
