"use client"

import { useState, useEffect } from "react"
import { getMessages } from "@/src/i18n";
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin";
import { useParams } from "next/navigation";
import Sidebar from "@/src/components/layout/Sidebar";
import ContactFormSection from "./ContactFormSection";
import ContactInfoSection from "./ContactInfoSection";
import SocialLinksSection from "./SocialLinksSection";
import AvailabilitySection from "./AvailabilitySection";
import styles from "@/src/styles/SubPage.module.css";

export default function ContactPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale);
    const sidebarMargin = useSidebarMargin();
    const [activeSection, setActiveSection] = useState("form");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["form", "info", "social", "availability"].includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Set initial hash on mount
        updateFromHash();

        window.addEventListener('hashchange', updateFromHash);
        return () => window.removeEventListener('hashchange', updateFromHash);
    }, []);

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId);
        window.location.hash = sectionId;
    };

    const sidebarLinks = [
        { id: "form", label: t.contact.sidebarLabels.form },
        { id: "info", label: t.contact.sidebarLabels.info },
        { id: "social", label: t.contact.sidebarLabels.social },
        { id: "availability", label: t.contact.sidebarLabels.availability },
    ]

    const contactData: { [key: string]: any } = {
        "info": {
            title: t.contact.info.title,
            items: [
                {
                    label: t.contact.info.email,
                    value: "vincent.lavallee@example.com",
                    icon: "✉"
                },
                {
                    label: t.contact.info.phone,
                    value: "+1 (514) 123-4567",
                    icon: "📞"
                },
                {
                    label: t.contact.info.location,
                    value: "Montreal, QC, Canada",
                    icon: "📍"
                },
                {
                    label: t.contact.info.timezone,
                    value: "EST (UTC-5)",
                    icon: "🕐"
                }
            ]
        },
        "social": {
            title: t.contact.social.title,
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
                    username: t.contact.social.portfolio,
                    url: "vincentlavallee.dev"
                }
            ]
        },
        "availability": {
            title: t.contact.availability.title,
            status: t.contact.availability.status,
            details: t.contact.availability.details,
            preferences: t.contact.availability.preferences
        }
    }

    return (
        <>
            <Sidebar
                title={t.contact.title}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />
            <main className={styles.container} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.contact.title}</h1>
                <p className={styles.pageSubtitle}>
                    {t.contact.subtitle}
                </p>

                {activeSection === "form" && (
                    <ContactFormSection labels={t.contact.form} />
                )}

                {activeSection === "info" && contactData.info && (
                    <ContactInfoSection
                        title={contactData.info.title}
                        items={contactData.info.items}
                    />
                )}

                {activeSection === "social" && contactData.social && (
                    <SocialLinksSection
                        title={contactData.social.title}
                        items={contactData.social.items}
                    />
                )}

                {activeSection === "availability" && contactData.availability && (
                    <AvailabilitySection
                        title={contactData.availability.title}
                        status={contactData.availability.status}
                        details={contactData.availability.details}
                        collaborationTypes={t.contact.availability.collaborationTypes}
                        preferences={contactData.availability.preferences}
                    />
                )}
            </main>
        </>
    );
}
