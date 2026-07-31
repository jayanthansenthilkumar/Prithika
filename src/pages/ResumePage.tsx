import { Helmet } from 'react-helmet-async';
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/Resume_Prithika.pdf";

  return (
    <div >
      <Helmet>
        <title>Resume - Prithika Kannan</title>
        <meta name="description" content="View Prithika Kannan's professional resume." />
      </Helmet>

      <div >
        <div>
          <h1 >Resume</h1>
          <p >
            My professional experience and qualifications.
          </p>
        </div>
        
        <div >
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
            <ExternalLink  />
            Open in New Tab
          </a>
          <a 
            href={resumeUrl} 
            download="Resume_Prithika.pdf"
            
          >
            <Download  />
            Download PDF
          </a>
        </div>
      </div>

      <div >
        <object
          data={resumeUrl}
          type="application/pdf"
          
        >
          <div >
            <p >
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a 
              href={resumeUrl} 
              download="Resume_Prithika.pdf"
              
            >
              <Download  />
              Download PDF Instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
