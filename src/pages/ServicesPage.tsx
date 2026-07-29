import { Helmet } from "react-helmet-async";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { Process } from "@/components/services/Process";
import { TechPartners } from "@/components/services/TechPartners";
import { ContactCTA } from "@/components/home/ContactCTA";


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <ServiceOfferings />
      <Process />
      <TechPartners />
      <ContactCTA />
    </div>
  );
}
