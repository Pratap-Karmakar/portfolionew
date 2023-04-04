import Image from "next/image";
import React from "react";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import react from "../public/react.png";
import redux from "../public/redux.png";
import nextjs from "../public/nextjs.png";
import nodejs from "../public/nodejs.png";
import expressjs from "../public/expressjs.png";
import mongodb from "../public/mongodb.png";
import bootstrap from "../public/bootstrap.png";
import tailwind from "../public/tailwind.png";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-8 md:mx-auto">
        skills
      </h3>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-wrap gap-16 justify-center items-center my-6 max-w-lg mx-auto  md:mt-44"
      >
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={html} alt="Html" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">HTML</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={css} alt="Css" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">CSS</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={javascript} alt="JavaScript" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">
            JavaScript
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={react} alt="React" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">React</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={redux} alt="Redux" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600  font-semibold">Redux</h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={nextjs} alt="NextJs" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold ">NextJs</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={bootstrap} alt="Bootstrap" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">
            Bootstrap
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={tailwind} alt="Tailwind" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">Tailwind</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={nodejs} alt="NodeJS" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">NodeJs</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={expressjs} alt="ExpressJS" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">
            ExpressJs
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14">
            <Image src={mongodb} alt="MongoDB" />
          </div>
          <h3 className="pt-1 text-sm text-gray-600 font-semibold">MongoDB</h3>
        </div>
      </motion.div>
    </div>
  );
}
