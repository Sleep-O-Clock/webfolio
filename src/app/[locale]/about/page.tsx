"use client"

import { useState, useEffect } from "react"
import { getMessages } from "@/src/i18n";
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin";
import { useParams } from "next/navigation";
import Sidebar from "@/src/components/layout/Sidebar";
import BackgroundSection from "./BackgroundSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import InterestsSection from "./InterestsSection";
import styles from "@/src/styles/SubPage.module.css";

export default function AboutPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale);
    const sidebarMargin = useSidebarMargin();
    const [activeSection, setActiveSection] = useState("background");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["background", "skills", "education", "interests"].includes(hash)) {
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
        { id: "background", label: t.about.sidebarLabels.background },
        { id: "skills", label: t.about.sidebarLabels.skills },
        { id: "education", label: t.about.sidebarLabels.education },
        { id: "interests", label: t.about.sidebarLabels.interests },
    ]

    const aboutData: { [key: string]: any } = {
        "background": {
            title: t.about.background.title,
            content: t.about.background.content,
        },
        "skills": {
            title: t.about.skills.title,
            categories: [
                {
                    name: t.about.skills.categories.languagesFrameworks,
                    items: ["JavaScript/TypeScript", "React", "Next.js", "Node.js", "Python", "Java"]
                },
                {
                    name: t.about.skills.categories.databases,
                    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
                },
                {
                    name: t.about.skills.categories.toolsDevOps,
                    items: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
                }
            ]
        },
        "education": {
            title: t.about.education.title,
            items: t.about.education.items
        },
        "interests": {
            title: t.about.interests.title,
            items: t.about.interests.items
        }
    }

    const currentSection = aboutData[activeSection]

    return (
        <>
            <Sidebar
                title={t.about.title}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />
            <main className={styles.container} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.about.title}</h1>
                <p className={styles.pageSubtitle}>
                    {t.about.intro}
                </p>

                {activeSection === "background" && currentSection && (
                    <BackgroundSection
                        title={currentSection.title}
                        content={currentSection.content}
                    />
                )}

                {activeSection === "skills" && currentSection && (
                    <SkillsSection
                        title={currentSection.title}
                        categories={currentSection.categories}
                    />
                )}

                {activeSection === "education" && currentSection && (
                    <EducationSection
                        title={currentSection.title}
                        items={currentSection.items}
                    />
                )}

                {activeSection === "interests" && currentSection && (
                    <InterestsSection
                        title={currentSection.title}
                        items={currentSection.items}
                    />
                )}
            </main>
        </>
    );
}
