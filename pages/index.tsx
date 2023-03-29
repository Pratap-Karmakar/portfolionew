import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] z-0 overflow-scroll h-screen text-white snap-y snap-mandatory'>
      <Head >
        <title>Pratap KArmakar</title>
      </Head>

      {/* Header */}

      <Header />
      
      {/* Hero */}

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* About */}
      <section id='sbout' className='snap-center'>
        <About/>
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
