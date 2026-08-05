import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const posts = [
{
  title: "The shift from monolithic LLMs to multi-agent systems",
  excerpt: "Why the future of enterprise AI isn't one massive model, but a swarm of specialized, coordinated agents.",
  category: "Architecture",
  date: "2025-06-12",
  readTime: "6m",
  link: "/blog"
},
{
  title: "Optimizing vector search for billion-scale datasets",
  excerpt: "A deep dive into how we reduced p99 latency by 40% using custom HNSW graph quantization.",
  category: "Engineering",
  date: "2025-05-28",
  readTime: "8m",
  link: "/blog"
},
{
  title: "SOC2 Compliance in the age of generative AI",
  excerpt: "A framework for safely deploying LLMs in regulated industries without compromising data privacy.",
  category: "Security",
  date: "2025-05-15",
  readTime: "5m",
  link: "/blog"
}];


export function LatestBlogPosts() {
  return (
    <section>
      <div>
        
        <div>
          <div>
            <div>
              <BookOpen />
              <h2>Changelog & Thinking</h2>
            </div>
            <p>
              Engineering deep dives, architecture patterns, and thoughts on the future of AI.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline">
              View All Posts <ArrowRight />
            </Button>
          </Link>
        </div>

        <div>
          {posts.map((post) =>
          <Link to={post.link}
          key={post.title}>

            
              <div>
                <span>{post.category}</span>
                <div>
                  <span>{post.date}</span>
                  <span><Clock /> {post.readTime}</span>
                </div>
              </div>
              
              <div>
                <h3>
                  {post.title}
                </h3>
                <p>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          )}
        </div>
        
        <div>
          <Link to="/blog">
            <Button variant="outline">
              View All Posts <ArrowRight />
            </Button>
          </Link>
        </div>

      </div>
    </section>);

}