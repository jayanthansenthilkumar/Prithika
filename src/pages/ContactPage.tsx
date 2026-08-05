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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div 
      className="max-w-6xl w-full pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
      </Helmet>
      
      <motion.div variants={itemVariants} className="flex items-center gap-3 text-[var(--text-tertiary)] mb-8 bg-[var(--bg-card)] w-fit px-4 py-2 rounded-full border border-[var(--border-subtle)] shadow-sm">
        <Terminal size={16} />
        <span className="text-sm font-mono tracking-tight">~/prithika/contact</span>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
        
        {/* Left Column: Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3 bg-[var(--bg-card)] p-8 md:p-10 rounded-3xl border border-[var(--border-subtle)] shadow-sm flex flex-col">
          <h1 className="font-heading text-4xl font-bold text-[var(--text-primary)] mb-8 tracking-tight">
            Let's Collaborate
          </h1>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="text-center py-20 flex flex-col items-center justify-center flex-1"
            >
              <div className="w-20 h-20 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex justify-center items-center mb-6">
                <Send size={40} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] mb-4">Message Transmitted</h3>
              <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto">
                Thank you for reaching out! Your message has been securely recorded. I will review it and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input type="text" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label>Work Email</Label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input type="text" placeholder="Tech Corp Inc." required />
                </div>
                <div className="space-y-2">
                  <Label>Subject / Role</Label>
                  <Input type="text" placeholder="Software Engineer Position" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Message Details</Label>
                <textarea 
                  rows={4}
                  placeholder="Hi Prithika, we're looking for an Engineer to join our team to work on..."
                  required
                  className="flex w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-main)] px-3 py-2 text-sm text-[var(--text-primary)] transition-all duration-300 placeholder:text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] hover:border-[var(--border-hover)] resize-y min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 rounded-xl gap-2 text-[15px]">
                <Send size={18} /> Send Message
              </Button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Maps and Cards */}
        <motion.div variants={containerVariants} className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Map Container */}
          <motion.div variants={itemVariants} className="relative flex-1 min-h-[300px] rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-sm">
            <iframe 
              src="https://www.google.com/maps?q=Marandahalli,+Tamil+Nadu&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Marandahalli Location"
              className="absolute inset-0"
            ></iframe>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[var(--bg-main)]/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[var(--border-subtle)] flex items-start gap-4">
              <div className="bg-[var(--accent)]/10 text-[var(--accent)] p-2.5 rounded-xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-[var(--text-primary)] text-lg mb-1">Global Mobility</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Based in India • Open to remote work across global timezones.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-5 bg-[var(--bg-card)] p-5 rounded-2xl border border-[var(--border-subtle)] shadow-sm hover:shadow-[var(--shadow-soft)] transition-all">
              <div className="p-3 bg-[var(--accent)]/10 rounded-xl text-[var(--accent)]">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:kpprithika75@gmail.com" className="text-[15px] font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">kpprithika75@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[var(--bg-card)] p-5 rounded-2xl border border-[var(--border-subtle)] shadow-sm hover:shadow-[var(--shadow-soft)] transition-all">
              <div className="p-3 bg-[var(--accent)]/10 rounded-xl text-[var(--accent)]">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Social Networks</div>
                <div className="flex gap-4 text-[15px] font-medium mt-1">
                  <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">LinkedIn</a>
                  <span className="text-[var(--border-subtle)]">|</span>
                  <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}
