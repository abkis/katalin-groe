import { interests } from '../../util/lib/data';
import Image from 'next/image'
import IconCard from '../components/ui/icon-card';

export default function About() {
  const renderedInterests = interests.map((interest, i) => {
    return (
      <li key={interest.name}>
        <IconCard {...interest} style={{ color: "var(--icon-color)" }}/>
      </li>
    )
  })

  return (
    <div className="relative pb-16" >
    <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32" style={{paddingTop: "25rem"}}>
      <div className="lg:mx-0">
        <h1 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" style={{color: "var(--text-color)"}}>
        About Me
        </h1>
        <div
            className="w-[70%] h-px bg-zinc-800 opacity-80"
            style={{ marginBottom: "5px", marginLeft: "auto", marginRight: "auto" }}
            />
    {/* LHS Grid */}
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mb-8">
    <div>
    <p className="text-lg">
        Hi! I'm Katalin Groe, currently working as a Research Assistant 2 at the&nbsp; 
          <a
            href="https://bbp.lab.utoronto.ca"
            target="_blank"
          >
            Brain, Body, and Perception lab 
          </a>
            &nbsp;at CAMH. I also volunteer at the&nbsp;
          <a
            href="https://nefros.net"
            target="_blank"
          >
            University Health Network
          </a>
          &nbsp;under the supervision of Dr. István Mucsi. 
          <br/>
          <br/>
          I received my Bachelor of Science degree in Psychology and Health Sciences 
          from the University of Toronto, and am passionate about advancing our understanding 
          of mental health disorders in order to support clinical outcomes. You can download my resume&nbsp; 
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
        <div>
        <h2 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" 
            style={{color: "var(--text-color)", marginTop: "5px"}}>
            Interests
            </h2>
            <div
                className="w-[70%] h-px bg-zinc-800 opacity-80"
                style={{ marginBottom: "5px", marginLeft: "auto", marginRight: "auto" }}
                />
        <ul className="grid lg:grid-cols-2 grid-cols-1 gap-2 text-lg">
        {renderedInterests}
        </ul>
        </div>
    </div>
    
    {/*RHS Grid */}
    <div className="relative w-full lg:h-auto aspect-square lg:aspect-auto" 
        style={{paddingTop: "25px"}}>
      <Image
        src="/images/KatalinGroe.jpg"
        alt="Katalin Groe"
        className="rounded-xl shadow-xl shadow-slate-900 brightness-90"
        layout="responsive"
        width={410}  // Specify width based on aspect ratio
        height={410} // Specify height for aspect ratio
        style={{ objectFit: "cover"}}
      />
    </div>
    </div>
  </div>
  </div>
    </div>
  )
}