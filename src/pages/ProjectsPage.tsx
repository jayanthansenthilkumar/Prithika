import { Helmet } from "react-helmet-async";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Projects - Prithika Kannan</title>
        <meta name="description" content="Projects by Prithika Kannan, Software Engineer." />
      </Helmet>
      
      <div className="flex-grow">
        <FeaturedCaseStudies />
      </div>
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
