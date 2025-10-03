import { Code2, Sparkles, Target, Zap } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "Thinking outside the box to solve complex problems",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that matter",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I have a strong background in computer science and a passion for artificial intelligence, machine learning, and modern web technologies. 
                I enjoy building responsive, user-friendly applications that solve real-world problems while being visually appealing and functional. 
                My approach combines curiosity, analytical thinking, and hands-on experience to deliver meaningful digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                While my main focus is AI and data-driven projects, I occasionally dive into development just for fun, turning ideas into working projects and learning along the way
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 card-shadow border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <strength.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
