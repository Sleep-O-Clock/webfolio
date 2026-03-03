import styles from "@/src/styles/SubPage.module.css";

interface AvailabilitySectionProps {
    title: string;
    status: string;
    details: string;
    collaborationTypes: string;
    preferences: string[];
}

export default function AvailabilitySection({ title, status, details, collaborationTypes, preferences }: AvailabilitySectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.section}>
                    <span className={styles.tag} style={{ fontSize: "0.9rem", padding: "8px 16px" }}>
                        ✓ {status}
                    </span>
                </div>
                <p className={styles.bodyText}>
                    {details}
                </p>
                <div className={styles.section}>
                    <h3 className={styles.subsectionTitle}>{collaborationTypes}</h3>
                    <ul className={styles.list}>
                        {preferences.map((pref, index) => (
                            <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                {pref}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
