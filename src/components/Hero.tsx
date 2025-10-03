import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/billi.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Parth Gaikwad</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Data Scientist | AI Enthusiast | Problem Solver
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about exploring data science, machine learning, and AI, while occasionally taking a side quest into building web solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="gradient-primary text-white font-semibold px-8 py-6 text-lg glow-effect hover:scale-105 transition-transform"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-2 hover:bg-primary/10"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Ppf-0tYCNR297GFm8ZpGPHNZWugae_kM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-full blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Parth Gaikwad"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 card-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
