import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/GitHubContributions";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <Projects />
        <GitHubContributions />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
