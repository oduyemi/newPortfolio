import { Banner } from "@/components/home/Banner";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { MySkills } from "@/components/home/Skills";
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
    </>

  );
}
