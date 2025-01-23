'use client'
import { TimelineElement } from '../../lib/types';
import Image from 'next/image'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import Link from 'next/link'

type TimelineProps = {
  data: TimelineElement[]
}

export default function Timeline({ data }: TimelineProps) {
  return (
    <ArcherContainer
      endMarker={false}
      strokeColor="#E5A823"
      strokeWidth={2}
    >
      <ul className="flex flex-col items-center lg:gap-0 gap-12">
        {data.map(
          ({ title, subtitle, description, dates, image, imageSrc, gpa, link }, i) => {
            const sub = (
              <h3 className={`text-gray-400 mb-2 ${link ? 'underline' : ''}`}>
                {subtitle}
                {gpa && `, ${gpa} GPA`}
              </h3>
            )
            const componentContent = (
              <Fragment>
                <h3 className="text-gray-400 mb-4">{dates}</h3>
                <h2 className="font-semibold text-lg">{title}</h2>
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                  >
                    {sub}
                  </Link>
                ) : (
                  sub
                )}

                <p className="text-gray-400">{description}</p>
              </Fragment>
            )

            return (
              <li
                key={subtitle}
                className={`flex items-start w-full relative ${
                  i !== 0 ? 'lg:-mt-12' : ''
                }`}
              >
                <ArcherElement
                  id={i == 0 ? 'root' : `element ${i}`}
                  relations={
                    i == data.length - 1
                      ? []
                      : [
                          {
                            targetId: `element ${i + 1}`,
                            targetAnchor: 'top',
                            sourceAnchor: 'bottom',
                          },
                        ]
                  }
                >
                  <div>
                    <Image
                      src={image ? image : imageSrc ? imageSrc : ""}
                      alt={subtitle}
                      className="object-cover rounded-full object-center"
                    />
                  </div>
                </ArcherElement>

                <div>
                  {componentContent}

                  <BsFillCaretLeftFill
                    className={`text-slate-700 absolute top-0 mt-4 transform  h-10 w-10 ${
                      i % 2 !== 0
                        ? 'left-0 -translate-x-1/2'
                        : 'right-0 translate-x-1/2 rotate-180'
                    }`}
                  />
                </div>
                <div>
                  {componentContent}
                  <BsFillCaretLeftFill
                    className={`text-slate-700 absolute top-0 mt-4 transform  h-10 w-10 left-0 -translate-x-1/2`}
                  />
                </div>
              </li>
            )
          }
        )}
      </ul>
    </ArcherContainer>
  )
}