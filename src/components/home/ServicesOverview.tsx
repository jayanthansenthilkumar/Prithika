import { Cpu, Lock, Network, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom LLM Fine-tuning",
    description: "Train foundational models on your proprietary datasets with full parameter control and zero data leakage to third parties.",
    icon: <Cpu  />,
    href: "/services"
  },
  {
    title: "On-Premise Deployments",
    description: "Air-gapped AI infrastructure deployed directly to your private cloud or bare-metal servers for maximum security.",
    icon: <Lock  />,
    href: "/services"
  },
  {
    title: "High-Throughput APIs",
    description: "Low-latency inference APIs designed for high-concurrency enterprise workloads. Backed by strict SLAs.",
    icon: <Zap  />,
    href: "/services"
  },
  {
    title: "Multi-Agent Architectures",
    description: "Complex, orchestrated networks of specialized AI agents working together to solve multi-step business problems.",
    icon: <Network  />,
    href: "/services"
  }
];

export function ServicesOverview() {
  return (
    <section >
      <div >
        
        <div >
          <h2 >Core Capabilities</h2>
          <p >
            We provide the foundational infrastructure and expertise required to run AI workloads reliably at scale.
          </p>
        </div>

        <div >
          {services.map((service, index) => (
            <Link key={service.title}
              to={service.href}
              
            >
              <div >
                <div >
                  <div >
                    {service.icon}
                  </div>
                  <h3 >{service.title}</h3>
                </div>
                <div >
                  <p >
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
