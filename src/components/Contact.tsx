
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">New York, NY, USA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
