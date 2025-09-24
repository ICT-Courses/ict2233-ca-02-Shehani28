import React from "react";
import {motion} from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Project1 from "../assets/Weather.png";
import Project2 from "../assets/Coffee.png";
import Project3 from "../assets/Furniture.png";


const projects = [
    {
        id:1,
        title: "Weather Forecast Site",
        description: "Weather forecasting Desktop app using OpenWeather API and C#.",
        image: Project1,
        github:"https://github.com/ICT-Courses/application-development-ca1-Shehani28",
        demo: "",
    },
    {
        id:2,
        title: "Coffee Menu Website",
        description: "A simple and stylish coffee shop menu website built with React+js",
        image: Project2,
        github: "https://github.com/ICT-Courses/ict2233-ca-01-Shehani28",
        demo: "",
    },
    {
        id:3,
        title: "Furniture Hub Website",
        description: "An e-commerce style furniture website showcasing modern designs.",
        image: Project3,
        github: "",
        demo: "https://drive.google.com/file/d/1MGukgvHDIKE4DkX2jfwEx0vvqHBT6hyv/view?usp=drivesdk",
    },
];

const Projects = () => {
     return (
        <section className="w-full min-h-screen bg-blue-100 p-10">
            <motion.h1
            className="text-4xl font-bold text-center mb-8 mt-12"
            initial={{ opacity:0, y:50}}
            animate={{ opacity:1, y:0}}
            transition={{ duration:0.8}} >
                My Projects
            </motion.h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    demo={project.demo} />
                ))}
            </div>
        </section>
     );
};

export default Projects;