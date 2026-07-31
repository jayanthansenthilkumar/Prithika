import { Helmet } from "react-helmet-async";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";

export default function ProjectsPage() {
  return (
    <div >
      <Helmet>
        <title>Portfolio Projects | Prithika Kannan - Software Engineer</title>
        <meta name="description" content="Explore full-stack engineering and machine learning projects by Prithika Kannan. Featuring PLANGO AI Trip Planner, Geo Tagging System, and more." />
        <meta name="keywords" content="Software Engineering Projects, React Portfolio, Flask Backend, ML Projects, PLANGO AI Trip Planner, Prithika Kannan Projects" />
      </Helmet>
      
      <div >
        <FeaturedCaseStudies />
      </div>
      
      {/* Spacer before footer */}
      <div ></div>
    </div>
  );
}
