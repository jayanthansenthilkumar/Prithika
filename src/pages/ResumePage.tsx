import { Helmet } from 'react-helmet-async';
import { Terminal, Download, ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-5xl mx-auto pt-10 pb-24"
    >
      <Helmet>
        <title>Resume | Prithika Kannan</title>
      </Helmet>

      <div className="mb-12">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/resume</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-balance mb-6 text-zinc-950 dark:text-white transition-colors">
          Resume & <span className="text-zinc-400 dark:text-zinc-500">Experience.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed text-balance max-w-2xl mb-8 transition-colors">
          A detailed overview of my professional engineering experience, academic qualifications, and the core competencies that define my work.
        </motion.p>
          
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} className="mr-2" /> Open in New Tab
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href={resumeUrl} download="Resume_Prithika.pdf">
              <Download size={18} className="mr-2" /> Download PDF
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="glass-card rounded-3xl p-4 md:p-8">
        <div className="w-full aspect-[1/1.4] max-h-[800px] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center relative transition-colors">
          <object
            data={resumeUrl}
            type="application/pdf"
            className="w-full h-full absolute inset-0 z-10"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-zinc-100 dark:bg-zinc-900 z-0 transition-colors">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-4">
                <ExternalLink size={24} className="text-zinc-600 dark:text-zinc-400" />
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 transition-colors">
                It appears your browser doesn't support embedded PDFs.
              </p>
              <Button asChild className="rounded-full">
                <a href={resumeUrl} download="Resume_Prithika.pdf">
                  <Download size={18} className="mr-2" /> Download PDF Instead
                </a>
              </Button>
            </div>
          </object>
        </div>
      </motion.div>
    </motion.div>
  );
}