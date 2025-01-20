import Header from '../components/ui/header';
import { interests } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import IconCard from '../components/ui/icon-card';
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';

export default function About() {
  const { ref } = useSectionInView('About', 0.5)

  const renderedInterests = interests.map((interest, i) => {
    return (
      <motion.li
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
        viewport={{ once: true }}
        key={interest.name}
      >
        <IconCard {...interest} />
      </motion.li>
    )
  })

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24"
    >
      <Header>About Me</Header>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
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
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="justify-center items-center p-4 lg:flex hidden"
        >
          <Image
            src="../public/KatalinGroe.png"
            alt="Katalin Groe"
            className="rounded-xl shadow-xl shadow-slate-900 lg:h-72 h-56 w-auto brightness-90"
          />
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold tracking-wider text-gray-400 mb-4"
      >
        Interests
      </motion.h2>
      <ul className="grid lg:grid-cols-8 grid-cols-4 gap-2">
        {renderedInterests}
      </ul>
    </section>
  )
}
