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
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">French (C2)</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Polish (C1)</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">English (935 TOEIC)</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Chinese (A1)</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Spanish (A1)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Autonomous</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Curious</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Team-oriented</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Communicative</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Analytical</span>
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