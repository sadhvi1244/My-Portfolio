const Technologies = () => {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "Java",
    "Tailwind CSS",
    "Bootstrap",
    "HTML/CSS",
    "Git/GitHub",
    "MySQL",
    "Socket.io",
    "Cloudinary",
    "Clerk Auth",
    "REST APIs",
    "Vercel",
  ];

  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies & Tools</h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
