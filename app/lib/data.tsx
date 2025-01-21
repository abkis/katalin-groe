import {
    FaLinkedin,
    FaDumbbell,
    FaPlaneDeparture,
    FaEnvelope,
    FaBookOpen,
  } from 'react-icons/fa6';
  
  export const interests = [
    {
      name: 'Fitness',
      icon: FaDumbbell,
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
