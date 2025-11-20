import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import jobPortalImage from "@/assets/job-portal.jpg";
import chatAppImage from "@/assets/chat-app.jpg";
import collabverseImage from "@/assets/collabverse.jpg";
import ochiiCloneImage from "@/assets/ochiImage.png";
import HotelImage from "@/assets/HotelImg.png";

const FeaturedWork = () => {
  const projects = [
    {
      title: "Job Portal Web Application",
      description:
        "Full-stack job portal enabling recruiters to post jobs and candidates to apply with secure authentication. RESTful APIs for job postings, applications, and approval workflows.",
      image: jobPortalImage,
      tags: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk Auth",
      ],
      liveUrl: "https://job-protal-site.vercel.app/",
      githubUrl: "https://github.com/sadhvi1244/JobProtal01",
      gradient: "from-primary/20 to-purple-light/20",
    },
    {
      title: "Chat Web Application",
      description:
        "Real-time chat application with instant messaging, image sharing, online/offline status, and profile updates. Deployed on Vercel with MongoDB Atlas.",
      image: chatAppImage,
      tags: ["MERN Stack", "Socket.io", "Cloudinary"],
      liveUrl: "https://chat-web-app-sand.vercel.app/",
      githubUrl: "https://github.com/sadhvi1244/Chat_Web_App",
      gradient: "from-blue/20 to-primary/20",
    },

    {
      title: "Hotel Booking Website",
      description:
        "A responsive, multipage hotel booking platform for The Pride Hotel. Project is live in production, currently used by real customers for booking rooms and meals. ",
      image: HotelImage,
      tags: ["React.js", "Tailwind CSS", "Material UI", "Framer Motion"],
      liveUrl: "https://thepridehotel.in/",
      githubUrl: "",
      gradient: "from-blue/20 to-primary/20",
    },

    {
      title: "CollabVerse",
      description:
        "Collaborative platform connecting creators and contributors for real-world projects. Awarded Best UI/UX at HackDiwas hackathon among 60+ teams.",
      image: collabverseImage,
      tags: ["MERN Stack", "Socket.io", "UI Libraries"],
      liveUrl: "https://collabverse-final-main-1.onrender.com/",
      githubUrl: "https://github.com/sadhvi1244/CollabVerse-Final-main",
      gradient: "from-mint/20 to-blue/20",
    },
    {
      title: "Ochii Clone",
      description:
        "Developed a frontend clone of the Ochii website to strengthen skills in React.js and UI/UX design.",
      image: ochiiCloneImage,
      tags: ["React.js", "Tailwind CSS", "Framer-motion", "Locomotive scroll"],
      liveUrl: "https://ochiilclone1.netlify.app/",
      githubUrl: "https://github.com/sadhvi1244/ochii",
      gradient: "from-mint/20 to-blue/20",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects that currently display design,
            development, and delivering real-world solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}
                ></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links - Fixed with working click handlers */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn"
                    onClick={() =>
                      window.open(
                        project.liveUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn"
                    onClick={() =>
                      window.open(
                        project.githubUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
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

export default FeaturedWork;
