import Features from "@/components/home/Features";
import InstantEngagement from "@/components/home/InstantEngagement";
import MeetAilana from "@/components/home/MeetAilana";
import TopHeroSection from "@/components/home/TopHeroSection";
import UnleasingGenAi from "@/components/home/UnleasingGenAi";
import UnmatchedAdvantages from "@/components/home/UnmatchedAdvantages";

const page = () => {
  return (
    <>
      <TopHeroSection />
      <MeetAilana />
      <UnmatchedAdvantages />
      <UnleasingGenAi />
      <Features />
      <InstantEngagement />
    </>
  )
}

export default page;