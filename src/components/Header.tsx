import Link from "next/link";
import { navLinks } from "@/data/content";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.brand}>Nabeel Sheikh</h2>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
