import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import avatar from '../public/avatar.png'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-8 md:mx-auto'>about</h3>

            <motion.img
            initial={{
                x:-200,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:1.5
            }}
            className='-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full bg-gradient-to-t from-teal-700 object-cover md:rounded-lg md:w-80 md:h-64 md:mt-14'
            src="avatar.png" alt="Avatar Image"/>
            <div className='-mt-20 space-y-10 px-0 md:px-10'>
                <h4 className='text-xl md:text-2xl mt-14 font-semibold md:mt-32 text-gray-400'>
                    Hi! I am a self-thought passionate Web Application Developer, specialized in Frontend Web-Development, As a Frontend Developer I can create perfectly responsive client side web application and give them life using React.js also I'm very comfortable with Next.js framework as well. I'm familiar with Node.js, Express.js and MongoDB.
                </h4>
            </div>
        </div>
    )
} 