import { Intro } from "@/components/intro";
import { SectionDivider } from "@/components/section-divider";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skill } from "@/components/skill";
import Experience from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </main>
  )
}
