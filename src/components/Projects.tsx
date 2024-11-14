import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "DAUTH - Blockchain Project",
      description: "Project to develop a decentralized OAuth2 authentication solution using blockchain technology to enhance data privacy and enable secure, one-click user sign-ins, and enable developers to use it via JS.",
      technologies: ["Blockchain", "OAuth2", "JavaScript", "Smart Contracts"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      delay: 0.2,
    },
    {
      title: "SECU'RING Project",
      description: "Project to model and create a connected ring with permissions management from an online server.",
      technologies: ["IoT", "Server Management", "Security", "Hardware"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      delay: 0.4,
    },
    {
      title: "Advanced BI Case Study - Accenture",
      description: "Conducted an in-depth project in collaboration with Accenture to analyze various social and demographic data. Developed comprehensive Power BI dashboards to visualize data.",
      technologies: ["Power BI", "Data Analysis", "Business Intelligence", "Visualization"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      delay: 0.6,
    },
    {
      title: "MASTERCAMP - Sentiment Analysis",
      description: "Intensive 6-week project to strengthen my skills in Python and database by developing a system that analyzes user feedback on products and extracts the feelings expressed.",
      technologies: ["Python", "NLP", "Database", "Sentiment Analysis"],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      delay: 0.8,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in opacity-0">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;