import styles from "@/src/styles/SubPage.module.css";

interface BackgroundSectionProps {
    title: string;
    content: string;
}

export default function BackgroundSection({ title, content }: BackgroundSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <p className={styles.bodyText}>
                    {content}
                </p>
            </div>
        </section>
    );
}
