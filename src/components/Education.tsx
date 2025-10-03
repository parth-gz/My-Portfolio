import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Engineering",
    university: "Sanjivani College of Engineering, Kopargaon",
    year: "2022 - 2026",
    gpa: "8.8/10.0",
  };

  const certifications = [
    "IBM - Getting started with enterprise data science",
    "IBM - Journey to Cloud: Envisioning your solutions",
    "NPTEL - Data Science for Engineers",
    "NPTEL - Introduction to Industry 4.0 and Industrial Internet of Things",
    "NPTEL - Privacy and Security in Online Social Media",
  ];

  const achievements = [
    {
      title: "Best Workshop Performer",
      description: "Excellence in Hyperspectral imaging Workshop held by National Chung Cheng University",
    },
    /*
    {
      title: "Dean's List",
      description: "Consistently maintained high academic performance",
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to popular React libraries",
    },
    */
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <div className="bg-card rounded-2xl p-8 card-shadow border border-border animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                <p className="text-lg text-primary font-medium mb-2">
                  {education.university}
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span>{education.year}</span>
                  <span>•</span>
                  <span>GPA: {education.gpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-2xl p-8 card-shadow border border-border animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background hover:bg-primary/5 transition-colors"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 card-shadow border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">🏆</span>
                  <h4 className="font-bold text-lg">{achievement.title}</h4>
                </div>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
