import { Helmet } from "react-helmet-async";
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Terminal, Mail, ArrowRight, MapPin, Code2, Briefcase, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pt-14">
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
        <meta name="description" content="Get in touch with Prithika Kannan for software engineering opportunities, freelance projects, or collaborations. Available via email, LinkedIn, and GitHub." />
        <meta name="keywords" content="Contact Prithika Kannan, Hire Software Engineer, Full-Stack Developer Contact, Tech Collaborations, Madurai Developer" />
      </Helmet>
      
      {/* Hero */}
      <section className="pt-24 pb-16 border-b-[3px] border-foreground bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border-[3px] border-foreground rounded-md bg-background text-xs font-mono font-bold uppercase text-foreground shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 transition-transform">
              <Terminal className="w-4 h-4" />
              <span>prithika/contact</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter font-heading uppercase leading-tight">
              Let's build something <span className="bg-background px-2 border-[3px] border-foreground rounded-md shadow-[4px_4px_0px_0px_var(--color-foreground)] inline-block">together.</span>
            </h1>
            
            <p className="text-lg text-foreground font-mono font-bold leading-relaxed border-[3px] border-foreground rounded-xl bg-background p-4 shadow-brutal">
              I'm open to new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-background border-[3px] border-foreground shadow-brutal-lg rounded-xl overflow-hidden h-full flex flex-col">
              <div className="px-4 py-3 bg-foreground text-background border-b-[3px] border-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">contact-form.tsx</span>
              </div>
              
              {submitted ? (
                <div className="p-8 md:p-12 text-center flex-grow flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-primary border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] rounded-md mb-8 flex items-center justify-center animate-bounce">
                    <ArrowRight className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground font-heading uppercase mb-4">Message Sent</h3>
                  <p className="text-sm font-mono font-bold text-foreground">
                    Thank you for reaching out! I will review your message and get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="p-8 md:p-12 space-y-8 flex-grow flex flex-col">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-black font-heading text-foreground uppercase tracking-wider">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="rounded-md font-mono font-bold text-sm border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] focus-visible:ring-0 focus-visible:shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-shadow h-12" />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-black font-heading text-foreground uppercase tracking-wider">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-md font-mono font-bold text-sm border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] focus-visible:ring-0 focus-visible:shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-shadow h-12" />
                  </div>
                  
                  <div className="space-y-3 flex-grow flex flex-col">
                    <Label htmlFor="message" className="text-sm font-black font-heading text-foreground uppercase tracking-wider">Message</Label>
                    <textarea 
                      id="message"
                      rows={5}
                      placeholder="Hi Prithika, I'd like to talk about..."
                      className="w-full rounded-md font-mono font-bold text-sm border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] focus:outline-none focus:shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-shadow px-4 py-3 resize-none flex-grow"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => setSubmitted(true)}
                    className="w-full bg-primary border-[3px] border-foreground text-foreground rounded-md font-black font-heading text-lg uppercase shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-14 mt-4"
                  >
                    Send Message
                  </Button>
                </div>
              )}
            </div>

            {/* Direct Contact Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-black text-foreground mb-6 font-heading uppercase tracking-tighter">Connect <span className="bg-primary px-2 border-[3px] border-foreground rounded-md shadow-[2px_2px_0px_0px_var(--color-foreground)]">Directly</span></h2>
              <p className="text-sm font-mono font-bold text-foreground mb-10 border-l-[3px] border-foreground pl-4">
                Prefer to connect through other platforms? Find me here:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="tel:+919787673783" className="block group">
                  <div className="bg-background border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] rounded-xl p-6 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[8px_8px_0px_0px_var(--color-foreground)] transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 border-[3px] border-foreground rounded-md bg-primary shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                        <Phone className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="text-xl font-black text-foreground font-heading uppercase">Phone</h3>
                    </div>
                    <p className="text-sm font-mono font-bold text-foreground bg-primary rounded-sm inline-block px-2 border-[3px] border-foreground">+91 9787673783</p>
                  </div>
                </a>

                <a href="mailto:kpprithika75@gmail.com" className="block group">
                  <div className="bg-background border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] rounded-xl p-6 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[8px_8px_0px_0px_var(--color-foreground)] transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 border-[3px] border-foreground rounded-md bg-primary shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                        <Mail className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="text-xl font-black text-foreground font-heading uppercase">Email</h3>
                    </div>
                    <p className="text-sm font-mono font-bold text-foreground bg-primary rounded-sm inline-block px-2 border-[3px] border-foreground break-all">kpprithika75@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-background border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] rounded-xl p-6 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[8px_8px_0px_0px_var(--color-foreground)] transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 border-[3px] border-foreground rounded-md bg-primary shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                        <Briefcase className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="text-xl font-black text-foreground font-heading uppercase">LinkedIn</h3>
                    </div>
                    <p className="text-sm font-mono font-bold text-foreground bg-primary rounded-sm inline-block px-2 border-[3px] border-foreground break-all">prithikakannan</p>
                  </div>
                </a>

                <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="bg-background border-[3px] border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] rounded-xl p-6 group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[8px_8px_0px_var(--color-foreground)] transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 border-[3px] border-foreground rounded-md bg-primary shadow-[2px_2px_0px_0px_var(--color-foreground)]">
                        <Code2 className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="text-xl font-black text-foreground font-heading uppercase">GitHub</h3>
                    </div>
                    <p className="text-sm font-mono font-bold text-foreground bg-primary rounded-sm inline-block px-2 border-[3px] border-foreground break-all">prithikakannan</p>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
