const phases = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "We analyze your data, define success metrics, and design a scalable system architecture. We never start building without a clear ROI model.",
    duration: "1-2 Weeks"
  },
  {
    step: "02",
    title: "Prototyping & Validation",
    description: "We build a functional prototype to validate the core assumptions, test model capabilities, and establish baseline performance metrics.",
    duration: "2-4 Weeks"
  },
  {
    step: "03",
    title: "Production Engineering",
    description: "The prototype is hardened into enterprise-grade software. This involves setting up CI/CD, security guardrails, and optimizing for latency.",
    duration: "4-8 Weeks"
  },
  {
    step: "04",
    title: "Deployment & Scaling",
    description: "Gradual rollout to production. We monitor model drift, system performance, and user adoption, adjusting the infrastructure as load increases.",
    duration: "Ongoing"
  }
];

export function Process() {
  return (
    <section >
      <div >
        
        <div >
          <h2 >Engagement Model</h2>
          <p >
            A rigorous, engineering-first approach to deploying AI in production.
          </p>
        </div>

        <div >
          {phases.map((phase, index) => (
            <div key={index} >
              <div >
                {phase.step}
              </div>
              
              <h3 >{phase.title}</h3>
              <p >
                {phase.description}
              </p>
              
              <div >
                <span >Estimated Timeline</span>
                <span >{phase.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
