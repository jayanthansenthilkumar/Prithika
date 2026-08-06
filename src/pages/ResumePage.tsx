import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Terminal, Download, ExternalLink, Loader2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ResumePage() {
  const resumeUrl = "/Resume_Prithika.pdf";
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full pt-6 md:pt-10 pb-12 md:pb-20"
    >
      <Helmet>
        <title>Resume | Prithika Kannan</title>
      </Helmet>

      <div className="mb-10 md:mb-12 max-w-3xl">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-5 md:mb-6">
          <Terminal size={14} className="text-indigo-600 dark:text-indigo-400 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/resume</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-4 md:mb-6 text-zinc-950 dark:text-white transition-colors">
          Resume & <span className="text-zinc-400 dark:text-zinc-500">Experience.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance mb-8 transition-colors">
          A detailed overview of my professional engineering experience, academic qualifications, and the core competencies that define my work.
        </motion.p>
          
        <motion.div variants={itemVariants} className="flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="rounded-full flex-1 sm:flex-none px-2 sm:px-8 text-xs sm:text-sm">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <ExternalLink size={14} className="mr-1.5 sm:mr-2 shrink-0 sm:w-[18px] sm:h-[18px]" /> 
              <span className="truncate">Open in New Tab</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full flex-1 sm:flex-none px-2 sm:px-8 text-xs sm:text-sm">
            <a href={resumeUrl} download="Resume_Prithika.pdf" className="flex items-center justify-center">
              <Download size={14} className="mr-1.5 sm:mr-2 shrink-0 sm:w-[18px] sm:h-[18px]" /> 
              <span className="truncate">Download PDF</span>
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Universal Native PDF Viewer */}
      <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-4 md:p-8">
        <div 
          ref={containerRef}
          className="w-full rounded-[1.5rem] overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900 flex flex-col items-center justify-center relative transition-colors min-h-[400px]"
        >
          <Document
            file={resumeUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex flex-col items-center justify-center py-20 text-zinc-500 dark:text-zinc-400">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-indigo-500" />
                <p className="font-medium tracking-wide">Initializing PDF Engine...</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center py-20 text-zinc-500 p-4 text-center">
                <p className="mb-4">Failed to load PDF engine.</p>
                <Button asChild className="rounded-full">
                  <a href={resumeUrl} download="Resume_Prithika.pdf">
                    <Download size={18} className="mr-2" /> Download PDF Instead
                  </a>
                </Button>
              </div>
            }
            className="flex flex-col items-center w-full max-w-full"
          >
            {numPages && Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                width={containerWidth ? containerWidth : undefined}
                className="mb-4 last:mb-0 shadow-2xl"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </motion.div>
    </motion.div>
  );
}