import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "AI Genius LLP",
      period: "July 2025 - Present",
      achievements: [
        "Developed an ML-based electricity demand forecasting system using time series modeling (LSTM & Transformer)",
        "Achieved 96% R2 and 6% MAPE for single day horizon forecasting.",
        "Worked on data preprocessing, feature engineering, and building scalable models for state-level utility forecasting.",
      ],
    },
    /*
    {
      role: "AI Research Intern",
      company: "AI Solutions Lab",
      period: "Jun 2023 - Dec 2023",
      achievements: [
        "Worked on machine learning models for natural language processing",
        "Implemented data preprocessing pipelines using Python and TensorFlow",
        "Contributed to research paper on sentiment analysis algorithms",
      ],
    },
    {
      role: "Web Development Volunteer",
      company: "Local NGO - Community Connect",
      period: "Mar 2023 - May 2023",
      achievements: [
        "Built and maintained website for non-profit organization",
        "Trained team members on content management system",
        "Improved website accessibility and SEO performance",
      ],
    },
    */
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
