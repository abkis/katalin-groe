import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Button from './button'
import { Research } from '@/util/types'
import PdfPreview from './PdfPreview'

type ProjectProps = {
  project: Research
}

export default function ProjectCard({ project }: ProjectProps) {
  const { date, title, abstract, citation, file, link } = project
  return (
    <div className="rounded-lg bg-slate-700 flex flex-col min-h-full flex-grow">
      <a href={file} download>
      <PdfPreview file="/files/TrajectoryOfAnxiety.pdf" />
    </a>
      <div className="p-4 flex-col flex flex-grow">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-2 mb-6">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
        </div>
        <p className="text-gray-400 font-medium mb-2">{abstract}</p>
        <div
          className={`grid ${
            link ? 'grid-cols-2' : 'grid-cols-1'
          } gap-2 mt-auto`}
        >
          {link && (
            <Button
              href={link}
              className="w-full !py-2"
            >
              Website <FaExternalLinkAlt />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}