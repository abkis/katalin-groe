'use client'
import { motion } from 'framer-motion';
import { socials } from './lib/data';
import { RiDownloadLine } from 'react-icons/ri';
import Button from "./components/ui/button";
import Link from 'next/link';

export default function Intro() {

  const renderedSocials = socials.map(({name, icon: Icon, href}) => {
    return (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-white/50 hover:text-sjsu-gold transition-all"
      >
        <Icon className="text-2xl" />
      </a>
    )
  })

  return (
    <>
      <div>
        <h1 className="md:text-2xl text-xl sm:mb-6 mb-3 font-light tracking-wider text-gray-400">
          Welcome! I&apos;m
        </h1>
        <h1 className="md:text-7xl text-5xl font-bold sm:mb-4 mb-1 flex items-end">
          Katalin Groe{' '}
          <span className="flex items-center gap-2 ml-4 -translate-y-1.5">
            {renderedSocials}
          </span>
        </h1>
        <h2 className="lg:text-3xl text-2xl font-semibold text-white/50 mb-8">
          Research Assistant 2 at <a href="https://github.com/aross2010/web-portfolio" target="_blank" className="text-sjsu-gold">CAMH</a>
        </h2>
      </div>
      <p>
        I'm currently working as a Research Assistant 2 at the  
          <Link
            href="https://bbp.lab.utoronto.ca"
            className="hover:text-sjsu-gold transition-colors font-semibold"
            target="_blank"
          >
            Brain, Body, and Perception lab 
          </Link>
          I'm passionate about everything!! Yay.
      </p>
      <div>
        <Button
          href="/Katalin Groe CV.pdf"
          className="md:text-lg group"
        >
          CV
          <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
    </>
  )
}