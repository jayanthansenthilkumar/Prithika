import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
{
  id: 1,
  quote: `"Austral AI's inference engine cut our model serving costs by 60% while improving latency. The migration from our in-house solution took less than a week."`,
  author: "Michael Torres",
  title: "VP of Engineering",
  company: "DataStream Analytics",
  featured: false
},
{
  id: 2,
  companyLogo: "MERIDIAN HEALTH",
  quote: `"We needed a HIPAA-compliant NLP pipeline that could process 50,000 physician notes daily. Austral AI delivered a system that exceeded our accuracy targets by 12% while maintaining full regulatory compliance. The team's deep understanding of healthcare AI constraints was invaluable."`,
  author: "Dr. Priya Sharma",
  title: "Chief Data Officer",
  company: "",
  featured: true
},
{
  id: 3,
  quote: `"The multi-agent architecture Austral AI built for our supply chain handles real-time optimization across 5,000 routes. It's the most sophisticated AI system we've deployed."`,
  author: "James Whitfield",
  title: "CTO",
  company: "LogiNext",
  featured: false
},
{
  id: 4,
  quote: `"Their on-premise deployment model was the deciding factor. In defense contracting, data sovereignty is non-negotiable. Austral AI understood that from day one."`,
  author: "Sarah Koenig",
  title: "Director of AI Programs",
  company: "Sentinel Systems",
  featured: false
},
{
  id: 5,
  quote: `"We evaluated six AI vendors. Austral AI was the only team that started by defining success metrics before writing a single line of code. That engineering discipline is rare."`,
  author: "Rajesh Patel",
  title: "Head of Innovation",
  company: "FinServe Global",
  featured: false
}];


export function ClientTestimonials() {
  return (
    <section>
      <div>
        
        <div>
          
          {/* Column 1 */}
          <div>
            <div>
              <p>
                {testimonials[0].quote}
              </p>
              <div>
                <div>
                  <div>MT</div>
                  <div>
                    <div>{testimonials[0].author}</div>
                    <div>{testimonials[0].title}</div>
                  </div>
                </div>
                <div>{testimonials[0].company}</div>
              </div>
            </div>
            
            <div>
              <p>
                {testimonials[3].quote}
              </p>
              <div>
                <div>
                  <div>SK</div>
                  <div>
                    <div>{testimonials[3].author}</div>
                    <div>{testimonials[3].title}</div>
                  </div>
                </div>
                <div>{testimonials[3].company}</div>
              </div>
            </div>
          </div>
          
          {/* Column 2 (Featured) */}
          <div>
            <div style={{
              backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
              backgroundSize: "8px 8px"
            }}>
              <div>
                <div>
                  {testimonials[1].companyLogo}
                </div>
                <p>
                  {testimonials[1].quote.split("Austral AI").map((part, i, arr) =>
                  <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span>Austral AI</span>}
                    </span>
                  )}
                </p>
              </div>
              <div>
                <div>PS</div>
                <div>
                  <div>{testimonials[1].author}</div>
                  <div>{testimonials[1].title}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3 */}
          <div>
            <div>
              <p>
                {testimonials[2].quote}
              </p>
              <div>
                <div>
                  <div>JW</div>
                  <div>
                    <div>{testimonials[2].author}</div>
                    <div>{testimonials[2].title}</div>
                  </div>
                </div>
                <div>{testimonials[2].company}</div>
              </div>
            </div>
            
            <div>
              <p>
                {testimonials[4].quote}
              </p>
              <div>
                <div>
                  <div>RP</div>
                  <div>
                    <div>{testimonials[4].author}</div>
                    <div>{testimonials[4].title}</div>
                  </div>
                </div>
                <div>{testimonials[4].company}</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Austral AI Delivers Section */}
      <div>
        <div>
          <div>
            <h3>Austral AI Delivers</h3>
            <p>
              From architecture review to production deployment. We ship reliable AI systems, on time, every time.
            </p>
          </div>
          <div>
            <Link to="/about">
              <Button variant="ghost">
                Our Approach <ArrowRight />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">
                View Services <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}