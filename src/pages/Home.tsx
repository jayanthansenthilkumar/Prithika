import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { CompanyStatistics } from "@/components/home/CompanyStatistics";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AISolutionsOverview } from "@/components/home/AISolutionsOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { LatestBlogPosts } from "@/components/home/LatestBlogPosts";
import { FAQPreview } from "@/components/home/FAQPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustedBy />
      <CompanyStatistics />
      <ServicesOverview />
      <AISolutionsOverview />
      <ProductShowcase />
      <WhyChooseUs />
      <TechnologyStack />
      <FeaturedCaseStudies />
      <ClientTestimonials />
      <LatestBlogPosts />
      <FAQPreview />
      <ContactCTA />
    </div>
  );
}
