import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Dividend and Growth Prediction Model (In progress)",
      description: "Development of a predictive model for future dividends and company growth based on past performance, economic conditions, and sector trends. Using Python, regression models and neural networks to model relationships between performance indicators and dividend distribution.",
      technologies: ["Python", "Machine Learning", "Financial Analysis", "Neural Networks", "NLP"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      delay: 0.1,
    },
    {
      title: "Web Datamining & Semantics Project",
      description: "Designed and implemented a food delivery discovery service using Semantic Web technologies. The system integrates food products, restaurant offers, delivery services, and customer preferences to provide personalized recommendations.",
      technologies: ["RDF", "Semantic Web", "Database", "Web Development"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      delay: 0.2,
    },
    {
      title: "Interactive Data Analysis Platform",
      description: "Developed a Streamlit web application for comprehensive data analysis, featuring data cleaning, visualization, and clustering capabilities. Implements multiple clustering algorithms and provides interactive visualization tools.",
      technologies: ["Python", "Streamlit", "Machine Learning", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      delay: 0.3,
    },
    {
      title: "Eye Cancer Image Classifier",
      description: "Cloud-based platform for early detection of eye cancer through image analysis. Features include image preprocessing, advanced classification algorithms, and user-friendly interface with drag-and-drop functionality.",
      technologies: ["Machine Learning", "Cloud Computing", "Image Processing", "Healthcare"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      delay: 0.4,
    },
    {
      title: "DAUTH - Blockchain Project",
      description: "Project to develop a decentralized OAuth2 authentication solution using blockchain technology to enhance data privacy and enable secure, one-click user sign-ins, and enable developers to use it via JS.",
      technologies: ["Blockchain", "OAuth2", "JavaScript", "Smart Contracts"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      delay: 0.5,
    },
    {
      title: "SECU'RING Project",
      description: "Project to model and create a connected ring with permissions management from an online server.",
      technologies: ["IoT", "Server Management", "Security", "Hardware"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      delay: 0.6,
    },
    {
      title: "Advanced BI Case Study - Accenture",
      description: "Conducted an in-depth project in collaboration with Accenture to analyze various social and demographic data. Developed comprehensive Power BI dashboards to visualize data.",
      technologies: ["Power BI", "Data Analysis", "Business Intelligence", "Visualization"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      delay: 0.7,
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