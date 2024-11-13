import SkillBar from "./SkillBar";

const About = () => {
  const skills = [
    { skill: "Python", percentage: 90, delay: 0.2 },
    { skill: "SQL", percentage: 85, delay: 0.4 },
    { skill: "Power BI", percentage: 85, delay: 0.6 },
    { skill: "JavaScript", percentage: 75, delay: 0.8 },
    { skill: "Machine Learning", percentage: 70, delay: 1.0 },
  ];

  return (
    <section id="about" className="bg-apple-gray section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in opacity-0">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg leading-relaxed mb-6">
              As an M2 student in the Data Analytics major at EFREI Paris, I'm currently looking for a 6-month internship in Data Science (March 2025 - Aug 2025). I'm passionate about taking on challenges and accomplishing complex tasks in a group setting.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              This internship will be an opportunity for me to deepen my learning while contributing my programming knowledge, analytical skills, team spirit, and dynamism to your organization.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-apple-blue font-medium">I speak:</p>
                <p>French (C2)</p>
                <p>Polish (C1)</p>
                <p>English (935 TOEIC)</p>
                <p>Chinese (A1)</p>
                <p>Spanish (A1)</p>
              </div>
              <div className="space-y-3">
                <p className="text-apple-blue font-medium">I am:</p>
                <p>Autonomous</p>
                <p>Curious</p>
                <p>Team-oriented</p>
                <p>Communicative</p>
                <p>Analytical</p>
              </div>
            </div>
          </div>
          <div>
            {skills.map((skill) => (
              <SkillBar
                key={skill.skill}
                skill={skill.skill}
                percentage={skill.percentage}
                delay={skill.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;