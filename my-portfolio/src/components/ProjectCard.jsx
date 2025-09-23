import React from "react";

const ProjectCard = ({ title, description, image, github, demo}) => {
    return (
        <div className="bg-white shadow=lg rounded-lg overflow-hidden hover:scale-105 transition transform">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex space-x-4">
                    {github && (
                    <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900" >
                        GitHub
                    </a>
                    )}
                    {demo && (
                    <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900" >
                       Live Demo
                    </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;