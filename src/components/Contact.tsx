import { Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      value: "Sadhvikesarwanil@gmail.com",
      href: "mailto:Sadhvikesarwanil@gmail.com",
      color: "bg-primary",
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "+91 9565026518",
      href: "tel:+919565026518",
      color: "bg-blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kaushambi, UP, India",
      href: "#",
      color: "bg-mint",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sadhvi1244",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sadhvi-kesarwani/",
    },
    {
      icon: FileText,
      label: "Resume",
      href: "https://drive.google.com/file/d/1k7glcwXgFITgibcJFV1P1hulXq53CC7e/view?usp=sharing",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect in Style <span className="text-primary">✦</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a project in mind? Let's build something amazing together!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div
                  className={`${method.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
                <p className="text-sm text-muted-foreground">{method.value}</p>
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                asChild
                className="group hover:border-primary hover:bg-primary/10"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {social.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
