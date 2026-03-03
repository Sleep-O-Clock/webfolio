import styles from "@/src/styles/SubPage.module.css";

interface ProjectOverviewSectionProps {
    title: string;
    intro: string;
    details: string;
}

export default function ProjectOverviewSection({ title, intro, details }: ProjectOverviewSectionProps) {
    return (
        <section>
            <div className={styles.cardWithMargin}>
                <h2 className={styles.overviewTitle}>{title}</h2>
                <p className={styles.bodyTextShort}>
                    {intro}
                </p>
                <p className={styles.bodyTextShort}>
                    {details}
                </p>
            </div>
        </section>
    );
}
