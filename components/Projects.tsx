import { motion, motionValue } from "framer-motion";
import React from "react";
import Image from "next/image";


type Props = {};

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1.5
        }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pt-11 md:pt-0">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-700/20 scrollbar-thumb-[#F7AB0A]">
                {projects.map((project, index) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  h-screen md:mt-14 md:-mb-16 mt-0">

                        <motion.img
                        initial={{
                            opacity:0,
                            y:-300,
                        }}
                        whileInView={{
                            opacity:1,
                            y:0
                        }}
                        transition={{
                            duration:1.2
                        }} 
                        src="https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg" alt="" className="h-[150px] w-[200px]" />
                        <div className="space-y-10 px-0 md:px-10 max-w-4xl">
                            <h4 className="md:text-2xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">Case Study {index + 1} of {projects.length}  
                                </span>
                                <span className="pl-2">
                                : Some Projects
                                </span>
                            </h4>
                        <p className="text-center md:text-lg md:text-left tracking-widest">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae officiis animi perspiciatis tenetur modi libero facilis eum? Consequatur nobis rerum delectus totam voluptatem deleniti temporibus veritatis! Debitis, omnis soluta!
                        </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12 md:-skew-y-6"></div>
        </motion.div>
    );
}
