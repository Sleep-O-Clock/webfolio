"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import { getMessages } from "@/src/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer({ locale }: { locale: string }) {
    const messages = getMessages(locale);
    const footer = messages.footer;
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <span>{footer.madeBy}</span>
                <span>•</span>
                <span>© {currentYear}</span>
            </div>

            <div className={styles.right}>
                <a
                    href="https://github.com/ApolloVL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.github}`}
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/vincelvl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.linkedin}`}
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
}
