import styles from "@/src/styles/SubPage.module.css";

interface Project {
    title: string;
    description: string;
    details: string;
    technologies: string[];
}

interface ProjectDetailSectionProps {
    project: Project;
    labels: {
        technologiesUsed: string;
        viewProject: string;
        viewCode: string;
    };
}

export default function ProjectDetailSection({ project, labels }: ProjectDetailSectionProps) {
    return (
        <section>
            <div className={styles.card}>
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

                <div className={styles.linkContainer}>
                    <a href="#" className={styles.link}>{labels.viewProject} →</a>
                    <a href="#" className={styles.link}>{labels.viewCode} →</a>
                </div>
            </div>
        </section>
    );
}
