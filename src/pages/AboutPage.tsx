import { Helmet } from "react-helmet-async";
import { Terminal, GraduationCap, Briefcase, Code2, Download, Award, Cpu } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full pt-6 md:pt-10 pb-12 md:pb-20"
    >
      <Helmet>
        <title>About Prithika Kannan | Software Engineer</title>
        <meta name="description" content="Product-focused Software Engineer crafting data-driven experiences." />
        <meta property="og:title" content="About Prithika Kannan | Software Engineer" />
        <meta property="og:description" content="Product-focused Software Engineer crafting data-driven experiences." />
      </Helmet>
      
      <div className="mb-10 md:mb-12">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 md:mb-6">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit">
            <Terminal size={14} className="text-indigo-600 dark:text-indigo-400 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/about-prithika</span>
          </motion.div>
          
          <motion.a 
            href="/Resume_Prithika.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-300 w-fit shadow-md border border-transparent dark:border-white/20"
          >
            <Download size={14} className="md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-bold tracking-wide">Resume</span>
          </motion.a>
        </div>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-zinc-950 dark:text-white transition-colors">
          Product-focused <span className="text-zinc-500 dark:text-zinc-500">Software Engineer</span> crafting<br className="hidden md:block" /> <span className="text-zinc-700 dark:text-zinc-300">data-driven experiences.</span>
        </motion.h1>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-4 md:auto-rows-[minmax(280px,_auto)]">
        
        {/* Main Bio - Large */}
        <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-center md:col-span-4 lg:col-span-2 md:row-span-1 order-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-zinc-950 dark:text-white transition-colors">
            <Code2 className="text-indigo-600 dark:text-indigo-400 w-5 h-5 sm:w-6 sm:h-6" /> Narrative
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed text-balance transition-colors">
            I am a product-focused Software Engineer who bridges <span className="text-zinc-900 dark:text-white font-medium">analytical focus with creative problem-solving</span>. I thrive on architecting robust backend systems and designing intuitive frontend interfaces. Whether I am optimizing data pipelines or mapping out seamless user journeys, my ultimate goal is to build scalable, high-performance applications that deliver exceptional value.
          </p>
        </motion.div>

        {/* Experience - Tall */}
        <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-6 sm:p-8 flex flex-col md:col-span-2 lg:col-span-1 md:row-span-1 justify-between order-2 lg:order-3">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
              <Briefcase className="text-purple-600 dark:text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Experience</h2>
          </div>
          
          <div className="flex-1 flex flex-col gap-6">
            <div className="group relative pl-5 sm:pl-6 border-l-2 border-black/10 dark:border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-purple-500 group-hover:scale-125 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mb-1 transition-colors">Software Engineer</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-medium mb-3 transition-colors">
                <span>RSUN Technologies</span>
                <span className="text-zinc-400 hidden sm:inline">•</span>
                <span className="text-zinc-500 sm:text-purple-700 sm:dark:text-purple-300">Industrial Experience</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors">
                Engineered a scalable, distributed backend infrastructure leveraging PHP and SQL. Designed and implemented robust RESTful APIs to facilitate seamless data communication. Successfully optimized database queries and data pipelines, resulting in a remarkable <span className="text-purple-600 dark:text-purple-400 font-semibold">30% reduction in backend latency</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education - Tall */}
        <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-6 sm:p-8 flex flex-col md:col-span-2 lg:col-span-1 md:row-span-1 justify-between order-3 lg:order-4">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
              <GraduationCap className="text-pink-600 dark:text-pink-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Education</h2>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="group relative pl-5 sm:pl-6 border-l-2 border-black/10 dark:border-white/10 hover:border-pink-500/50 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-pink-500 group-hover:scale-125 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mb-1 transition-colors">B.Tech - Information Technology</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-pink-700 dark:text-pink-300 font-medium mb-3 transition-colors">
                <span>M. Kumarasamy College of Engineering</span>
                <span className="text-zinc-400 hidden sm:inline">•</span>
                <span className="text-zinc-500 sm:text-pink-700 sm:dark:text-pink-300">2024 - 2028</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm transition-colors mb-4">
                Developing a strong foundation in modern software engineering principles, advanced data structures, and system architecture.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-pink-50 dark:bg-pink-500/10 text-pink-700 dark:text-pink-400 text-xs sm:text-sm font-semibold border border-pink-100 dark:border-pink-900/30">
                CGPA: 7.900
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Skills - Wide */}
        <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-6 sm:p-8 md:col-span-4 lg:col-span-1 md:row-span-1 order-4 lg:order-2">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
              <Cpu className="text-emerald-600 dark:text-emerald-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Technical Arsenal</h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {['Python', 'HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL', 'REST APIs'].map((skill) => (
              <span key={skill} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition-colors hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-400 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications - Wide */}
        <motion.div variants={itemVariants} className="glass-card rounded-[2rem] p-6 sm:p-8 md:col-span-4 lg:col-span-1 md:row-span-1 flex flex-col justify-center order-5">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center border border-black/5 dark:border-white/10">
              <Award className="text-amber-600 dark:text-amber-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white transition-colors">Achievements</h2>
          </div>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-start gap-3 group">
              <div className="w-2 h-2 mt-1.5 sm:mt-2 rounded-full bg-amber-500/50 group-hover:bg-amber-500 flex-shrink-0 transition-colors" />
              <div>
                <h4 className="text-sm sm:text-base text-zinc-900 dark:text-white font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">GitHub Foundations Certification</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-0.5">Validated expertise in core Git and GitHub functionalities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-2 h-2 mt-1.5 sm:mt-2 rounded-full bg-amber-500/50 group-hover:bg-amber-500 flex-shrink-0 transition-colors" />
              <div>
                <h4 className="text-sm sm:text-base text-zinc-900 dark:text-white font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Finalist - SRMIST Hackathon</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-0.5">Demonstrated rapid prototyping and creative problem-solving under pressure.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}