import styles from "@/src/styles/SubPage.module.css";

interface Implication {
    title: string;
    organization: string;
    period: string;
    type: string;
    responsibilities: string[];
    impact: string[];
    skills: string[];
}

interface ImplicationDetailSectionProps {
    implication: Implication;
    labels: {
        responsibilities: string;
        impact: string;
        skills: string;
    };
}

export default function ImplicationDetailSection({ implication, labels }: ImplicationDetailSectionProps) {
    return (
        <section>
            <div className={styles.timelineCard}>
                <div className={styles.headerRow}>
                    <h2 className={styles.titleLarge}>{implication.title}</h2>
                    <span className={styles.periodText}>{implication.period}</span>
                </div>
                <p className={styles.organizationText}>
                    {implication.organization}
                </p>
                <p className={styles.locationText}>
                    {implication.type}
                </p>

                <div className={styles.sectionTop}>
                    <h3 className={styles.subsectionTitle}>{labels.responsibilities}</h3>
                    <ul className={styles.list}>
                        {implication.responsibilities.map((item, index) => (
                            <li key={index} className={`${styles.listItem} ${styles.bulletListItem}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subsectionTitle}>{labels.impact}</h3>
                    <ul className={styles.list}>
                        {implication.impact.map((item, index) => (
                            <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className={styles.subsectionTitle}>{labels.skills}</h3>
                    <div className={styles.tagContainer}>
                        {implication.skills.map((skill, index) => (
                            <span key={index} className={styles.tag}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
