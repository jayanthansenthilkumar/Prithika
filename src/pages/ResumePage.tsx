import { Helmet } from 'react-helmet-async';
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/Resume_Prithika.pdf";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-background">
      <Helmet>
        <title>Resume - Prithika Kannan</title>
        <meta name="description" content="View Prithika Kannan's professional resume." />
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black font-heading uppercase text-foreground mb-4 tracking-tighter">Resume</h1>
          <p className="text-foreground font-mono font-bold text-sm md:text-base border-l-[3px] border-foreground pl-4">
            My professional experience and qualifications.
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center bg-background border-[3px] border-foreground rounded-md text-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all font-bold uppercase px-4 py-2 font-mono text-xs"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in New Tab
          </a>
          <a 
            href={resumeUrl} 
            download="Resume_Prithika.pdf"
            className="flex-1 md:flex-none flex items-center justify-center bg-primary border-[3px] border-foreground rounded-md text-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all font-bold uppercase px-4 py-2 font-mono text-xs"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="w-full h-[70vh] md:h-[80vh] bg-background rounded-xl overflow-hidden border-[3px] border-foreground shadow-brutal-lg relative">
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-background">
            <p className="text-foreground mb-4 font-mono font-bold">
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a 
              href={resumeUrl} 
              download="Resume_Prithika.pdf"
              className="flex items-center justify-center bg-primary border-[3px] border-foreground rounded-md text-foreground shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all font-bold uppercase px-6 py-3 font-mono"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF Instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
