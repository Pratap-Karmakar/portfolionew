import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import mine from '../public/mine.png'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi! I'm Pratap Karmakar",
            "I'm a Web Developer",
            "< eat-code-sleep-repeat />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-5 justify-center items-center text-center overflow-hidden '>
            <BackgroundCircles />
            <Image src={mine} alt="My Image" className='h-16 w-16 relative mx-auto' />
            

                <div className='z-20'>
                    <h2 className='uppercase text-sm text-gray-500 pb-2 -mt-3 tracking-[15px]  ml-2'>web developer</h2>
                    <h3 className='text-2xl  lg:text-4xl font-semibold mx-auto'>
                        <span className=''>{text}</span>
                        <Cursor cursorColor='#F7AB0A' />
                    </h3>
                    <div className='pt-5'>
                        <Link href="#about">
                        <button className='heroButton'>About</button>
                        </Link>
                        <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                        </Link>
                        <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}