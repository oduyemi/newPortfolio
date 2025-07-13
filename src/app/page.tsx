import { AboutMe } from "@/components/home/AboutMe";
import { Banner } from "@/components/home/Banner";
import { MyBlog } from "@/components/home/Blog";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { MySkills } from "@/components/home/Skills";
import { Testimonials } from "@/components/home/Testimonials";
export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div style={{ marginTop: "4%"}}>
        <MySkills />
      </div>
      <div>
        <FeaturedProjects />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <MyBlog />
      </div>
    </>

  );
}
