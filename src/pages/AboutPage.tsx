import { Helmet } from "react-helmet-async";
import { Terminal, GraduationCap, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <motion.div

      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      
      <Helmet>
        <title>About Prithika Kannan | Background & Education</title>
      </Helmet>
      
      <motion.div variants={itemVariants}>
        <Terminal size={16} />
        <span>~/prithika/about</span>
      </motion.div>

      <motion.h1 variants={itemVariants}>
        Background & Philosophy
      </motion.h1>
      
      <motion.div variants={itemVariants}>
        <p>
          I am a product-focused Software Engineer based in India, crafting data-driven experiences grounded in proven engineering traditions. 
          My technical journey began with an intense curiosity about how scalable systems could be built from the ground up to support thousands of concurrent operations seamlessly.
        </p>
        <p>
          My approach bridges analytical precision with creative problem-solving. Whether I am architecting a distributed backend system in Python and Flask, or designing an intuitive, modern frontend interface using React, I aim to build scalable, client-centric applications that align seamlessly with complex AI-driven transformation goals.
          I firmly believe that excellent code is not just functional, but highly readable, maintainable, and heavily tested. 
        </p>
        <p>
          Over the past few years, I have actively expanded my expertise into Machine Learning, recognizing that the future of software lies at the intersection of robust web infrastructure and intelligent data processing. I build systems that don't just store data, but learn from it.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2>Experience & Education</h2>
        
        <div>
          
          <motion.div
            whileHover={{ y: -5 }}>

            
            <div>
              <Briefcase size={24} />
            </div>
            <h3>RSUN Technologies</h3>
            <div>Software Engineer Intern • Present</div>
            <p>
              Contributing directly to core full-stack application development. 
              My primary responsibilities include optimizing existing backend data pipelines, minimizing database query latency, and actively participating in high-level architectural decisions to enhance overall system scalability. 
              I work closely with senior engineers to implement robust RESTful APIs and transition legacy components into modern, maintainable codebases.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}>

            
            <div>
              <GraduationCap size={24} />
            </div>
            <h3>M. Kumarasamy College of Eng.</h3>
            <div>Bachelor of Engineering • Current</div>
            <p>
              Building a rigorous foundation in computer science principles, advanced data structures, complex algorithms, and agile software engineering methodologies. 
              My coursework places heavy emphasis on systems architecture, mathematical logic for machine learning, and hands-on laboratory work where theoretical concepts are applied to real-world problems.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>);

}