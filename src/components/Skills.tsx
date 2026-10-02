import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="sectionTitle">My Skills</h2>
      <div className="grid">
        {skills.map((skill) => (
          <div className="card" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
