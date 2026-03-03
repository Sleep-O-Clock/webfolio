import styles from "@/src/styles/SubPage.module.css";

interface SchoolProject {
    title: string;
    course: string;
    description: string;
    details: string;
    technologies: string[];
    learnings: string[];
}

interface SchoolProjectDetailSectionProps {
    project: SchoolProject;
    labels: {
        technologiesUsed: string;
        keyLearnings: string;
        viewProject: string;
        viewCode: string;
    };
}

export default function SchoolProjectDetailSection({ project, labels }: SchoolProjectDetailSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <div className={styles.metaText}>
                    {project.course}
                </div>
                <h2 className={styles.sectionTitle}>{project.title}</h2>
                <p className={styles.sectionDescription}>
                    {project.description}
                </p>
                <p className={styles.bodyText}>
                    {project.details}
                </p>

                <div className={styles.section}>
                    <h3 className={styles.subsectionTitle}>{labels.technologiesUsed}</h3>
                    <div className={styles.tagContainer}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className={styles.tag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subsectionTitle}>{labels.keyLearnings}</h3>
                    <ul className={styles.list}>
                        {project.learnings.map((learning, index) => (
                            <li key={index} className={`${styles.listItem} ${styles.arrowListItem}`}>
                                {learning}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkContainer}>
                    <a href="#" className={styles.link}>{labels.viewProject} →</a>
                    <a href="#" className={styles.link}>{labels.viewCode} →</a>
                </div>
            </div>
        </section>
    );
}
