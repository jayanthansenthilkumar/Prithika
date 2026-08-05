import { Helmet } from 'react-helmet-async';
import { Terminal, Download, ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ResumePage() {
  const resumeUrl = "/Resume_Prithika.pdf";

  return (
    <motion.div 
      className="max-w-5xl pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Resume - Prithika Kannan</title>
      </Helmet>

      <motion.div variants={itemVariants} className="flex items-center gap-3 text-[var(--text-tertiary)] mb-8 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
        <Terminal size={16} />
        <span className="text-sm font-mono tracking-tight">~/prithika/resume</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
        Resume & Experience
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg text-[var(--text-secondary)] leading-relaxed font-light mb-12 max-w-3xl">
        A detailed overview of my professional engineering experience, academic qualifications, and the core competencies that define my work.
      </motion.p>
        
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12 w-full max-w-2xl">
        <a 
          href={resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-6 py-4 rounded-2xl font-semibold shadow-lg shadow-[var(--accent)]/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <ExternalLink size={20} /> Open in New Tab
        </a>
        <a 
          href={resumeUrl} 
          download="Resume_Prithika.pdf"
          className="flex-1 flex items-center justify-center gap-2 bg-[var(--bg-main)] text-[var(--text-primary)] border-2 border-[var(--border-subtle)] px-6 py-4 rounded-2xl font-semibold hover:border-[var(--border-hover)] hover:-translate-y-1 transition-all duration-300"
        >
          <Download size={20} /> Download PDF
        </a>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="rounded-3xl border border-[var(--border-subtle)] overflow-hidden bg-[var(--bg-sidebar)] h-[800px] w-full flex justify-center items-center shadow-sm"
      >
        <object
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-full block"
        >
          <div className="p-12 text-center flex flex-col items-center justify-center h-full">
            <p className="text-[var(--text-secondary)] mb-6 text-xl">
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a 
              href={resumeUrl} 
              download="Resume_Prithika.pdf"
              className="inline-flex items-center gap-2 bg-[var(--bg-main)] text-[var(--text-primary)] border border-[var(--border-subtle)] px-8 py-4 rounded-xl font-medium hover:bg-[var(--bg-hover)] transition-colors"
            >
              <Download size={20} /> Download PDF Instead
            </a>
          </div>
        </object>
      </motion.div>
    </motion.div>
  );
}
