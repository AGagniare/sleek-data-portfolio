import SkillBar from "./SkillBar";

const About = () => {
  const skills = [
    { skill: "Python", percentage: 95, delay: 0.2 },
    { skill: "SQL", percentage: 90, delay: 0.4 },
    { skill: "Apache Spark", percentage: 85, delay: 0.6 },
    { skill: "AWS", percentage: 80, delay: 0.8 },
    { skill: "Machine Learning", percentage: 75, delay: 1.0 },
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
              With over 5 years of experience in data engineering, I specialize in building robust data pipelines and scalable analytics solutions. My passion lies in transforming raw data into actionable insights that drive business decisions.
            </p>
            <p className="text-lg leading-relaxed">
              I've worked with Fortune 500 companies to startups, helping them leverage their data assets effectively through modern data architecture and engineering practices.
            </p>
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