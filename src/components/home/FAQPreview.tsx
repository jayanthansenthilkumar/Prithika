import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Do you train models on our proprietary data?",
    answer: "No. We deploy isolated, single-tenant environments for every enterprise client. Your data remains entirely within your control and is never used to train our base models or any models for other clients."
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Our pre-packaged solutions (like our RAG platform or Document Processing) can be deployed in as little as 2 weeks. Custom architectures and fine-tuned models typically take 6-12 weeks from discovery to production deployment."
  },
  {
    question: "Do you offer on-premise deployments?",
    answer: "Yes. For clients with strict compliance requirements (defense, healthcare, finance), we offer fully air-gapped on-premise deployments or deployments within your own private cloud (VPC)."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer hybrid pricing depending on the engagement. API products are consumption-based, while custom enterprise deployments typically involve a one-time engineering fee followed by an annual licensing and maintenance contract."
  }
];

export function FAQPreview() {
  return (
    <section >
      <div >
        
        <div >
          <div >
            <div >
              <HelpCircle  />
              <h2 >FAQ</h2>
            </div>
            <p >
              Everything you need to know about our technology, security posture, and deployment models.
            </p>
            <Link to="/contact">
              <Button variant="outline" >
                View All FAQs <ArrowRight  />
              </Button>
            </Link>
          </div>
          
          <div >
            <div >
              <div >
                <span >austral.config.json</span>
              </div>
              <Accordion >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} >
                    <AccordionTrigger >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
