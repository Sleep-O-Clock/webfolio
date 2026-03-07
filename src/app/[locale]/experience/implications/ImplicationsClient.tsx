"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/src/components/layout/Sidebar"
import MarkdownClient from "@/src/components/content/markdownFormat"

interface ImplicationsClientProps {
    locale: string;
    translations: {
        implications: string;
        overview: string;
        experienceTitle: string;
    };
    markdownContent: Record<string, string>;
}

export default function ImplicationsClient({
    locale,
    translations,
    markdownContent
}: ImplicationsClientProps) {
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["overview", "impl-1", "impl-2", "impl-3"].includes(hash)) {
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
        { id: "impl-1", label: "Student Association VP" },
        { id: "impl-2", label: "Coding Club President" },
        { id: "impl-3", label: "Volunteer Tutor" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    return (
        <>
            <Sidebar
                title={translations.implications}
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
