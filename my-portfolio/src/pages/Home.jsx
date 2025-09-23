import React from "react";
import {motion} from "framer-motion";
import heroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-blue-100 p-8 flex flex-col lg:flex-row items-center justify-between">

      <div className="flex-1 text-left">
        <motion.h1
        className="text-5xl font-bold mb-5"
        initial={{opacity:0, y:-50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}} >
          Hi, I'm Shehani
        </motion.h1>

        <motion.p
        className="text-xl mb-10 leading-relaxed"
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.4, duration:0.8}} >
          Frontend Developer <br></br>
          Undergraduate, IT Department, University Of Sri Jayewardenepura
        </motion.p>

        <motion.div
        className="flex space-x-4"
        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1, scale:1}}
        transition={{delay:0.8, duration:0.6}} >
          <a href="/Projects" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 trnsition" >
          My Projects
          </a>
          <a href="/Contact" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 trnsition" >
          Contact Me
          </a>
        </motion.div>
      </div>
      <motion.div
      className="flex-1 flex justify-center lg;justify-end mt-8 lg:mt-0"
      initial={{opacity:0, x:100}}
      animate={{opacity:1, x:0}}
      transition={{delay:1, duration:0.8}} >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img 
          src={heroImage}
          alt="Shehani"
          className="w-60 h-60 object-cover rounded-md" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
