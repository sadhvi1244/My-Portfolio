import {
  Award,
  Code,
  Trophy,
  Star,
  CheckCircle2,
  Award as Badge,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Best UI/UX Award",
      description:
        "HackDiwas Hackathon - Intra-college competition with 60+ teams",
      badge: "Winner",
      color: "from-coral to-coral/70",
      iconColor: "text-coral",
    },
    {
      icon: Code,
      title: "200+ DSA Problems Solved",
      description: "Across LeetCode, GeeksforGeeks, and HackerRank platforms",
      badge: "Coding",
      color: "from-blue to-blue/70",
      iconColor: "text-blue",
    },
    {
      icon: Star,
      title: "5 Stars Java Rating",
      description: "HackerRank - Demonstrated excellence in Java programming",
      badge: "Expert",
      color: "from-mint to-mint/70",
      iconColor: "text-mint",
    },
    {
      icon: Award,
      title: "Top 10 Finalist",
      description: "U-Hack 2.0 Hackathon at UCER, Prayagraj",
      badge: "Finalist",
      color: "from-purple-light to-purple-light/70",
      iconColor: "text-purple-light",
    },
  ];

  const certifications = [
    {
      title: "React.js (Basic) certification",
      issuer: "Hackerrank",
      icon: Badge,
    },
    {
      title: "Java Programming and Data Structures",
      issuer: "PW Skills",
      icon: Code,
    },

    {
      title: "Java (Basic) certifiacation",
      issuer: "Hackerrank",
      icon: Badge,
    },
    {
      title: "SQL certifiacation",
      issuer: "LetsUpgrade",
      icon: Badge,
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Achievements & <span className="text-primary">Recognition</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Celebrating milestones and continuous learning in the journey of
          technology
        </p>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-primary/20 to-purple-light/20"></div>
                <Card className="relative h-full border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                        {achievement.badge}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">
            <span className="text-primary">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
