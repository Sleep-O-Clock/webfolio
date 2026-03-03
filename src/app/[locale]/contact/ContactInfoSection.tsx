import styles from "@/src/styles/SubPage.module.css";

interface ContactInfoItem {
    label: string;
    value: string;
    icon: string;
}

interface ContactInfoSectionProps {
    title: string;
    items: ContactInfoItem[];
}

export default function ContactInfoSection({ title, items }: ContactInfoSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {items.map((item, index) => (
                    <div key={index} className={styles.section}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                            <div>
                                <h3 className={styles.subsectionTitle} style={{ marginBottom: "4px" }}>{item.label}</h3>
                                <p className={styles.bodyTextShort} style={{ marginBottom: 0 }}>{item.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
