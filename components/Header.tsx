import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'



type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center p-5'>
            <motion.div
            initial={{
                scale:0.5,
                opacity: 0,
                x:-500 
            }} 
            animate={{
                opacity:1,
                scale:1,
                x:0
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center'>
                 <SocialIcon 
                 url="https://github.com/Pratap-Karmakar"
                 fgColor='gray'
                 bgColor='transparent'
                 />
                 <SocialIcon 
                 url="https://github.com/Pratap-Karmakar"
                 fgColor='gray'
                 bgColor='transparent'
                 />
                 <SocialIcon 
                 url="https://github.com/Pratap-Karmakar"
                 fgColor='gray'
                 bgColor='transparent'
                 />
            </motion.div>


            <motion.div
            initial={{
                scale:0.5,
                opacity: 0,
                x:+500 
            }} 
            animate={{
                opacity:1,
                scale:1,
                x:0
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
            className='cursor-pointer'
                 network='email'
                 fgColor='gray'
                 bgColor='transparent'
                 />
                 {/* hidden means it is always being hidden but in medium screen it will be visible */}
                 <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </motion.div>
        </header>
    )
}
