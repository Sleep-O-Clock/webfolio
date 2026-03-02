"use client"

import { useState } from "react"
import { getMessages } from "@/src/i18n";
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin";
import { useParams } from "next/navigation";
import Sidebar from "@/src/components/Sidebar";
import styles from "@/src/styles/SubPage.module.css";

export default function AboutPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale);
    const sidebarMargin = useSidebarMargin();
    const [activeSection, setActiveSection] = useState("background");

    const sidebarLinks = [
        { id: "background", label: locale === "fr" ? "Parcours" : "Background" },
        { id: "skills", label: locale === "fr" ? "Compétences" : "Skills" },
        { id: "education", label: locale === "fr" ? "Formation" : "Education" },
        { id: "interests", label: locale === "fr" ? "Intérêts" : "Interests" },
    ]

    const aboutData: { [key: string]: any } = {
        "background": {
            title: locale === "fr" ? "Mon Parcours" : "My Background",
            content: locale === "fr"
                ? "Passionné par le développement logiciel depuis plusieurs années, j'ai acquis une solide expérience dans la construction d'applications web modernes et évolutives. Mon parcours m'a permis de travailler sur des projets variés, allant du développement full-stack à l'architecture de systèmes complexes."
                : "Passionate about software development for several years, I've gained solid experience building modern, scalable web applications. My journey has allowed me to work on various projects, from full-stack development to complex system architecture.",
        },
        "skills": {
            title: locale === "fr" ? "Compétences Techniques" : "Technical Skills",
            categories: [
                {
                    name: locale === "fr" ? "Langages & Frameworks" : "Languages & Frameworks",
                    items: ["JavaScript/TypeScript", "React", "Next.js", "Node.js", "Python", "Java"]
                },
                {
                    name: locale === "fr" ? "Base de Données" : "Databases",
                    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
                },
                {
                    name: locale === "fr" ? "Outils & DevOps" : "Tools & DevOps",
                    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
                }
            ]
        },
        "education": {
            title: locale === "fr" ? "Formation Académique" : "Academic Education",
            items: [
                {
                    degree: locale === "fr" ? "Baccalauréat en Génie Logiciel" : "Bachelor of Software Engineering",
                    school: locale === "fr" ? "Université de Montréal" : "University of Montreal",
                    period: "2020 - 2024",
                    details: locale === "fr"
                        ? "Spécialisation en développement web et architecture logicielle. Projet de fin d'études axé sur les applications distribuées."
                        : "Specialization in web development and software architecture. Final project focused on distributed applications."
                },
                {
                    degree: locale === "fr" ? "DEC en Informatique" : "College Diploma in Computer Science",
                    school: locale === "fr" ? "Cégep de Québec" : "Quebec College",
                    period: "2018 - 2020",
                    details: locale === "fr"
                        ? "Fondations en programmation, structures de données et algorithmique."
                        : "Foundations in programming, data structures, and algorithms."
                }
            ]
        },
        "interests": {
            title: locale === "fr" ? "Intérêts & Passions" : "Interests & Passions",
            items: [
                {
                    title: locale === "fr" ? "Technologies Émergentes" : "Emerging Technologies",
                    description: locale === "fr"
                        ? "Toujours curieux d'explorer les nouvelles technologies et frameworks. Particulièrement intéressé par l'IA, le machine learning et les architectures cloud-native."
                        : "Always curious to explore new technologies and frameworks. Particularly interested in AI, machine learning, and cloud-native architectures."
                },
                {
                    title: locale === "fr" ? "Open Source" : "Open Source",
                    description: locale === "fr"
                        ? "Contributeur actif à plusieurs projets open source. Crois fermement au partage des connaissances et à l'apprentissage collaboratif."
                        : "Active contributor to several open source projects. Strongly believe in knowledge sharing and collaborative learning."
                },
                {
                    title: locale === "fr" ? "Mentorat" : "Mentoring",
                    description: locale === "fr"
                        ? "Passionné par l'enseignement et le mentorat. Aide régulièrement les débutants à démarrer leur carrière en développement."
                        : "Passionate about teaching and mentoring. Regularly help beginners start their development careers."
                }
            ]
        }
    }

    const currentSection = aboutData[activeSection]

    return (
        <>
            <Sidebar
                title={t.about.title}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
            />
            <main className={styles.container} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.about.title}</h1>
                <p className={styles.pageSubtitle}>
                    {t.about.intro}
                </p>

                {activeSection === "background" && currentSection && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
                            <p className={styles.bodyText}>
                                {currentSection.content}
                            </p>
                        </div>
                    </section>
                )}

                {activeSection === "skills" && currentSection && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
                            {currentSection.categories.map((category: any, index: number) => (
                                <div key={index} className={styles.section}>
                                    <h3 className={styles.subsectionTitle}>{category.name}</h3>
                                    <div className={styles.tagContainer}>
                                        {category.items.map((item: string, idx: number) => (
                                            <span key={idx} className={styles.tag}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {activeSection === "education" && currentSection && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
                            {currentSection.items.map((item: any, index: number) => (
                                <div key={index} className={index > 0 ? styles.sectionTop : ""}>
                                    <h3 className={styles.subsectionTitle}>{item.degree}</h3>
                                    <p className={styles.organizationText}>{item.school}</p>
                                    <p className={styles.metaText}>{item.period}</p>
                                    <p className={styles.bodyTextShort}>{item.details}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {activeSection === "interests" && currentSection && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{currentSection.title}</h2>
                            {currentSection.items.map((item: any, index: number) => (
                                <div key={index} className={styles.section}>
                                    <h3 className={styles.subsectionTitle}>{item.title}</h3>
                                    <p className={styles.bodyTextShort}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}
