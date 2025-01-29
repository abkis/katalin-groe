import React from "react";
import { Redis } from "@upstash/redis";
import { TimelineElement } from "../../util/types";
import "../../global.css";
import ProjectCard from '../components/ui/project-card';
import Timeline from "../components/ui/timeline";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
    const keys = ["experience"];

    let experiences: TimelineElement[] = [];
        
    const res = await redis.mget<string[]>(...keys);

    const proj_res = res
      .filter((project) => project !== null) // Remove nulls
      .map((project) => 
          typeof project === "string" ? JSON.parse(project) : project
        );

    experiences = proj_res[0];
  
    return (
      <div className="relative pb-16" >
      <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32" style={{paddingTop: "25rem"}}>
        <div className="lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" style={{color: "var(--text-color)"}}>
          My Experiences
          </h1>
          <div className="w-[70%] h-px bg-zinc-800 opacity-80"
              style={{ marginBottom: "5px", marginLeft: "auto", 
                marginRight: "auto" }}/>
        <Timeline data={experiences} />
      </div>
      </div>
      </div>
    );
}