import { Database, Bot, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
{
  title: "Intelligent Document Processing",
  description: "Extract structured data from unstructured documents with 99% accuracy.",
  icon: <Database />,
  stats: "3x Faster Processing"
},
{
  title: "Customer Support AI Agent",
  description: "Resolve 80% of L1 support tickets instantly across multiple channels.",
  icon: <Bot />,
  stats: "24/7 Availability"
},
{
  title: "Predictive Maintenance",
  description: "Identify equipment failures before they happen using IoT sensor data.",
  icon: <Zap />,
  stats: "40% Downtime Reduction"
}];


export function AISolutionsOverview() {
  return (
    <section>
      <div>
        
        <div>
          <div>
            <h2>Packaged Solutions</h2>
            <p>
              Pre-built architectures designed to solve specific business challenges rapidly.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline">
              View All Solutions <ArrowRight />
            </Button>
          </Link>
        </div>

        <div>
          {solutions.map((solution, index) =>
          <div
            key={solution.title}>

            
              {/* Header Tab */}
              <div>
                {solution.icon}
                <h3>{solution.title}</h3>
              </div>
              
              <div>
                <p>
                  {solution.description}
                </p>
                
                <div>
                  <span>
                    {solution.stats}
                  </span>
                  <ArrowRight />
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <Link to="/services">
            <Button variant="outline">
              View All Solutions <ArrowRight />
            </Button>
          </Link>
        </div>

      </div>
    </section>);

}