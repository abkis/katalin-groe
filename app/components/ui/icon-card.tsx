import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { IconType } from 'react-icons'

type IconCardProps = {
  name: string
  image?: StaticImageData | null
  icon?: IconType | null
  href?: string
  style?: React.CSSProperties
}

export default function IconCard({
  name,
  icon: Icon,
  image,
  href,
  style
}: IconCardProps) {
  const cardContent = (
    <Fragment>
      {image ? (
        <Image
          src={image}
          alt={name}
          className="h-10 w-auto"
          style={style} 
        />
      ) : (
        Icon && <Icon className="h-10 w-auto text-sjsu-gold"  style={style} />
      )}

      <p className="text-white/50 rounded-lg font-medium text-center text-sm">
        {name}
      </p>
    </Fragment>
  )

  return href ? (
    <Link
      href={href}
      target="_blank"
      className="flex flex-col items-center gap-3 p-2 rounded-lg bg-slate-700/25 hover:bg-slate-600/25 transition-all"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="flex flex-col items-center gap-3 p-2 rounded-lg bg-slate-700/25 transition-all">
      {cardContent}
    </div>
  )
}
