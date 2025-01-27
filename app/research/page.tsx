import React from "react";
import { Redis } from "@upstash/redis";
import { Research } from "../../util/types";
import "../../global.css";
import ProjectCard from '../components/ui/project-card';

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
    const keys = ["research"];

    let research: Research[] = [];
        
    const res = await redis.mget<string[]>(...keys);

    const proj_res = res
      .filter((project) => project !== null) // Remove nulls
      .map((project) => 
          typeof project === "string" ? JSON.parse(project) : project
        );

    research = proj_res[0];

    const renderedProjects = research.map((project, i) => {
      return (
        <div key={project.title}>
          <li>
            <ProjectCard project={project} />
          </li>
        </div>
      )
    })
  
    return (
      <div className="relative pb-16" >
      <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32" style={{paddingTop: "25rem"}}>
        <div className="lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" style={{color: "var(--text-color)"}}>
          About Me
          </h1>
          <div className="w-[70%] h-px bg-zinc-800 opacity-80"
              style={{ marginBottom: "5px", marginLeft: "auto", 
                marginRight: "auto" }}/>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 md:auto-rows-fr" key={"projects page"}>
          {renderedProjects}
        </ul>
      </div>
      </div>
      </div>
    );
}