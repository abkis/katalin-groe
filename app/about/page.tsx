import { interests } from '../../util/lib/data';
import Image from 'next/image'
import IconCard from '../components/ui/icon-card';

export default function About() {
  const renderedInterests = interests.map((interest, i) => {
    return (
      <li key={interest.name}>
        <IconCard {...interest} />
      </li>
    )
  })

  return (
    <div>
      <h1>About Me</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
        <p>
        Hi! I'm Katalin Groe, currently working as a Research Assistant 2 at the  
          <a
            href="https://bbp.lab.utoronto.ca"
            target="_blank"
          >
            Brain, Body, and Perception lab 
          </a>
           at CAMH. I also volunteer at the 
          <a
            href="https://nefros.net"
            target="_blank"
          >
            University Health Network
          </a>
           under the supervision of Dr. István Mucsi. 
          <br/>
          <br/>
          I received my Bachelor of Science degree in Psychology and Health Sciences 
          from the University of Toronto, and am passionate about advancing our understanding 
          of mental health disorders in order to support clinical outcomes. You can download my resume 
          <a
            href="../public/Katalin Groe Resume.pdf"
            download="Katalin Groe Resume.pdf"
          >
           here
          </a>
          <br/>
          <br/>
          In my spare time I enjoy reading fantasy novels, hiking, dancing, and playing the guitar.
        </p>
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
      <h2
        className="text-2xl font-semibold tracking-wider text-gray-400 mb-4"
      >
        Interests
      </h2>
      <ul className="grid lg:grid-cols-8 grid-cols-4 gap-2">
        {renderedInterests}
      </ul>
    </div>
  )
}