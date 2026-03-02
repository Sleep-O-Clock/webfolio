"use client"

import { useState } from "react"
import { getMessages } from "@/src/i18n";
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin";
import { useParams } from "next/navigation";
import Sidebar from "@/src/components/Sidebar";
import styles from "@/src/styles/SubPage.module.css";

export default function ContactPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale);
    const sidebarMargin = useSidebarMargin();
    const [activeSection, setActiveSection] = useState("form");

    const sidebarLinks = [
        { id: "form", label: locale === "fr" ? "Formulaire" : "Contact Form" },
        { id: "info", label: locale === "fr" ? "Coordonnées" : "Contact Info" },
        { id: "social", label: locale === "fr" ? "Réseaux Sociaux" : "Social Media" },
        { id: "availability", label: locale === "fr" ? "Disponibilité" : "Availability" },
    ]

    const contactData: { [key: string]: any } = {
        "info": {
            title: locale === "fr" ? "Coordonnées" : "Contact Information",
            items: [
                {
                    label: "Email",
                    value: "vincent.lavallee@example.com",
                    icon: "✉"
                },
                {
                    label: locale === "fr" ? "Téléphone" : "Phone",
                    value: "+1 (514) 123-4567",
                    icon: "📞"
                },
                {
                    label: locale === "fr" ? "Localisation" : "Location",
                    value: locale === "fr" ? "Montreal, QC, Canada" : "Montreal, QC, Canada",
                    icon: "📍"
                },
                {
                    label: locale === "fr" ? "Fuseau Horaire" : "Timezone",
                    value: "EST (UTC-5)",
                    icon: "🕐"
                }
            ]
        },
        "social": {
            title: locale === "fr" ? "Réseaux Sociaux" : "Social Media",
            items: [
                {
                    platform: "LinkedIn",
                    username: "vincent-lavallee",
                    url: "linkedin.com/in/vincent-lavallee"
                },
                {
                    platform: "GitHub",
                    username: "vlavalle",
                    url: "github.com/vlavalle"
                },
                {
                    platform: "Twitter",
                    username: "@vlavalle_dev",
                    url: "twitter.com/vlavalle_dev"
                },
                {
                    platform: "Portfolio",
                    username: locale === "fr" ? "Site Personnel" : "Personal Website",
                    url: "vincentlavallee.dev"
                }
            ]
        },
        "availability": {
            title: locale === "fr" ? "Disponibilité" : "Availability",
            status: locale === "fr" ? "Ouvert aux opportunités" : "Open to opportunities",
            details: locale === "fr"
                ? "Je suis actuellement disponible pour de nouveaux projets et collaborations. N'hésitez pas à me contacter pour discuter de vos besoins."
                : "I am currently available for new projects and collaborations. Feel free to reach out to discuss your needs.",
            preferences: [
                locale === "fr" ? "Contrats à temps plein" : "Full-time contracts",
                locale === "fr" ? "Projets freelance" : "Freelance projects",
                locale === "fr" ? "Consultation technique" : "Technical consulting",
                locale === "fr" ? "Travail à distance" : "Remote work"
            ]
        }
    }

    return (
        <>
            <Sidebar
                title={t.contact.title}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
            />
            <main className={styles.containerNarrow} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.contact.title}</h1>
                <p className={styles.pageSubtitle}>
                    {t.contact.subtitle}
                </p>

                {activeSection === "form" && (
                    <section>
                        <div className={styles.card}>
                            <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}
                                    >
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: "inherit",
                                            fontFamily: "inherit",
                                        }}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}
                                    >
                                        {t.contact.form.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: "inherit",
                                            fontFamily: "inherit",
                                        }}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem" }}
                                    >
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        style={{
                                            width: "100%",
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: "inherit",
                                            fontFamily: "inherit",
                                            resize: "vertical",
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        padding: "12px 24px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        color: "inherit",
                                        fontFamily: "inherit",
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {t.contact.form.send}
                                </button>
                            </form>
                        </div>
                    </section>
                )}

                {activeSection === "info" && contactData.info && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{contactData.info.title}</h2>
                            {contactData.info.items.map((item: any, index: number) => (
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
                )}

                {activeSection === "social" && contactData.social && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{contactData.social.title}</h2>
                            {contactData.social.items.map((item: any, index: number) => (
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
                )}

                {activeSection === "availability" && contactData.availability && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{contactData.availability.title}</h2>
                            <div className={styles.section}>
                                <span className={styles.tag} style={{ fontSize: "0.9rem", padding: "8px 16px" }}>
                                    ✓ {contactData.availability.status}
                                </span>
                            </div>
                            <p className={styles.bodyText}>
                                {contactData.availability.details}
                            </p>
                            <div className={styles.section}>
                                <h3 className={styles.subsectionTitle}>{locale === "fr" ? "Types de collaboration" : "Collaboration Types"}</h3>
                                <ul className={styles.list}>
                                    {contactData.availability.preferences.map((pref: string, index: number) => (
                                        <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                            {pref}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}
