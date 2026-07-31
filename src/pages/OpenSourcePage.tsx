import { Helmet } from "react-helmet-async";
import { Terminal, GitPullRequest, GitFork, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GithubIcon = ({ className = "w-5 h-5", ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M1 19c-1 1-3 1-3 1" />
  </svg>
);

export default function OpenSourcePage() {
  const contributions = [
    {
      repo: "prithika/machine-learning-toolkit",
      description: "A collection of utility scripts and algorithms for preprocessing data and training standard models quickly.",
      stars: 12,
      forks: 3,
      language: "Python",
      type: "Maintainer"
    },
    {
      repo: "open-source/data-analyzer",
      description: "Contributed to optimizing the SQL querying engine and improving the data visualization components.",
      stars: 345,
      forks: 89,
      language: "TypeScript",
      type: "Contributor"
    },
    {
      repo: "prithika/portfolio-v1",
      description: "My open-source portfolio template built with React, Vite, and Tailwind CSS. Feel free to fork and use it!",
      stars: 5,
      forks: 1,
      language: "React",
      type: "Maintainer"
    }
  ];

  const stats = [
    { label: "Repositories", value: "24+" },
    { label: "Contributions", value: "150+" },
    { label: "Pull Requests", value: "30+" },
    { label: "Followers", value: "45" }
  ];

  return (
    <div >
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
        <meta name="description" content="Explore Prithika Kannan's open source contributions, GitHub repositories, and community involvement." />
      </Helmet>
      
      <section >
        <div >
          <div >
            <div >
              <Terminal  />
              <span>prithika/open-source</span>
            </div>
            
            <h1 >
              Building in the open.
            </h1>
            
            <p >
              I believe in the power of open-source software. Contributing to the community helps me learn, share knowledge, and build better software together.
            </p>

            <a 
              href="https://github.com/prithikakannan" 
              target="_blank" 
              rel="noopener noreferrer"
              
            >
              <GithubIcon  />
              Follow me on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section >
        <div >
          <div >
            {stats.map((stat, idx) => (
              <div key={idx} >
                <div >{stat.value}</div>
                <div >{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      <section >
        <div >
          <h2 >Highlighted <span >Repositories</span></h2>
          
          <div >
            {contributions.map((repo, idx) => (
              <div key={idx} >
                <div >
                  <div >
                    <GithubIcon  />
                    <a href="#" >
                      {repo.repo.split('/').pop()}
                    </a>
                  </div>
                  <span >
                    {repo.type}
                  </span>
                </div>
                
                <p >
                  {repo.description}
                </p>
                
                <div >
                  <div >
                    <div >
                      <div ></div>
                      {repo.language}
                    </div>
                    <div >
                      <Star  /> {repo.stars}
                    </div>
                    <div >
                      <GitFork  /> {repo.forks}
                    </div>
                  </div>
                </div>

                {/* Hover overlay link icon */}
                <a href="#" >
                  <ExternalLink  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ></div>
    </div>
  );
}
