"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/src/components/layout/Sidebar"
import MarkdownClient from "@/src/components/content/markdownFormat"

interface SchoolProjectsClientProps {
    locale: string;
    translations: {
        schoolProjects: string;
        overview: string;
        projectsTitle: string;
    };
    markdownContent: Record<string, string>;
}

export default function SchoolProjectsClient({
    locale,
    translations,
    markdownContent
}: SchoolProjectsClientProps) {
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["overview", "school-1", "school-2", "school-3"].includes(hash)) {
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
        { id: "school-1", label: "Data Structures Project" },
        { id: "school-2", label: "Database Management System" },
        { id: "school-3", label: "Machine Learning Classifier" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    return (
        <>
            <Sidebar
                title={translations.schoolProjects}
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
