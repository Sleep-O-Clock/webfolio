import styles from "@/src/styles/SubPage.module.css";

interface EducationItem {
    degree: string;
    school: string;
    period: string;
    details: string;
}

interface EducationSectionProps {
    title: string;
    items: EducationItem[];
}

export default function EducationSection({ title, items }: EducationSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {items.map((item, index) => (
                    <div key={index} className={index > 0 ? styles.sectionTop : ""}>
                        <h3 className={styles.subsectionTitle}>{item.degree}</h3>
                        <p className={styles.organizationText}>{item.school}</p>
                        <p className={styles.metaText}>{item.period}</p>
                        <p className={styles.bodyTextShort}>{item.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
