import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>
          Hi, I am <span>Nabeel</span>
        </h1>
        <p>
          I am a web developer building clean, responsive, and user-friendly websites using
          HTML, CSS, JavaScript, PHP, WordPress, Shopify and modern web technologies.
        </p>
        <Link href="#projects" className="btn">
          View My Projects
        </Link>
      </div>

      <div className={styles.card}>
        <div className={styles.avatar}>
          <Image
            src="/avatar.jpeg"
            alt="Portrait of Nabeel Sheikh"
            width={120}
            height={120}
            priority
          />
        </div>
        <h3>Web Developer</h3>
        <p>WordPress | Shopify | Custom-Coded</p>
      </div>
    </section>
  );
}
