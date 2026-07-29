import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/home/HeroSection";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Prithika Kannan - Portfolio</title>
        <meta name="description" content="Portfolio of Prithika Kannan, Software Engineer." />
      </Helmet>
      
      <HeroSection />
      <TechnologyStack />
      <WhyChooseUs />
      <FeaturedCaseStudies />
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
