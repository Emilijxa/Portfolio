"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import project1 from "@/public/assets/proj25.png"
import project2 from "@/public/assets/proj26.png"
import project3 from "@/public/assets/proj7.png"

const projects = [
    {
        id: 1, 
        year: 2024, 
        title: 'Trickr Street',
        description: "a web app helping families locate Halloween trick-or-treating homes, winning first place at a Good Growth hackathon. Built using Next.js, React, and Google Maps API with Supabase authentication, with plans to expand features for profile pages and geographic location tracking",
        image: project1,
    },
    {
        id: 2, 
        year: 2024, 
        title: 'SATellite Prep',
        description: "a visually engaging AI tutor app designed for Year 6 SATs students, providing free, accessible tutoring through an interactive chatbot. Built using React and integrated with Mistralai to deliver personalized support with animated videos and emoji-friendly responses that appeal to young learners.",
        image: project2,
    },
    {
        id: 3, 
        year: 2024, 
        title: 'Atomic-AI driven outreach',
        description: "Atomic is our AI-driven outreach tool that maximizes engagement.",
        image: project3,
    },
];



export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    return(
            <section id="portfolio" className="py-32 text-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                
                    <div>
                    <h2 className="text-6xl font-bold mb-10">Selected <span className="text-blue-400">Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-blue-300 text-lg mb-2">{project.year}</p>
                            <h3 
                                className={`text-3xl font-semibold group-hover:text-blue-500 transition-colors duration-300
                            ${selectedProject.id === project.id ? 'text-blue-300' : ''
                            }`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-blue-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p 
                                className={`text-gray-400 transition-all duration-500 ease-in-out ${
                                    selectedProject.id === project.id ? 'opacity-100' : 'opacity-0'
                                }`}
                                >
                                    {project.description}
                                </p>
                            )}
                     </div>
                ))}

                </div>
        <div className="flex items-center justify-center">
            <Image
                src={selectedProject.image.src}
                alt={selectedProject.title}
                className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                width={selectedProject.title === 'SATellite Prep' ? 250 : 600} 
                height={450}
            />
            </div>
            </div>

        </section>
    )
}