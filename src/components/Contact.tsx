import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="bg-apple-gray section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in opacity-0">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="w-full" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full" required />
              </div>
              <div>
                <Textarea
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
                  href="mailto:contact@example.com"
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