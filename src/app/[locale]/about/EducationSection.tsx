import styles from "@/src/styles/SubPage.module.css";

interface EducationItem {
    degree: string;
    school: string;
    period: string;
    location: string;
    details: {
        description: string;
        logo: string;
    };
}

interface EducationSectionProps {
    items: {
        university: EducationItem;
        college: EducationItem;
    };
}

const link_uds = process.env.NEXT_PUBLIC_COMPUTER_ENGINEERING_LINK_UDS;
const link_cal = process.env.NEXT_PUBLIC_PHYSICS_TECHNOLOGY_LINK_CAL;

export default function EducationSection({ items }: EducationSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h2 className={styles.sectionTitle}>{items.university.degree}</h2>
                    <p className={styles.organizationText}>{items.university.school}</p>
                    <p className={styles.metaText}>{items.university.period}</p>
                    <p className={styles.metaText}>{items.university.location}</p>
                    <p className={styles.bodyTextShort}>{items.university.details.description}</p>
                </div>
                <a href={link_uds} target="_blank" rel="noopener noreferrer">
                    <img className={styles.cardImageLogoUDS} src={items.university.details.logo} alt={`${items.university.school} logo`} />
                </a>
            </div>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <h2 className={styles.sectionTitle}>{items.college.degree}</h2>
                    <p className={styles.organizationText}>{items.college.school}</p>
                    <p className={styles.metaText}>{items.college.period}</p>
                    <p className={styles.metaText}>{items.college.location}</p>
                    <p className={styles.bodyTextShort}>{items.college.details.description}</p>
                </div>
                <a href={link_cal} target="_blank" rel="noopener noreferrer">
                    <img className={styles.cardImageLogoCAL} src={items.college.details.logo} alt={`${items.college.school} logo`} />
                </a>
            </div>
        </section>
    );
}
