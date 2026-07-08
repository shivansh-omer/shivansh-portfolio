import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Achievements } from "@/sections/Achievements";
import { GitHubStats } from "@/sections/GitHubStats";
import { Contact } from "@/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <GitHubStats />
      <Contact />
    </>
  );
}
