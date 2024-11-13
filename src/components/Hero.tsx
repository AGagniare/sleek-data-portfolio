import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center section-padding relative">
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Data Engineer & <span className="gradient-text">Analytics Expert</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
          Transforming complex data challenges into elegant, scalable solutions
        </p>
        <Button
          onClick={scrollToProjects}
          className="bg-apple-blue hover:bg-apple-blue-light text-white rounded-full px-8 py-6 text-lg transition-all duration-300"
        >
          View Projects <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;