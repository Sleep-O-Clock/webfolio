import styles from "@/src/styles/SubPage.module.css";

interface InterestItem {
    title: string;
    description: string;
}

interface InterestsSectionProps {
    title: string;
    items: InterestItem[];
}

export default function InterestsSection({ title, items }: InterestsSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {items.map((item, index) => (
                    <div key={index} className={styles.section}>
                        <h3 className={styles.subsectionTitle}>{item.title}</h3>
                        <p className={styles.bodyTextShort}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
