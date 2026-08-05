import { ArrowRight, Sparkles, User, Link2, BarChart3, Bot, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
{
  title: "AI-Powered Identity",
  description: "Transform your portfolio, GitHub, LinkedIn, resume, blogs, and achievements into one intelligent AI identity that updates itself automatically.",
  icon: <Sparkles />
},
{
  title: "Identity Agent",
  description: "An AI chatbot that lives on your profile. Visitors can ask questions about your work, skills, and experience — and get instant, intelligent answers.",
  icon: <Bot />
},
{
  title: "Connected Accounts",
  description: "Link your GitHub, LeetCode, LinkedIn, and other platforms. Aventrea syncs your activity and presents a unified, always-current digital presence.",
  icon: <Link2 />
},
{
  title: "Identity Score & Analytics",
  description: "Get an AI-generated Identity Score, track profile views, monitor engagement, and understand how your digital presence is performing.",
  icon: <BarChart3 />
},
{
  title: "Personalized URL",
  description: "Claim your unique aventrea.me/username link. One beautiful, living page that replaces scattered portfolios, link trees, and static resumes.",
  icon: <User />
},
{
  title: "Open Source",
  description: "Built in the open. Aventrea.me is fully open-source, community-driven, and transparent. Contribute, customize, or self-host.",
  icon: <Code2 />
}];


export function ProductShowcase() {
  return (
    <section>
      <div>
        
        <div>
          <div>
            <h2>Aventrea.me</h2>
            <p>
              The Living Digital Identity Platform. One intelligent page that replaces your portfolio, resume, and link tree — powered by AI.
            </p>
          </div>
          <a href="https://aventrea.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              Visit Aventrea.me <ArrowRight />
            </Button>
          </a>
        </div>

        <div>
          {features.map((feature) =>
          <div
            key={feature.title}>

            
              <div>
                <div>
                  {feature.icon}
                </div>
                <span>{feature.title}</span>
              </div>

              <div>
                <p>
                  {feature.description}
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <a href="https://aventrea.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              Visit Aventrea.me <ArrowRight />
            </Button>
          </a>
        </div>
      </div>
    </section>);

}