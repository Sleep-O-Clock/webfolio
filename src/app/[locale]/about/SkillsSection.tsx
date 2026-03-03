import styles from "@/src/styles/SubPage.module.css";

interface SkillCategory {
    name: string;
    items: string[];
}

interface SkillsSectionProps {
    title: string;
    categories: SkillCategory[];
}

export default function SkillsSection({ title, categories }: SkillsSectionProps) {
    return (
        <section>
            <div className={styles.card}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {categories.map((category, index) => (
                    <div key={index} className={styles.section}>
                        <h3 className={styles.subsectionTitle}>{category.name}</h3>
                        <div className={styles.tagContainer}>
                            {category.items.map((item, idx) => (
                                <span key={idx} className={styles.tag}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
