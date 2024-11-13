import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm(
        'service_id', // You'll need to replace this with your EmailJS service ID
        'template_id', // You'll need to replace this with your EmailJS template ID
        form.current!,
        'public_key' // You'll need to replace this with your EmailJS public key
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="bg-apple-gray section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in opacity-0">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input name="user_name" placeholder="Your Name" className="w-full" required />
              </div>
              <div>
                <Input name="user_email" type="email" placeholder="Your Email" className="w-full" required />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-apple-blue hover:bg-apple-blue-light text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through the form or connect with me on social media.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:arthur.gagniare@efrei.net"
                  className="p-3 bg-white rounded-full hover:bg-apple-blue hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-apple-blue hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-apple-blue hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;