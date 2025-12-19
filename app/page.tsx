import HomeHero from "@/components/section/HomeHero";
import ParticipationProperties from "@/components/section/ParticipationProperties";
import Statistics from "@/components/section/Statistics";
import Programme from "@/components/section/Programme";
import Gallery from "@/components/section/Gallery";
// import Speakers from "@/components/section/Speakers";
import Sponsors from "@/components/section/Sponsors";
import Calendar from "@/components/section/Calendar";
// import SpeakerDetails from "@/components/features/speakers/SpeakerDetails";
import EventDescription from "@/components/section/EventDescription";
import PresidentSpeech from "@/components/section/PresidentSpeech";

export default function Home() {
  return (
    <div className="w-full min-h-dvh">
      <main className="flex flex-col">
        <HomeHero />
        <EventDescription />
        {/* <PresidentSpeech /> */}
        <Statistics />
        <ParticipationProperties />
        <Programme />
        <Gallery />
        {/* <Speakers /> */}
        {/* <SpeakerDetails /> */}
        <Sponsors />
        <Calendar />
      </main>
    </div>
  );
}

