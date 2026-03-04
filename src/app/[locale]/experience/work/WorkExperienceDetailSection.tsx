import styles from "@/src/styles/SubPage.module.css";

interface WorkExperience {
    title: string;
    organization: string;
    period: string;
    location: string;
    type: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
}

interface WorkExperienceDetailSectionProps {
    experience: WorkExperience;
    labels: {
        responsibilities: string;
        achievements: string;
        technologies: string;
    };
}

export default function WorkExperienceDetailSection({ experience, labels }: WorkExperienceDetailSectionProps) {
    return (
        <section>
            <div className={styles.timelineCard}>
                <div className={styles.headerRow}>

                    <ul className={styles.list}>
                        <div>
                            <h2 className={styles.titleLarge}>{experience.title}</h2>
                            <p className={styles.organizationText}>
                                {experience.organization}
                            </p>
                            <p className={styles.locationText}>
                                {experience.location} • {experience.type}
                            </p>
                        </div>
                    </ul>
                    <ul className={styles.list}>
                        <div style={{ textAlign: 'right' }}>
                            <span className={styles.periodText}>{experience.period}</span>
                            <div className={styles.tagContainer} style={{ marginTop: '12px', justifyContent: 'flex-end' }}>
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className={styles.tag}>
                                        {index < 5 ? tech : `+${experience.technologies.length - 5} more`}

                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '24px' }}>
                    <div>
                        <h3 className={styles.subsectionTitle}>{labels.responsibilities}</h3>
                        <ul className={styles.list}>
                            {experience.responsibilities.map((item, index) => (
                                <li key={index} className={`${styles.listItem} ${styles.bulletListItem}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.subsectionTitle}>{labels.achievements}</h3>
                        <ul className={styles.list}>
                            {experience.achievements.map((item, index) => (
                                <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
