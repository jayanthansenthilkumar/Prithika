import { Helmet } from "react-helmet-async";
import { Terminal, Send, MapPin, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-6xl mx-auto pt-10 pb-24"
    >
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
      </Helmet>
      
      <div className="mb-12">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 w-fit mb-6">
          <Terminal size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">~/contact</span>
        </motion.div>
      </div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column: Form */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-zinc-950 dark:text-white transition-colors">
            Let's <span className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Collaborate.</span>
          </h1>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-3xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px] border-emerald-500/20"
            >
              <div className="w-20 h-20 rounded-full glass bg-emerald-500/10 flex items-center justify-center mb-6">
                <Send size={40} className="text-emerald-500 dark:text-emerald-400 ml-1" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-zinc-950 dark:text-white">Message Transmitted</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-md">
                Thank you for reaching out! Your message has been securely recorded. I will review it and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass-card rounded-3xl p-8 md:p-10 flex-1 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-zinc-700 dark:text-zinc-400">Name</Label>
                  <Input type="text" placeholder="John Doe" required className="bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10 h-12 focus-visible:ring-indigo-500 text-zinc-950 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-zinc-700 dark:text-zinc-400">Work Email</Label>
                  <Input type="email" placeholder="john@company.com" required className="bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10 h-12 focus-visible:ring-indigo-500 text-zinc-950 dark:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-zinc-700 dark:text-zinc-400">Company Name</Label>
                  <Input type="text" placeholder="Tech Corp Inc." required className="bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10 h-12 focus-visible:ring-indigo-500 text-zinc-950 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-zinc-700 dark:text-zinc-400">Subject / Role</Label>
                  <Input type="text" placeholder="Software Engineer Position" required className="bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10 h-12 focus-visible:ring-indigo-500 text-zinc-950 dark:text-white" />
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <Label className="text-zinc-700 dark:text-zinc-400">Message Details</Label>
                <textarea
                  className="w-full flex-1 min-h-[150px] rounded-xl bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 text-zinc-950 dark:text-white placeholder:text-zinc-500 resize-none"
                  placeholder="Hi Prithika, we're looking for an Engineer to join our team to work on..."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 rounded-full mt-2">
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Maps and Cards */}
        <motion.div variants={containerVariants} className="flex flex-col gap-6">
          
          {/* Map Container */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl overflow-hidden relative h-[300px] lg:h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=Marandahalli,+Tamil+Nadu&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marandahalli Location"
              className="absolute inset-0 grayscale contrast-125 dark:invert-[.9] dark:contrast-[.8]"
            />
            
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-4 bg-white/80 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-white mb-1 transition-colors">Global Mobility</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 transition-colors">
                  Based in India • Open to remote work globally.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center bg-indigo-500/10 border border-black/5 dark:border-white/10">
                <Mail size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1 transition-colors">Email</div>
                <a href="mailto:kpprithika75@gmail.com" className="text-lg font-bold text-zinc-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  kpprithika75@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center bg-purple-500/10 border border-black/5 dark:border-white/10">
                <MessageSquare size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1 transition-colors">Social Networks</div>
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-950 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">LinkedIn</a>
                  <span className="text-zinc-400 dark:text-zinc-600">|</span>
                  <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="font-bold text-zinc-950 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}