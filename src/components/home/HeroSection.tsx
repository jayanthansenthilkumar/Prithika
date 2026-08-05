import { ArrowRight, Globe, Server, BrainCircuit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function HeroSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible">

      
      <motion.div variants={itemVariants}>
        <h1>
          <span>
            <Sparkles size={40} strokeWidth={2.5} />
          </span>
          Hi, I'm Prithika.
        </h1>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <p>
          I'm a <strong>Product-focused Software Engineer</strong> crafting data-driven experiences grounded in proven engineering traditions. 
          I specialize in distributed systems, full-stack development, and integrating machine learning models into scalable architectures.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button asChild size="lg">
          <Link to="/projects">
            Explore Work <ArrowRight size={18} />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/contact">
            Get in touch
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}>

        
        <div>
          <div>
            <Globe size={28} strokeWidth={2} />
          </div>
          <h3>Full-Stack Engineering</h3>
          <p>
            Building robust web applications using React, Python, and Flask. I emphasize seamless user experiences powered by scalable server-side architecture.
          </p>
        </div>

        <div>
          <div>
            <Server size={28} strokeWidth={2} />
          </div>
          <h3>Data-Driven Systems</h3>
          <p>
            Designing highly available backend architectures and optimizing relational databases to handle complex queries securely and efficiently.
          </p>
        </div>

        <div>
          <div>
            <BrainCircuit size={28} strokeWidth={2} />
          </div>
          <h3>Applied Machine Learning</h3>
          <p>
            Engineering predictive models using Pandas & Scikit-Learn. I bridge the gap between data science research and tangible user-facing features.
          </p>
        </div>
      </motion.div>
    </motion.section>);

}