import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col pt-20 md:pt-28 items-center px-4">
      <Intro />
      <About />
      <Projects/>
      <Skills />
      <Contact />
    </main>
  );
}
