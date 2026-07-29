import { Helmet } from "react-helmet-async";
import { AboutHero } from "@/components/about/AboutHero";
import { Timeline } from "@/components/about/Timeline";
import { Team } from "@/components/about/Team";
import { Values } from "@/components/about/Values";
import { Offices } from "@/components/about/Offices";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <Timeline />
      <Values />
      <Team />
      <Offices />
      <ContactCTA />
    </div>
  );
}
