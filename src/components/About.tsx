import { Code2, Database, Layout, Zap } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React.js, Tailwind CSS",
      color: "bg-coral",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Express.js, MongoDB",
      color: "bg-blue",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Best UI/UX Award Winner",
      color: "bg-mint",
    },
    {
      icon: Zap,
      title: "Full Stack Apps",
      description: "MERN Stack Specialist",
      color: "bg-primary",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, <br />
              I'm <span className="text-primary">Sadhvi Kesarwani</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A Final year Computer Science and Engineering student with
              hands-on experience in
              <span className="text-primary font-semibold">
                {" "}
                Full Stack (MERN)
              </span>{" "}
              development and a strong foundation in Data Structures and
              Algorithms.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Built scalable, responsive web applications, recognized in
              hackathons for innovative, user‑focused UI/UX design. Former
              Intern at Adivid Technologies, contributing to production-grade
              applications actively used by customers.{" "}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>200+ DSA Problems Solved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Best UI/UX Award</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>CGPA: 7.69/10</span>
              </div>
            </div>
          </div>

          {/* Placeholder for photo - can be replaced */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-light/20 border-2 border-primary/30 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Code2 className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <img src="placeholder.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.color} p-6 rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <Icon className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
