import { Briefcase, GraduationCap, Award } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="experience">
      <div>
        
        <div>
          
          <div>
            <h2>
              Experience & <span>Background</span>
            </h2>
            <p>
              A blend of academic foundation and practical industry experience building scalable systems.
            </p>
            
            <div>
              {/* Experience */}
              <div>
                <div>
                  <div>
                    <Briefcase />
                  </div>
                  <div>
                    <h3>RSUN Technologies</h3>
                    <p>Madurai | June 2026</p>
                  </div>
                </div>
                <ul>
                  <li>Built scalable distributed backend with PHP & SQL, reducing latency by 30% and throughput.</li>
                  <li>Developed RESTful APIs to improve communication and system reliability by 40%.</li>
                  <li>Optimized queries and indexing, cutting processing time by 35% and enhancing performance.</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <div>
                  <div>
                    <GraduationCap />
                  </div>
                  <div>
                    <h3>M. Kumarasamy College of Engineering</h3>
                    <p>2024 - 2028</p>
                  </div>
                </div>
                <p>
                  B. Tech - Information Technology <br />
                  CGPA – 7.900 as of 3rd semester
                </p>
              </div>
            </div>
          </div>
          
          {/* Terminal / Certifications Box */}
          <div>
            <div>
              <span>certifications.json</span>
              <span>100%</span>
            </div>
            <div>
              <div>$ cat certifications.json</div>
              <pre>
{`{
  "certifications": [
    {
      "name": "GitHub Foundations",
      "status": "Completed",
      "verified": true
    },
    {
      "name": "SRMIST Hackathon",
      "award": "Finalist",
      "category": "Innovation"
    }
  ],
  "learning_path": {
    "current_focus": "Advanced Distributed Systems",
    "next_goal": "Cloud Architect Certification"
  }
}`}
              </pre>
              <div>
                <span>$</span>
                <span />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>);

}