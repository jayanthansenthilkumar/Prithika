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
    <div >
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
        <meta name="description" content="Get in touch with Prithika Kannan for software engineering opportunities, freelance projects, or collaborations. Available via email, LinkedIn, and GitHub." />
        <meta name="keywords" content="Contact Prithika Kannan, Hire Software Engineer, Full-Stack Developer Contact, Tech Collaborations, Madurai Developer" />
      </Helmet>
      
      {/* Hero */}
      <section >
        <div >
          <div >
            <div >
              <Terminal  />
              <span>prithika/contact</span>
            </div>
            
            <h1 >
              Let's build something <span >together.</span>
            </h1>
            
            <p >
              I'm open to new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section >
        <div >
          <div >
            
            {/* Form */}
            <div >
              <div >
                <Mail  />
                <span >contact-form.tsx</span>
              </div>
              
              {submitted ? (
                <div >
                  <div >
                    <ArrowRight  />
                  </div>
                  <h3 >Message Sent</h3>
                  <p >
                    Thank you for reaching out! I will review your message and get back to you soon.
                  </p>
                </div>
              ) : (
                <div >
                  <div >
                    <Label htmlFor="name" >Full Name</Label>
                    <Input id="name" placeholder="John Doe"  />
                  </div>
                  
                  <div >
                    <Label htmlFor="email" >Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com"  />
                  </div>
                  
                  <div >
                    <Label htmlFor="message" >Message</Label>
                    <textarea 
                      id="message"
                      rows={5}
                      placeholder="Hi Prithika, I'd like to talk about..."
                      
                    />
                  </div>
                  
                  <Button 
                    onClick={() => setSubmitted(true)}
                    
                  >
                    Send Message
                  </Button>
                </div>
              )}
            </div>

            {/* Direct Contact Details */}
            <div >
              <h2 >Connect <span >Directly</span></h2>
              <p >
                Prefer to connect through other platforms? Find me here:
              </p>
              
              <div >
                <a href="tel:+919787673783" >
                  <div >
                    <div >
                      <div >
                        <Phone  />
                      </div>
                      <h3 >Phone</h3>
                    </div>
                    <p >+91 9787673783</p>
                  </div>
                </a>

                <a href="mailto:kpprithika75@gmail.com" >
                  <div >
                    <div >
                      <div >
                        <Mail  />
                      </div>
                      <h3 >Email</h3>
                    </div>
                    <p >kpprithika75@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" >
                  <div >
                    <div >
                      <div >
                        <Briefcase  />
                      </div>
                      <h3 >LinkedIn</h3>
                    </div>
                    <p >prithikakannan</p>
                  </div>
                </a>

                <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" >
                  <div >
                    <div >
                      <div >
                        <Code2  />
                      </div>
                      <h3 >GitHub</h3>
                    </div>
                    <p >prithikakannan</p>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Spacer before footer */}
      <div ></div>
    </div>
  );
}
