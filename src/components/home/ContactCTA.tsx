import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section>
      <div>
        
        <div>
          {/* Header */}
          <div>
            <Terminal />
            <span>austral-cli</span>
          </div>
          
          <div>
            <div>
              <h2>Ready to scale your intelligence?</h2>
              <p>
                Speak with an AI architect to discuss your use case, review our security posture, and get a technical assessment of your requirements.
              </p>
            </div>
            
            <div>
              <Link to="/contact">
                <Button size="lg">
                  Book Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>);

}