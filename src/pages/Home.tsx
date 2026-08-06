import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { ExperienceHighlight } from "@/components/home/ExperienceHighlight";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { ContactCTA } from "@/components/home/ContactCTA";
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Prithika Kannan | Software Engineer & UI/UX Designer</title>
        <meta name="description" content="Portfolio of Prithika Kannan, a Software Engineer crafting scalable architectures and premium digital experiences." />
        <meta property="og:title" content="Prithika Kannan | Software Engineer & UI/UX Designer" />
        <meta property="og:description" content="Portfolio of Prithika Kannan, a Software Engineer crafting scalable architectures and premium digital experiences." />
        <meta name="keywords" content="Prithika Kannan Portfolio, Software Engineer, Full-Stack Developer, Python Developer, ML Engineer" />
      </Helmet>
      
      <HeroSection />
      <AboutTeaser />
      <TechnologyStack />
      <ExperienceHighlight />
      <FeaturedCaseStudies />
      <ContactCTA />
    </div>
  );

}