"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/src/components/layout/Sidebar"
import MarkdownClient from "@/src/components/content/markdownFormat"

interface PersonalProjectsClientProps {
    locale: string;
    translations: {
        personalProjects: string;
        overview: string;
        projectsTitle: string;
    };
    markdownContent: Record<string, string>;
}

export default function PersonalProjectsClient({
    locale,
    translations,
    markdownContent
}: PersonalProjectsClientProps) {
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["overview", "personal-1"].includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Set initial hash on mount
        updateFromHash();

        window.addEventListener('hashchange', updateFromHash);
        return () => window.removeEventListener('hashchange', updateFromHash);
    }, []);

    const sidebarLinks = [
        { id: "overview", label: translations.overview },
        { id: "personal-1", label: "Personal Project 1" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    return (
        <>
            <Sidebar
                title={translations.personalProjects}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${translations.projectsTitle}`,
                    onClick: () => router.push(`/${locale}/projects`)
                }}
            />

            {markdownContent[activeSection] && (
                <MarkdownClient content={markdownContent[activeSection]} />
            )}
        </>
    )
}
