import { Code2, Database, Network, ShieldCheck } from "lucide-react";

const offerings = [
  {
    title: "Custom LLM Fine-Tuning",
    description: "Generic models fail on domain-specific tasks. We fine-tune foundational open-weight models (Llama, Mistral) on your proprietary data. The result is a highly specialized model that outperforms GPT-4 on your specific workloads while being significantly cheaper to run.",
    deliverables: ["Curated Training Datasets", "Fine-tuned Weights", "Evaluation Benchmarks", "Inference Endpoint API"],
    icon: <Database  />
  },
  {
    title: "Secure On-Premise Deployments",
    description: "For defense, healthcare, and finance sectors where data cannot leave the perimeter. We deploy entire inference stacks into your VPC or bare-metal servers. Fully air-gapped, zero external dependencies, with Role-Based Access Control built-in.",
    deliverables: ["Kubernetes Deployment Manifests", "Hardware Provisioning Guide", "Security Audit Report", "Maintenance Runbooks"],
    icon: <ShieldCheck  />
  },
  {
    title: "High-Throughput Inference Optimization",
    description: "If your AI bills are spiraling or latency is too high, we can help. We optimize existing models using techniques like quantization (AWQ/GPTQ), continuous batching, and custom CUDA kernels to achieve sub-50ms latency at scale.",
    deliverables: ["Quantized Model Weights", "TensorRT Engines", "Load Testing Results", "Cost Analysis Report"],
    icon: <Code2  />
  },
  {
    title: "Multi-Agent Systems",
    description: "Single prompts are limiting. We architect networks of specialized AI agents that can plan, use tools, write code, and iterate to solve complex, multi-step business problems asynchronously.",
    deliverables: ["Agent Orchestration Architecture", "Custom Tool Integrations", "Memory/Context Store", "Monitoring Dashboard"],
    icon: <Network  />
  }
];

export function ServiceOfferings() {
  return (
    <section >
      <div >
        <div >
          {offerings.map((offering, index) => (
            <div key={index} >
              <div >
                <div >
                  {offering.icon}
                </div>
                <h2 >{offering.title}</h2>
              </div>
              
              <p >
                {offering.description}
              </p>
              
              <div>
                <h3 >Deliverables</h3>
                <ul >
                  {offering.deliverables.map((item, i) => (
                    <li key={i} >
                      <div  />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
