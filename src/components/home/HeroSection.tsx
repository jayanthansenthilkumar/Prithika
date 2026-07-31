import { ArrowRight, Code, Terminal, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section id="home" >
      
      {/* Announcement Badge */}
      <div >
        <a
          href="https://github.com/prithikakannan"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <span >
            <Code  />
          </span>
          <span >Available - Open to New Opportunities</span>
          <ArrowRight  />
        </a>
      </div>

      <div >
        
        <h1 >
          <span >Prithika</span>
          <br  />
          <span >Kannan</span>
        </h1>
        
        <p >
          Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
          Skilled in distributed systems and full-stack development, I blend analytical focus with creative problem-solving.
        </p>
        
        <div >
          <Link to="/projects">
            <Button size="lg" >
              <span>View Projects</span>
              <ArrowRight  />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" >
              <span>Contact Me</span>
            </Button>
          </Link>
        </div>
      </div>


      {/* 3 Column Feature Grid (Bordered) */}
      <div >
        <div >
          <div >
            <div >
              <Code  />
            </div>
            <h3 >Full-Stack</h3>
          </div>
          <p >
            Building robust web applications using Python, HTML, CSS, JavaScript, and PHP with modern frameworks like Flask.
          </p>
        </div>
        <div >
          <div >
            <div >
              <Database  />
            </div>
            <h3 >Data-Driven</h3>
          </div>
          <p >
            Designing scalable backend systems, optimizing SQL databases, and engineering predictive ML models for performance.
          </p>
        </div>
        <div >
          <div >
            <div >
              <Terminal  />
            </div>
            <h3 >Problem Solving</h3>
          </div>
          <p >
            Focused on improving system reliability, reducing latency, and enhancing overall user experience through creative engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
