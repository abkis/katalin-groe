'use client'
import Header from '../components/ui/header';
import Timeline from '../components/ui/timeline';
import { Redis } from "@upstash/redis";
import {TimelineElement} from "../lib/types";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function Experience() {
    const key ="experience";

    let experience: TimelineElement[] = [];
        
    const res = await redis.mget<string[]>(key);

    const proj_res = res
      .filter((project) => project !== null) // Remove nulls
      .map((project) => 
          typeof project === "string" ? JSON.parse(project) : project
        );

    experience = proj_res[0];
    

  return (
    <div>
      <Header>Experience</Header>
      <Timeline data={experience} />
    </div>
  )
}