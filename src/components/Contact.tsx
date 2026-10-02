import { contactLinks } from "@/data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className="sectionTitle">Contact Me</h2>
      {contactLinks.map((link) => (
        <p key={link.label}>
          {link.label}:{" "}
          <a
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          >
            {link.text}
          </a>
        </p>
      ))}
    </section>
  );
}
