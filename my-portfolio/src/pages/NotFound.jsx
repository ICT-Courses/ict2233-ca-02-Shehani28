import React from "react";
import { Link } from "react-router-dom";
import {delay, motion, scale} from "framer-motion";

const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800">

            <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity:0, y: -50}}
            animate={{ opacity:1, y: 0}}
            transition={{ duration:0.8}} >
                404
            </motion.h1>

            <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity:0, y:30}}
            animate={{ opacity:1, y:0}}
            transition={{ delay:0.4, duration:0.8}} >
                Page Not Found
         </motion.h2>

         <motion.p
         className="mb-6 text-center max-w-md"
         initial={{ opacity:0}}
         animate={{ opacity:1}}
         transition={{ delay:0.8, duration:1}} >
            Ooops! The page you are looking for does not exist or has been moved.
         </motion.p>

         <motion.dev 
         initial={{ scale:0.8, opacity:0}}
         animate={{ scale:1, opacity:1}}
         transition={{ delay:1.2, duration:0.6}}>
            <Link to="/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" >
            Go Back Home
            </Link>
         </motion.dev>

        </section>
    );
};

export default NotFound;