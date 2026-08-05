const milestones = [
{
  year: "2024",
  quarter: "Q1",
  title: "The Initial Idea",
  description: "The foundational idea for Austral AI was conceived, focusing on solving secure enterprise AI infrastructure."
},
{
  year: "2026",
  quarter: "Q1",
  title: "Company Initiated",
  description: "Austral AI officially started operations, incorporating the vision and assembling the core engineering team."
},
{
  year: "Present",
  quarter: "",
  title: "Developing Aventrea.me",
  description: "Currently actively developing our flagship product, Aventrea.me, the premier living digital identity platform."
}];


export function Timeline() {
  return (
    <section>
      <div>
        
        <div>
          <h2>System Initialization</h2>
          <p>The execution trace of Austral AI to date.</p>
        </div>

        <div>
          <div>
            {milestones.map((milestone, index) =>
            <div key={index}>
                
                {/* Connecting Line (Desktop) */}
                <div>
                  <div />
                  {index !== milestones.length - 1 &&
                <div />
                }
                </div>

                {/* Mobile Dot */}
                <div />

                <div>
                  <div>
                    <span>{milestone.year}</span>
                    <span>{milestone.quarter}</span>
                  </div>
                  
                  <div>
                    <h3>{milestone.title}</h3>
                    <p>
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
              </div>
            )}
          </div>
        </div>

      </div>
    </section>);

}