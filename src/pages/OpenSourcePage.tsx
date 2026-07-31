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
    className={className}
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
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
        <meta name="description" content="Explore Prithika Kannan's open source contributions, GitHub repositories, and community involvement." />
      </Helmet>
      
      <section className="pt-24 pb-12 border-b-[3px] border-foreground bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border-[3px] border-foreground rounded-md bg-background text-xs font-mono font-bold uppercase text-foreground shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <Terminal className="w-4 h-4" />
              <span>prithika/open-source</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter font-heading uppercase">
              Building in the open.
            </h1>
            
            <p className="text-lg text-foreground font-mono font-bold leading-relaxed mb-8 border-[3px] border-foreground rounded-xl bg-background p-4 shadow-brutal">
              I believe in the power of open-source software. Contributing to the community helps me learn, share knowledge, and build better software together.
            </p>

            <a 
              href="https://github.com/prithikakannan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-background border-[3px] border-foreground rounded-md text-foreground px-6 py-3 font-mono font-bold text-sm uppercase shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
            >
              <GithubIcon className="w-5 h-5" />
              Follow me on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b-[3px] border-foreground bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-background font-heading mb-2 group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-foreground mb-12 font-heading uppercase tracking-tighter">Highlighted <span className="bg-primary px-2 border-[3px] border-foreground rounded-md shadow-[2px_2px_0px_0px_var(--color-foreground)]">Repositories</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributions.map((repo, idx) => (
              <div key={idx} className="flex flex-col h-full bg-background border-[3px] border-foreground rounded-xl p-8 shadow-[4px_4px_0px_0px_var(--color-foreground)] hover:shadow-[12px_12px_0px_0px_var(--color-foreground)] hover:-translate-y-2 hover:-translate-x-2 transition-all relative group">
                <div className="flex justify-between items-start mb-6 gap-2">
                  <div className="flex items-start gap-3 text-foreground">
                    <GithubIcon className="w-6 h-6 mt-1 shrink-0" />
                    <a href="#" className="font-heading font-black text-lg uppercase hover:bg-primary px-1 transition-colors border-b-2 border-transparent hover:border-foreground break-all">
                      {repo.repo.split('/').pop()}
                    </a>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase bg-primary text-foreground px-2 py-1 border-[3px] border-foreground rounded-sm shrink-0">
                    {repo.type}
                  </span>
                </div>
                
                <p className="text-sm text-foreground font-mono font-bold flex-grow mb-8">
                  {repo.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t-[3px] border-foreground">
                  <div className="flex items-center gap-6 text-sm font-mono font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-[3px] border-foreground rounded-full bg-primary"></div>
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                      <Star className="w-4 h-4" /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                      <GitFork className="w-4 h-4" /> {repo.forks}
                    </div>
                  </div>
                </div>

                {/* Hover overlay link icon */}
                <a href="#" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-foreground bg-primary border-[3px] border-foreground rounded-md p-2 shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
}
