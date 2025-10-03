import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectPlaceholder from "@/assets/project-placeholder.jpg";
import redditSummaryHub from "@/assets/reddit-summary-hub.png";
import studySparkGenie from "@/assets/study-spark-genie.png";
import smallIntestineDiseaseDetector from "@/assets/small-intestine-disease-detector.jpg";
import expenseForecastingAdvisor from "@/assets/expense-forecasting-advisor.jpg";

const Projects = () => {
  const projects = [
  {
    title: "Reddit Summary Hub",
    description:
      "A web app that fetches top posts from Reddit and generates concise AI-powered summaries for quick reading.",
    tech: ["React", "Django", "PRAW", "Google Gemini API"],
    image: redditSummaryHub,
    github: "https://github.com/parth-gz/reddit-summary-hub/",
    demo: "https://reddit-summary-hub.vercel.app/",
  },
  {
    title: "Study Spark Genie",
    description:
      "RAG-based academic doubt solver that provides step-by-step solutions and explanations from uploaded PDFs and notes.",
    tech: ["Python", "LangChain", "Flask", "React"],
    image: studySparkGenie,
    github: "https://github.com/parth-gz/study-spark-genie/",
    demo: "https://studysparkgenie.vercel.app/",
  },
  /*
  {
    title: "Small Intestine Disease Detector",
    description:
      "AI-powered system that classifies small intestine images into different disease categories using deep learning.",
    tech: ["Python", "PyTorch", "YOLOv8", "Roboflow"],
    image: projectPlaceholder,
  },
  {
    title: "AI-Powered Expense Forecasting & Investment Advisor",
    description:
      "Predicts monthly spending patterns and recommends investments based on surplus cash, combining personal finance insights with predictive AI.",
    tech: ["Python", "LSTMs", "Prophet", "Flask", "React", "Plaid API"],
    image: projectPlaceholder,
  },  
  */
];


  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden card-shadow border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="default"
                    className="flex-1 gradient-primary text-white"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
