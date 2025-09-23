import React from "react";
import styles from "../style/About.module.css";
import profile from "../assets/Page.jpg";
import {motion} from "framer-motion";

const About = () => {
  return (
              <section className={`${styles.contactContainer} w-full min-h-screen bg-blue-100 p-8`}>
           <motion.h1
            className="text-4xl font-bold text-center mb-8 mt-12"
            initial={{ opacity:0, y:50}}
            animate={{ opacity:1, y:0}}
            transition={{ duration:0.8}} >
              About Me
            </motion.h1>

        <p className="text-lg mb-6 leading-relaxed text-gray-800">
          I am a second year undergraduate at
         University of Sri Jayewardenepura
          pursing a BSc(Hons) in Information Technology.
          In addition, I am completing an English Diploma
          to improve my communication skills.
       </p>

       <h2 className="text-2xl font-semibold mb-3 text-gray-900">Technical Skills</h2>
       <ul className="list-disc list-inside mb-6 text-gray-800">
        <li>Frontend: React, HTML, CSS, TailwindCSS, JavaScript</li>
        <li>Backend basics: C#, Java, Node.js</li>
        <li>Databases: SQL Server, MySQL</li>
        <li>Tools: Git, GitHub, VS Code, Figma</li>
       </ul>

       <h2 className="text-2xl font-semibold mb-3 text-gray-900">Soft Skills</h2>
       <ul className="list-disc list-inside mb-6 text-gray-800">
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem Solving</li>
        <li>Time Management</li>
        <li>Adaptability</li>
       </ul>

       <div className=" flex justify-center lg:justify-end mt-8 lg:mt-0">
               <div className=" -mt-90 mr-30">
                 <img 
                 src={profile}
                 alt="Shehani"
                 className=" object-cover rounded-lg border-none w-80 h-80"
                  />
    </div>
    </div>
    </section>
    
  );
};

export default About;