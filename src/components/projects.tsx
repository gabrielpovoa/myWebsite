"use client"
import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { Project } from './project'
import { Loading } from './loading'
import { useSectionInView } from '@/lib/hooks/hook'

export const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState<number>(3);
    const [loading, setLoading] = useState<boolean>(false);

    const loadMoreProjects = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
            setLoading(false);
        }, 1000); 
    };

    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section id="projects" ref={ref} className="flex flex-col items-center justify-center scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.slice(0, visibleProjects).map((item, index) => (
                    <Project key={index} {...item} />
                ))}
            </div>
            {visibleProjects < projectsData.length && (
                <button
                    onClick={loadMoreProjects}
                    className="mt-6 w-2/3 bg-black/[0.7] px-3 py-3 shadow-md text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    {loading ? <Loading/> : "Load More"}
                </button>
            )}
        </section>
    )
}
