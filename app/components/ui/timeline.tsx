'use client'
import Image from 'next/image'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import Link from 'next/link'
import { TimelineElement } from '@/util/types'

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
        <ul className="relative flex flex-col items-center gap-12">
          {data.map(
            ({ title, subtitle, description, dates, imageSrc, gpa, link }, i) => {
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
                <li key={subtitle} className="relative flex w-full">
                  {/* Timeline Connector */}
                  <ArcherElement
                    id={i === 0 ? 'root' : `element ${i}`}
                    relations={
                      i === data.length - 1
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
                    <div className="relative w-full flex justify-center">
                    {/* Timeline Connector */}
                    <div className="h-full w-1 bg-gray-500 absolute left-1/2 -translate-x-1/2"></div>

                    {/* Image in center of timeline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center p-2 border-2 border-sjsu-gold rounded-full shadow-lg shadow-slate-800 w-16 h-16 sm:w-20 sm:h-20">
                    <Image
                        src={imageSrc}
                        alt={subtitle}
                        fill
                        className="object-cover rounded-full object-center"
                    />
                    </div>
                </div>
                  </ArcherElement>
  
                  {/* Experience Content */}
                  <div
                    className={`p-4 relative bg-slate-700 rounded-lg shadow-md shadow-slate-800 ${
                     'ml-auto text-left'
                    }`}
                  >
                    {componentContent}
  
                    {/* Arrow pointing to the timeline */}
                    <BsFillCaretLeftFill
                      className={`text-slate-700 absolute top-1/2 transform -translate-y-1/2 w-6 h-6 ${
                        'left-[-10px]' // Left-side entry
                      }`}
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
  