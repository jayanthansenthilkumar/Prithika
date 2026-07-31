import { ShieldAlert, Zap, Lock, Scaling } from "lucide-react";

const values = [
  {
    title: "Performance Absolute",
    description: "We optimize for bare-metal performance. Every millisecond of latency is a bug. We build our infrastructure in Rust and CUDA to ensure maximum throughput.",
    icon: <Zap  />
  },
  {
    title: "Zero-Trust Security",
    description: "Security is not an afterthought. We assume hostile environments and build systems that protect proprietary weights and customer data at all costs.",
    icon: <ShieldAlert  />
  },
  {
    title: "Data Sovereignty",
    description: "Your data belongs to you. We never train our base models on customer data, and we offer fully air-gapped deployments for maximum compliance.",
    icon: <Lock  />
  },
  {
    title: "Scalable by Default",
    description: "Prototypes are easy; production is hard. We design architectures that scale horizontally from day one without requiring rewrites.",
    icon: <Scaling  />
  }
];

export function Values() {
  return (
    <section >
      <div >
        
        <div >
          <h2 >Core Principles</h2>
          <p >
            The engineering maxims that govern every technical decision we make.
          </p>
        </div>

        <div >
          {values.map((value, index) => (
            <div key={index} >
              <div >
                {value.icon}
              </div>
              <div>
                <h3 >{value.title}</h3>
                <p >
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
