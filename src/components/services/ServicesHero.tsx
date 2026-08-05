import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export function ServicesHero() {
  return (
    <section>
      <div>
        <div>
          <div>
            <Terminal />
            <span>austral/services</span>
          </div>
          
          <h1>
            Enterprise AI Engineering.
          </h1>
          
          <p>
            We don't sell wrapper apps. We architect, train, and deploy foundational intelligence systems built for scale, security, and measurable ROI.
          </p>
          
          <div>
            <Link to="/contact">
              <Button size="lg">
                Request Architecture Review
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}