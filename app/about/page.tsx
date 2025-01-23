import { interests } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import IconCard from "../components/ui/icon-card";
import { motion } from 'framer-motion';
import Header from '../components/ui/header';

export default function About() {

  const renderedInterests = interests.map((interest, i) => {
    return (
      <li>
        <IconCard {...interest} />
      </li>
    )
  })

  return (
    <div>
      <Header>About Me</Header>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <p>
          Hi! I'm Katalin Groe, currently working as a Research Assistant 2 at the  
          <Link
            href="https://bbp.lab.utoronto.ca"
            className="hover:text-sjsu-gold transition-colors font-semibold"
            target="_blank"
          >
            Brain, Body, and Perception lab 
          </Link>
           at CAMH. I also volunteer at the 
          <Link
            href="https://nefros.net"
            className="hover:text-sjsu-gold transition-colors font-semibold"
            target="_blank"
          >
            University Health Network
          </Link>
           under the supervision of Dr. István Mucsi. 
          <br/>
          <br/>
          I received my Bachelor of Science degree in Psychology and Health Sciences 
          from the University of Toronto, and am passionate about advancing our understanding 
          of mental health disorders in order to support clinical outcomes. You can download my resume 
          <Link
            href="../public/Katalin Groe Resume.pdf"
            download="Katalin Groe Resume.pdf"
          >
           here
          </Link>
          <br/>
          <br/>
          In my spare time I enjoy reading fantasy novels, hiking, dancing, and playing the guitar.
        </p>
        <div>
          <Image
            src="../public/KatalinGroe.png"
            alt="Katalin Groe"
            className="rounded-xl shadow-xl shadow-slate-900 lg:h-72 h-56 w-auto brightness-90"
          />
        </div>
      </div>
      <h2>
        Interests
      </h2>
      <ul className="grid lg:grid-cols-8 grid-cols-4 gap-2">
        {renderedInterests}
      </ul>
    </div>
  )
}