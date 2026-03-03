import styles from "@/src/styles/SubPage.module.css";

interface PMCOverviewSectionProps {
    title: string;
    intro: string;
    details: string;
}

export default function PMCOverviewSection({ title, intro, details }: PMCOverviewSectionProps) {
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
