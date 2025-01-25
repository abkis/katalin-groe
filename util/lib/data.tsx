import {
    FaLinkedin,
    FaDumbbell,
    FaPlaneDeparture,
    FaEnvelope,
    FaBookOpen,
  } from 'react-icons/fa6';
  
  export const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/katalin-groe',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:@katalin-groe@gmail.com',
    },
  ] as const
  
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
  