import { Code2, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
      <div>

        
        <div

          style={{ WebkitTextStroke: '4px var(--color-foreground)' }}>
          
          Prithika Kannan
        </div>
      </div>
      <footer>
        <div>
          <div>
            <div>
              <span>Prithika Kannan</span>
            </div>
            <p>
              Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
            </p>
            <div>
              <a href="mailto:kpprithika75@gmail.com">
                <Mail />
                <span>Email</span>
              </a>
              <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">
                <Code2 />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer">
                <Briefcase />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <p>&copy; {new Date().getFullYear()} Prithika Kannan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>);

}