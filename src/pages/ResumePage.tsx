import { Helmet } from 'react-helmet-async';
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/Resume_Prithika.pdf";

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Helmet>
        <title>Resume - Prithika Kannan</title>
        <meta name="description" content="View Prithika Kannan's professional resume." />
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-2">Resume</h1>
          <p className="text-gray-600 font-mono text-sm md:text-base">
            My professional experience and qualifications.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "flex-1 md:flex-none font-mono text-xs")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in New Tab
          </a>
          <a 
            href={resumeUrl} 
            download="Resume_Prithika.pdf"
            className={cn(buttonVariants({ variant: "default" }), "flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs border-none")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="w-full h-[70vh] md:h-[80vh] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative">
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gray-50">
            <p className="text-gray-600 mb-4 font-mono">
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a 
              href={resumeUrl} 
              download="Resume_Prithika.pdf"
              className={cn(buttonVariants({ variant: "default" }), "bg-blue-600 hover:bg-blue-700 text-white font-mono border-none")}
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
