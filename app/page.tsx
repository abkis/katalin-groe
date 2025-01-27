import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
import { RiDownloadLine } from "react-icons/ri";
import Button from "./components/ui/button";
import { socials } from "../util/lib/data";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const renderedSocials = socials.map(({ name, icon: Icon, href }) => {
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
    );
  });

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-500 overflow-hidden">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <nav className="absolute top-8">
        <ul className="flex items-center justify-center gap-4" key={0}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 hover:text-zinc-900 duration-500"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 p-8 max-w-6xl">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-light tracking-wider text-gray-700 mb-3">Hi! I&apos;m</h1>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 flex items-end">
            Katalin Groe
            <span className="flex items-center gap-2 ml-4">
              {renderedSocials}
            </span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
            Research Assistant 2 at <a
              href="https://bbp.lab.utoronto.ca"
              target="_blank"
              style={{color: "#5A2A83"}}
            >
              Brain, Body, and Perception lab 
            </a>
            &nbsp;at <span className="text-sjsu-gold">CAMH</span>
          </h2>
          <p className="text-gray-800 text-lg mb-6">
            I&apos;m currently a Research Assistant 2 at CAMH. I&apos;m interested in everything!
          </p>
          
          <Button
            href="/files/Katalin Groe CV.pdf"
            className="md:text-lg group "
          >
            Resume
            <RiDownloadLine className="transition-transform group-hover:translate-y-1" />
          </Button>
        </div>

        {/* Right Column */}
        <div className="relative w-full lg:h-auto aspect-square lg:aspect-auto">
          <Image
            src="/images/KatalinGroe.jpg"
            alt="Katalin Groe"
            className="rounded-xl shadow-xl shadow-slate-900 brightness-90"
            fill
            style={{ objectFit: "revert-layer"}}
          />
        </div>
      </div>
    </div>
  );
}
