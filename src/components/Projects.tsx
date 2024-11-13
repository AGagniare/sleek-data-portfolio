import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Analytics Pipeline",
      description: "Built a scalable real-time analytics pipeline processing millions of events daily using Apache Kafka and Apache Spark.",
      technologies: ["Apache Spark", "Kafka", "Python", "AWS"],
      image: "/placeholder.svg",
      delay: 0.2,
    },
    {
      title: "ML Feature Store",
      description: "Designed and implemented a feature store for machine learning models, reducing feature engineering time by 60%.",
      technologies: ["Python", "PostgreSQL", "Redis", "Docker"],
      image: "/placeholder.svg",
      delay: 0.4,
    },
    {
      title: "Data Lake Architecture",
      description: "Architected a modern data lake solution handling petabytes of data with automated ETL processes.",
      technologies: ["AWS S3", "Airflow", "Terraform", "dbt"],
      image: "/placeholder.svg",
      delay: 0.6,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in opacity-0">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;