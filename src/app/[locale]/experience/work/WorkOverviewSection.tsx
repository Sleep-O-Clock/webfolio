import styles from "@/src/styles/SubPage.module.css";

interface WorkOverviewSectionProps {
    title: string;
    intro: string;
    details: string;
}

export default function WorkOverviewSection({ title, intro, details }: WorkOverviewSectionProps) {
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
