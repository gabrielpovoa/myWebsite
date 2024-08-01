"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks/hook';

export const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3"> After deciding that I couldn’t be a{" "}
                <span className="font-medium">Military</span>,
                I decided to learn programming.
                I enrolled in some edX coding bootcamp and I got introduced to{" "}
                <span className="font-medium">front-end development</span>.{" "}
                In the beginning, it was really hard, and I didn't know the best path for me.{" "}
                <span className="font-medium">That's when I enrolled in a course and the university.</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the problem-solving aspect.
                I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem.
                My core stack is{" "}
                <span className="font-medium"> React, React Native Next.js, and PHP</span> .
                I am also familiar with TypeScript and Wordpress.
                I am always looking to learn new technologies.
                I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software web developer. </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy watching
                movies, go to the beach, and drive. I also adore{" "}
                <span className="font-medium">learning new languges</span>. I am currently
                learning {" "}
                <span className="font-medium">French, Russian</span> and of course, improving my English
            </p>
        </motion.section>
    )
}
