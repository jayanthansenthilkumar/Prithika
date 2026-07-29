import { Helmet } from "react-helmet-async";
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Terminal, MapPin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const offices = [
  {
    city: "San Francisco",
    type: "Headquarters",
    address: "500 Howard St, San Francisco, CA 94105",
    email: "sf@australai.com"
  },
  {
    city: "London",
    type: "European Engineering Hub",
    address: "100 Bishopsgate, London EC2N 4AG, UK",
    email: "london@australai.com"
  },
  {
    city: "Singapore",
    type: "APAC Operations",
    address: "Marina Bay Financial Centre, Tower 3, Singapore",
    email: "apac@australai.com"
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 bg-white rounded-sm text-xs font-mono text-gray-500 shadow-sm">
              <Terminal className="w-3 h-3" />
              <span>austral/contact</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight font-serif italic">
              Let&apos;s build something together.
            </h1>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed">
              Speak with an AI architect to discuss your use case, review our security posture, and get a technical assessment of your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Offices */}
      <section className="py-24 border-b border-gray-200 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono text-gray-500 font-semibold">contact-form.tsx</span>
              </div>
              
              {submitted ? (
                <div className="p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-sm mx-auto mb-6 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif mb-3">Message Sent</h3>
                  <p className="text-sm font-mono text-gray-600">
                    Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="p-8 md:p-12 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Full Name</Label>
                      <Input id="name" placeholder="Jane Smith" className="rounded-sm font-mono text-sm border-gray-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Company</Label>
                      <Input id="company" placeholder="Acme Corp" className="rounded-sm font-mono text-sm border-gray-200" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Work Email</Label>
                    <Input id="email" type="email" placeholder="jane@acme.com" className="rounded-sm font-mono text-sm border-gray-200" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="usecase" className="text-xs font-mono text-gray-700 uppercase tracking-wider">Use Case</Label>
                    <textarea 
                      id="usecase"
                      rows={4}
                      placeholder="Describe your AI project or challenge..."
                      className="w-full rounded-sm font-mono text-sm border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => setSubmitted(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-mono text-xs shadow-sm border border-blue-700"
                  >
                    Send Message
                  </Button>
                  
                  <p className="text-[10px] font-mono text-gray-400 text-center">
                    By submitting, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. We typically respond within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Global Offices</h2>
              <p className="text-sm font-mono text-gray-600 mb-8">
                We operate globally to attract top talent and stay close to our enterprise clients.
              </p>
              
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white border border-gray-200 shadow-sm rounded-sm p-6 hover:border-gray-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <h3 className="text-base font-bold text-gray-900 font-serif">{office.city}</h3>
                    </div>
                    <p className="text-xs font-mono text-blue-600 mb-4 uppercase tracking-wider">{office.type}</p>
                    <p className="text-xs font-mono text-gray-600 leading-relaxed mb-2">{office.address}</p>
                    <p className="text-xs font-mono text-gray-500">{office.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
