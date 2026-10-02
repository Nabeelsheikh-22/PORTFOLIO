import { projects } from "@/data/content";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="sectionTitle">My Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.links}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
