import { Helmet } from "react-helmet-async";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <div >
      <Helmet>
        <title>About Prithika Kannan | Background, Education & Skills</title>
        <meta name="description" content="Learn about Prithika Kannan's background as a Product-focused Software Engineer, her education at M. Kumarasamy College of Engineering, and her industrial experience at RSUN Technologies." />
        <meta name="keywords" content="About Prithika Kannan, Software Engineer Background, M. Kumarasamy College of Engineering, RSUN Technologies Madurai, Tech Certifications, GitHub Foundations" />
      </Helmet>
      
      <section >
        <div >
          <div >
            <div >
              <Terminal  />
              <span>prithika/about</span>
            </div>
            
            <h1 >
              Bridging analytical focus with creative <span >problem-solving.</span>
            </h1>
            
            <p >
              I am a product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. Skilled in distributed systems and full-stack development, I build scalable, client-centric applications aligned with AI-driven transformation goals.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      {/* Spacer before footer */}
      <div ></div>
    </div>
  );
}
