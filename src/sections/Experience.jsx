const experiences = [
  {
    period: "May 2022 — Feb 2024",
    role: "Frontend Developer - Contract",
    company: "United Overseas Bank (UOB) - Singapore",
    description:
      "Contributed to the development of UOB Infinity, a corporate banking platform, by building and enhancing application features aligned with client requirements. Gained strong domain expertise in regional payment systems across SG, MY, HK, VN, and other markets, while supporting transitions to GST (Global Soft Token) and BoatSize teams with region-specific customizations. Collaborated closely with other teams to scope requirements, design optimal integrations, and deliver scalable web apps in a fast-paced Agile environment.",
    technologies: ["React", "Redux", "Material UI", "Jest"],
    current: true,
  },
  {
    period: "Jun 2019 — Jun 2021",
    role: "Software Engineer",
    company: "LTI Mindtree Ltd. - India",
    description:
      "Built and maintained scalable Single Page Applications (SPAs) using React.js, seamlessly integrating frontend interfaces with backend systems, while delivering robust web solutions tailored for CATALINA's Business Insights and Vault users.",
    technologies: ["React", "Redux", "Jest", "Bootstrap"],
    current: false,
  },
  {
    period: "Jun 2018 — May 2019",
    role: "Software Engineer - Trainee",
    company: "LTI Mindtree Ltd. - India",
    description:
      "Completed intensive training in basic programming and Web Technologies, with a focus on React JS, at Mindtree's specialized Kalinga Training Campus in Bhuvneshwar, Orissa, India",
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
    current: false,
  },
  {
    period: "Jun 2017 — Dec 2017",
    role: "Student Intern",
    company: "Smart India Hackathon - Internship",
    description:
      "Developed - an Android mobile application aimed at improving elderly well-being. App features in Enhancing cognitive skills in older adults, promoting physical & mental strength, and provides viable solutions for healthy aging.",
    technologies: ["Java", "XML", "Android", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            efficient software engineer building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className=" text-xs px-3 py-1 bg-surface rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
