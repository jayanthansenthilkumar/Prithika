
import { useState } from "react";
import { MapPin, ArrowRight, X, UploadCloud, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const openings = [
{ title: "Senior LLMOps Engineer", team: "ML Infrastructure", location: "San Francisco / Remote", type: "Full-time" },
{ title: "Lead MLOps Architect", team: "Platform", location: "London / Remote", type: "Full-time" },
{ title: "Cloud Infrastructure Engineer (AI)", team: "Cloud & DevOps", location: "San Francisco / Remote", type: "Full-time" },
{ title: "AI Systems Engineer", team: "Core Engineering", location: "New York / Remote", type: "Full-time" },
{ title: "Applied AI Researcher", team: "Research", location: "London / San Francisco", type: "Full-time" },
{ title: "Senior Data Engineer (ML)", team: "Data Platform", location: "Remote", type: "Full-time" }];


export function JobBoard() {
  const [selectedJob, setSelectedJob] = useState<typeof openings[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
      }, 2500);
    }, 1500);
  };

  return (
    <section>
      <div>
        <div>
          <h2>Open Positions</h2>
          <p>
            {openings.length} positions open across our global offices.
          </p>
        </div>

        <div>
          {openings.map((job, index) =>
          <button
            key={index}
            onClick={() => setSelectedJob(job)}>

            
              <div>
                <h3>{job.title}</h3>
                <div>
                  <span>{job.team}</span>
                  <span>
                    <MapPin /> {job.location}
                  </span>
                </div>
              </div>
              <div>
                <span>{job.type}</span>
                <ArrowRight />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedJob &&
      <div onClick={() => setSelectedJob(null)}>
          <div

          onClick={(e) => e.stopPropagation()}>
          
            <div>
              <div>
                <h2>Apply for {selectedJob.title}</h2>
                <p>{selectedJob.team} · {selectedJob.location}</p>
              </div>
              <button onClick={() => setSelectedJob(null)}>
                <X />
              </button>
            </div>
            
            <div>
              {submitted ?
            <div>
                  <div>
                    <CheckCircle2 />
                  </div>
                  <h3>Application Received</h3>
                  <p>Thank you for applying to Austral AI. Our recruiting team will review your application and get back to you shortly.</p>
                </div> :

            <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <label>First Name *</label>
                      <input required type="text" placeholder="Ada" />
                    </div>
                    <div>
                      <label>Last Name *</label>
                      <input required type="text" placeholder="Lovelace" />
                    </div>
                  </div>
                  
                  <div>
                    <label>Email Address *</label>
                    <input required type="email" placeholder="ada@example.com" />
                  </div>

                  <div>
                    <label>LinkedIn Profile</label>
                    <input type="url" placeholder="https://linkedin.com/in/..." />
                  </div>

                  <div>
                    <label>Personal Website / GitHub</label>
                    <input type="url" placeholder="https://github.com/..." />
                  </div>

                  <div>
                    <label>Resume / CV *</label>
                    <div>
                      <UploadCloud />
                      <span>Click to upload</span>
                      <span>PDF, DOCX up to 5MB</span>
                      <input required type="file" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  <div>
                    <label>Additional Information</label>
                    <textarea rows={3} placeholder="Anything else we should know?" />
                  </div>

                  <div>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ?
                  <>
                          <div />
                          <span>Submitting...</span>
                        </> :

                  <span>Submit Application</span>
                  }
                    </Button>
                  </div>
                </form>
            }
            </div>
          </div>
        </div>
      }
    </section>);

}