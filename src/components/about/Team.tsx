import { Code2, MessageCircle, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Jayanthan Senthilkumar",
    role: "Founder, CEO & Lead Software Director",
    bio: "The visionary behind Austral AI. Driving the core engineering architecture and overall product strategy.",
    initials: "JS",
    socials: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    name: "Open Position",
    role: "Chief Technology Officer",
    bio: "We are actively looking for a visionary CTO to lead our global engineering efforts and scale our infrastructure.",
    initials: "CTO",
    socials: {}
  },
  {
    name: "Open Position",
    role: "Chief Marketing Officer",
    bio: "Seeking a strategic CMO to drive our go-to-market strategy, enterprise sales, and global brand presence.",
    initials: "CMO",
    socials: {}
  },
  {
    name: "Open Position",
    role: "Associate Manager",
    bio: "Overseeing day-to-day operations and ensuring seamless delivery across our cross-functional engineering teams.",
    initials: "VS",
    socials: { linkedin: "#" }
  }
];

export function Team() {
  return (
    <section >
      <div >
        
        <div >
          <h2 >Leadership</h2>
          <p >
            Built by engineers who have scaled the world's largest AI and financial systems.
          </p>
        </div>

        <div >
          {team.map((member, index) => (
            <div key={index} >
              <div >
                <div  />
                <span >
                  {member.initials}
                </span>
              </div>
              
              <div >
                <h3 >{member.name}</h3>
                <p >{member.role}</p>
                <p >
                  {member.bio}
                </p>
                
                <div >
                  {member.socials.github && (
                    <Link to={member.socials.github} >
                      <Code2  />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link to={member.socials.linkedin} >
                      <Briefcase  />
                    </Link>
                  )}
                  {member.socials.twitter && (
                    <Link to={member.socials.twitter} >
                      <MessageCircle  />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
