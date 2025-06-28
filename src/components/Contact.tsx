
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create 
            something amazing together. I'm always excited to collaborate with passionate individuals and teams.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. 
              Whether you have a question, want to discuss a project, or just want to say hello, 
              I'd love to hear from you!
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Email</h4>
                  <p className="text-gray-300">john.doe@example.com</p>
                  <p className="text-gray-400 text-sm">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-gradient-to-br from-green-600 to-teal-600 p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Location</h4>
                  <p className="text-gray-300">New York, NY, USA</p>
                  <p className="text-gray-400 text-sm">Open to remote work</p>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="gradient-border card-hover">
                <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                  <Clock className="mx-auto mb-3 text-blue-400" size={32} />
                  <h4 className="font-bold text-white mb-2">Response Time</h4>
                  <p className="text-gray-300 text-sm">Usually within 24 hours</p>
                </div>
              </div>
              <div className="gradient-border card-hover">
                <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                  <MessageCircle className="mx-auto mb-3 text-green-400" size={32} />
                  <h4 className="font-bold text-white mb-2">Free Consultation</h4>
                  <p className="text-gray-300 text-sm">30-minute discovery call</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="gradient-border card-hover">
            <div className="bg-gray-800/50 p-8 rounded-lg shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Send className="text-purple-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Send Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name *</label>
                    <Input 
                      placeholder="Your full name" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                    <Input 
                      placeholder="your.email@example.com" 
                      type="email" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20" 
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                    <Input 
                      placeholder="+1 (555) 123-4567" 
                      type="tel"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Budget Range</label>
                    <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:ring-blue-500/20">
                      <option value="">Select budget</option>
                      <option value="< $5k">Less than $5,000</option>
                      <option value="$5k - $15k">$5,000 - $15,000</option>
                      <option value="$15k - $30k">$15,000 - $30,000</option>
                      <option value="> $30k">More than $30,000</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject *</label>
                  <Input 
                    placeholder="Project discussion, collaboration, etc." 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20" 
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <Textarea 
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    rows={6} 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none" 
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <input type="checkbox" id="newsletter" className="rounded border-gray-600 bg-gray-700" />
                  <label htmlFor="newsletter" className="text-gray-300 text-sm">
                    Subscribe to my newsletter for updates and tips
                  </label>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
                
                <p className="text-gray-400 text-sm text-center mt-4">
                  I'll get back to you within 24 hours. Let's create something amazing together! 🚀
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">What Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "John delivered an exceptional website that exceeded our expectations. 
                  Professional, creative, and always responsive."
                </p>
                <p className="text-white font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-sm">CEO, TechStart Inc.</p>
              </div>
            </div>
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Outstanding work! The attention to detail and user experience 
                  made our platform stand out from competitors."
                </p>
                <p className="text-white font-semibold">Mike Chen</p>
                <p className="text-gray-400 text-sm">Product Manager, InnovateX</p>
              </div>
            </div>
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Incredible developer! Fast delivery, clean code, and amazing 
                  communication throughout the entire project."
                </p>
                <p className="text-white font-semibold">Emma Rodriguez</p>
                <p className="text-gray-400 text-sm">Founder, Digital Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
