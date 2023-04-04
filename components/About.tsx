import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-8 md:mx-auto">
        about
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full bg-gradient-to-t from-teal-700 object-cover md:rounded-lg md:w-80 md:h-64 md:mt-14"
        src="avatar.png"
        alt="Avatar Image"
      />
      <div className="-mt-20 space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-2xl mt-14 font-semibold md:mt-32 text-gray-400">
          Hello! I am a self-taught Web Application Developer with a strong
          passion for Frontend Web-Development. My specialization lies in
          creating highly responsive client-side web applications using
          React.js. I am also proficient in the Next.js framework and familiar
          with Node.js, Express.js, and MongoDB.
        </h4>
      </div>
    </div>
  );
}
