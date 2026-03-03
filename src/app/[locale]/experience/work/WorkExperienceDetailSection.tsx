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
                    <h2 className={styles.titleLarge}>{experience.title}</h2>
                    <span className={styles.periodText}>{experience.period}</span>
                </div>
                <p className={styles.organizationText}>
                    {experience.organization}
                </p>
                <p className={styles.locationText}>
                    {experience.location} • {experience.type}
                </p>

                <div className={styles.sectionTop}>
                    <h3 className={styles.subsectionTitle}>{labels.responsibilities}</h3>
                    <ul className={styles.list}>
                        {experience.responsibilities.map((item, index) => (
                            <li key={index} className={`${styles.listItem} ${styles.bulletListItem}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subsectionTitle}>{labels.achievements}</h3>
                    <ul className={styles.list}>
                        {experience.achievements.map((item, index) => (
                            <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className={styles.subsectionTitle}>{labels.technologies}</h3>
                    <div className={styles.tagContainer}>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className={styles.tag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
