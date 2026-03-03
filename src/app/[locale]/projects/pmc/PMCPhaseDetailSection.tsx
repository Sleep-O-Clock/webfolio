import styles from "@/src/styles/SubPage.module.css";

interface PMCPhase {
    title: string;
    phase: string;
    description: string;
    details: string;
    achievements?: string[];
    challenges?: string[];
}

interface PMCPhaseDetailSectionProps {
    phase: PMCPhase;
    labels: {
        achievements: string;
        challenges: string;
        viewProject: string;
        viewCode: string;
    };
}

export default function PMCPhaseDetailSection({ phase, labels }: PMCPhaseDetailSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <div className={styles.metaText}>
                    {phase.phase}
                </div>
                <h2 className={styles.sectionTitle}>{phase.title}</h2>
                <p className={styles.sectionDescription}>
                    {phase.description}
                </p>
                <p className={styles.bodyText}>
                    {phase.details}
                </p>

                {phase.achievements && (
                    <div className={styles.section}>
                        <h3 className={styles.subsectionTitle}>{labels.achievements}</h3>
                        <ul className={styles.list}>
                            {phase.achievements.map((achievement, index) => (
                                <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {phase.challenges && (
                    <div className={styles.section}>
                        <h3 className={styles.subsectionTitle}>{labels.challenges}</h3>
                        <ul className={styles.list}>
                            {phase.challenges.map((challenge, index) => (
                                <li key={index} className={`${styles.listItem} ${styles.arrowListItem}`}>
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={styles.linkContainer}>
                    <a href="#" className={styles.link}>{labels.viewProject} →</a>
                    <a href="#" className={styles.link}>{labels.viewCode} →</a>
                </div>
            </div>
        </section>
    );
}
