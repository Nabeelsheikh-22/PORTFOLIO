import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className="sectionTitle">About Me</h2>
      <p>
        I am a freelance web developer with experience working on Shopify, WordPress, and
        custom-coded websites. I enjoy creating websites that are not only visually appealing
        but also functional and user-friendly. Currently, I am improving my skills in frontend
        development and building projects to gain more practical experience.
      </p>
    </section>
  );
}
