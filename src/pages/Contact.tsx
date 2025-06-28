
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to 
              bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Talk</h2>
              <p className="text-lg text-gray-700 mb-12">
                I'm always excited to take on new challenges and collaborate with 
                passionate individuals and teams. Whether you have a specific project 
                in mind or just want to explore possibilities, I'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Mail className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">john.doe@example.com</p>
                    <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <Phone className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <MapPin className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600 mb-1">New York, NY, USA</p>
                    <p className="text-sm text-gray-500">Open to remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <MessageCircle className="text-yellow-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media</h3>
                    <p className="text-gray-600 mb-1">Let's connect online</p>
                    <div className="flex gap-4 mt-3">
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                        LinkedIn
                      </a>
                      <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
                        GitHub
                      </a>
                      <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Availability Status */}
              <div className="mt-12 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-green-800">Currently Available</h3>
                </div>
                <p className="text-green-700">
                  I'm currently accepting new projects and collaborations. 
                  Let's discuss your next big idea!
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800">
                  <Clock size={16} />
                  <span className="text-sm font-medium">Response Time</span>
                </div>
                <p className="text-blue-700 text-sm mt-1">
                  I aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's your typical project timeline?</h3>
                <p className="text-gray-700">
                  Project timelines vary depending on scope and complexity. A typical website 
                  takes 2-4 weeks, while larger applications can take 2-3 months. I'll provide 
                  a detailed timeline after our initial discussion.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Do you work with international clients?</h3>
                <p className="text-gray-700">
                  Absolutely! I work with clients worldwide and am comfortable with different 
                  time zones. Most of my communication happens via email and video calls, 
                  making remote collaboration seamless.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What technologies do you specialize in?</h3>
                <p className="text-gray-700">
                  I specialize in React, TypeScript, Node.js, and modern web technologies. 
                  I'm also experienced with various databases, cloud platforms, and 
                  design tools. Check my resume for a complete list.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Do you provide ongoing support?</h3>
                <p className="text-gray-700">
                  Yes! I offer ongoing support and maintenance packages to ensure your 
                  application stays updated, secure, and performs optimally. We can 
                  discuss support options based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
