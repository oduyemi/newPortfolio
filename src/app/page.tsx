import { Banner } from "@/components/home/Banner";
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
    </>

  );
}
