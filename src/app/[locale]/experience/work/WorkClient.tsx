"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/src/components/layout/Sidebar"
import MarkdownClient from "@/src/components/content/markdownFormat"

interface WorkClientProps {
    locale: string;
    translations: {
        workExperiences: string;
        overview: string;
        experienceTitle: string;
        work1Title: string;
    };
    markdownContent: Record<string, string>;
}

export default function WorkClient({
    locale,
    translations,
    markdownContent
}: WorkClientProps) {
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["overview", "work-1", "work-2", "work-3"].includes(hash)) {
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
        { id: "work-1", label: translations.work1Title },
        { id: "work-2", label: "Junior Developer" },
        { id: "work-3", label: "Research Assistant" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    return (
        <>
            <Sidebar
                title={translations.workExperiences}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${translations.experienceTitle}`,
                    onClick: () => router.push(`/${locale}/experience`)
                }}
            />

            {markdownContent[activeSection] && (
                <MarkdownClient content={markdownContent[activeSection]} />
            )}
        </>
    )
}
