import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContectMe from "@/components/ContectMe";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // to change the scrollbar install tailwind-scrollbar from webpage
    <div className="bg-[rgb(36,36,36)] z-0 overflow-y-scroll overflow-x-hidden h-screen text-white snap-y snap-mandatory scrollbar-thin scrollbar-track-slate-700/20 scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>Pratap Karmakar</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contect" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
