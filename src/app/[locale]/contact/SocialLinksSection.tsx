import styles from "@/src/styles/SubPage.module.css";

interface SocialLink {
    platform: string;
    username: string;
    url: string;
}

interface SocialLinksSectionProps {
    title: string;
    items: SocialLink[];
}

export default function SocialLinksSection({ title, items }: SocialLinksSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {items.map((item, index) => (
                    <div key={index} className={styles.section}>
                        <h3 className={styles.subsectionTitle}>{item.platform}</h3>
                        <p className={styles.bodyTextShort} style={{ marginBottom: 0 }}>
                            <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: "inline-block" }}>
                                {item.url} →
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
