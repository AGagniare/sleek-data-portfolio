import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Code } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-apple-gray section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in opacity-0">
          Get in Touch
        </h2>
        <div className="flex flex-col items-center space-y-8">
          <p className="text-lg leading-relaxed max-w-2xl text-center animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through email or connect with me on social media.
          </p>
          <div className="flex space-x-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <a
              href="mailto:arthur.gagniare@efrei.net"
              className="p-4 bg-white rounded-full hover:bg-apple-blue hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-gagniare-6799761b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full hover:bg-apple-blue hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/Arthur_gnar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full hover:bg-apple-blue hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <Code className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;