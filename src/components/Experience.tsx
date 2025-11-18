import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const education = [
    {
      institution: "United University, Prayagraj",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2022 – 2026",
      grade: "CGPA: 7.69/10 (3rd Year)",
      icon: GraduationCap,
    },
    {
      institution: "MGM KPS Bharwari (CBSE Board)",
      degree: "Intermediate (PCM)",
      period: "2022",
      grade: "",
      icon: GraduationCap,
    },
    {
      institution: "MGM KPS Bharwari (CBSE Board)",
      degree: "High School",
      period: "2020",
      grade: "",
      icon: GraduationCap,
    },
  ];

  const internship = {
    company: "Adivid Technologies",
    role: "Web Development Internship",
    period: "Feb 2025 – May 2025",
    type: "Remote",
    responsibilities: [
      "Led the complete frontend from scratch to build a responsive, multipage hotel booking platform for The Pride Hotel.",
      "Project is live in production, currently used by real customers for booking rooms and meals.",
      "Tech stack: React.js, Tailwind CSS, Framer Motion, Material UI",
    ],
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="text-primary">Experience</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-4 before:h-[calc(100%-2rem)] before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-purple-light">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-4 border-background">
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                      <div className="flex items-start gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-primary font-semibold">{edu.period}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{edu.institution}</h4>
                      <p className="text-muted-foreground mb-1">{edu.degree}</p>
                      {edu.grade && (
                        <p className="text-sm text-primary font-semibold">{edu.grade}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Internship</h3>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-purple-light/10 border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{internship.company}</h4>
                      <p className="text-primary font-semibold">{internship.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{internship.period}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    {internship.type}
                  </div>
                </div>

                <div className="space-y-3">
                  {internship.responsibilities.map((resp, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
