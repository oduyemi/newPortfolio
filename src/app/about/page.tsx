import { AboutHero } from "@/components/about/Hero";
import { WhyWorkWithMe } from "@/components/about/WhyMe";
import { AboutMe } from "@/components/home/AboutMe";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ProjectHub } from "@/components/home/ProjectHub";


export default function About() {
  return (
    <>
      <div style={{ marginTop: "20px"}}>
        <AboutHero />
      </div>
      <div style={{ marginTop: "-20px"}}>
        <AboutMe />
      </div>
      <div>
        <WhyWorkWithMe />
      </div>      
      <div>
        <ContactCTA />
      </div>
      <div>
        <ProjectHub />
      </div>
    </>

  );
}
