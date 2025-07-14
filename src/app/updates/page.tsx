import { UpdatesHero } from "@/components/updates/Hero";
import { RecentHighlights } from "@/components/updates/RecentHighlights";
import { WorkInProgress } from "@/components/updates/WorkInProgress";



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
