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

      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      
      <Helmet>
        <title>Resume - Prithika Kannan</title>
      </Helmet>

      <motion.div variants={itemVariants}>
        <Terminal size={16} />
        <span>~/prithika/resume</span>
      </motion.div>

      <motion.h1 variants={itemVariants}>
        Resume & Experience
      </motion.h1>
      
      <motion.p variants={itemVariants}>
        A detailed overview of my professional engineering experience, academic qualifications, and the core competencies that define my work.
      </motion.p>
        
      <motion.div variants={itemVariants}>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer">

          
          <ExternalLink size={20} /> Open in New Tab
        </a>
        <a
          href={resumeUrl}
          download="Resume_Prithika.pdf">

          
          <Download size={20} /> Download PDF
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}>

        
        <object
          data={resumeUrl}
          type="application/pdf">

          
          <div>
            <p>
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a
              href={resumeUrl}
              download="Resume_Prithika.pdf">

              
              <Download size={20} /> Download PDF Instead
            </a>
          </div>
        </object>
      </motion.div>
    </motion.div>);

}