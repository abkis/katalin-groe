import {
    FaLinkedin,
    FaDumbbell,
    FaPlaneDeparture,
    FaEnvelope,
    FaBookOpen,
  } from 'react-icons/fa6'
  import boxd from '@/public/boxd.png'
  import atcq from '@/public/atcq.png'
  
  export const interests = [
    {
      name: 'Fitness',
      icon: FaDumbbell,
    },
    {
      name: 'Movies',
      image: boxd,
      href: 'https://letterboxd.com/aross2010/',
    },
    {
      name: 'Music',
      image: atcq,
    },
    {
      name: 'Reading',
      icon: FaBookOpen,
    },
     {
       name: 'Traveling',
       icon: FaPlaneDeparture,
     },
  ] as const
  

  export const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/katalin-groe',
      handle: "Katalin Groe"
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:@katalin.groe@camh.ca',
      handle: "kis.6@osu.edu"
    },
  ] as const
