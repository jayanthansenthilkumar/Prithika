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

      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
      </Helmet>
      
      <motion.div variants={itemVariants}>
        <Terminal size={16} />
        <span>~/prithika/contact</span>
      </motion.div>

      <motion.div variants={containerVariants}>
        
        {/* Left Column: Form */}
        <motion.div variants={itemVariants}>
          <h1>
            Let's Collaborate
          </h1>

          {submitted ?
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}>

            
              <div>
                <Send size={40} />
              </div>
              <h3>Message Transmitted</h3>
              <p>
                Thank you for reaching out! Your message has been securely recorded. I will review it and get back to you shortly.
              </p>
            </motion.div> :

          <form onSubmit={(e) => {e.preventDefault();setSubmitted(true);}}>
              <div>
                <div>
                  <Label>Name</Label>
                  <Input type="text" placeholder="John Doe" required />
                </div>
                <div>
                  <Label>Work Email</Label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
              </div>

              <div>
                <div>
                  <Label>Company Name</Label>
                  <Input type="text" placeholder="Tech Corp Inc." required />
                </div>
                <div>
                  <Label>Subject / Role</Label>
                  <Input type="text" placeholder="Software Engineer Position" required />
                </div>
              </div>

              <div>
                <Label>Message Details</Label>
                <textarea
                rows={4}
                placeholder="Hi Prithika, we're looking for an Engineer to join our team to work on..."
                required />

              
              </div>

              <Button type="submit" size="lg">
                <Send size={18} /> Send Message
              </Button>
            </form>
          }
        </motion.div>

        {/* Right Column: Maps and Cards */}
        <motion.div variants={containerVariants}>
          
          {/* Map Container */}
          <motion.div variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps?q=Marandahalli,+Tamil+Nadu&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marandahalli Location">

            </iframe>
            
            <div>
              <div>
                <MapPin size={24} />
              </div>
              <div>
                <h4>Global Mobility</h4>
                <p>
                  Based in India • Open to remote work across global timezones.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants}>
            <div>
              <div>
                <Mail size={24} />
              </div>
              <div>
                <div>Email</div>
                <a href="mailto:kpprithika75@gmail.com">kpprithika75@gmail.com</a>
              </div>
            </div>

            <div>
              <div>
                <MessageSquare size={24} />
              </div>
              <div>
                <div>Social Networks</div>
                <div>
                  <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <span>|</span>
                  <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>);

}