import { Research } from '@/util/types'
import { Card } from './card'
type ProjectProps = {
  project: Research
}

export default function ProjectCard({ project }: ProjectProps) {

  const { date, title, abstract, citation, file, link } = project
  return (
    <Card>
    <div className="rounded-lg bg-slate-700 flex flex-col min-h-full flex-grow relative">
      <a 
        href={file}
        download={file}
        >
      <div className="p-4 flex-col flex flex-grow">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-2 mb-6">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:var(--link-hover-color)"
            >
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
            </a>
          ) : (
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
          )}
        </div>
        <p className="text-gray-400 font-medium mb-2">{abstract}</p>
      </div>
      </a>
    </div>
    </Card>
  );
  
}