const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Bootstrap", icon: "📘" },
      ],
    },
    {
      category: "Backend & AI",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Flask", icon: "⚗️" },
        { name: "Django", icon: "👨🏿‍🦱" },
        { name: "Scikit Learn", icon: "🤖" },
        { name: "PyTorch", icon: "🔦" },
        { name: "Langchain", icon: "🔗" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "🔧" },
        { name: "Docker", icon: "🐋" },
        { name: "VS Code", icon: "💻" },
        { name: "Google Colab", icon: "📓" },
        { name: "REST APIs", icon: "🔌" },
        { name: "MySQL", icon: "🗄️" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl p-8 card-shadow border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-4 p-3 rounded-lg bg-background hover:bg-primary/5 transition-colors group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
