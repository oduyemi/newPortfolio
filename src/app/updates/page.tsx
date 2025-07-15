import { UpdatesHero } from "@/components/updates/Hero";
import { RecentHighlights } from "@/components/updates/RecentHighlights";
import { WorkInProgress } from "@/components/project/WorkInProgress";



export default function updates() {
  return (
    <>
      <div>
        <UpdatesHero />
      </div>
      <div>
        <RecentHighlights />
      </div>
      <div>
        <WorkInProgress />
      </div>
    </>

  );
}
