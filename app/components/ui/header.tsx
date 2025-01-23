import { motion } from 'framer-motion'

type HeaderProps = {
  children: React.ReactNode
  animateOpacity?: boolean
  className?: string
}

export default function Header({
  children,
  animateOpacity,
  className,
}: HeaderProps) {
  return (
    <h1>
      {children}
    </h1>
  )
}