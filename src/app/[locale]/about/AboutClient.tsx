"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/src/components/layout/Sidebar"
import MarkdownClient from "@/src/components/content/markdownFormat"

interface AboutClientProps {
    translations: {
        title: string;
        background: string;
        skills: string;
        education: string;
    };
    markdownContent: Record<string, string>;
}

export default function AboutClient({
    translations,
    markdownContent
}: AboutClientProps) {
    const [activeSection, setActiveSection] = useState("background");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["background", "skills", "education"].includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Set initial hash on mount
        updateFromHash();

        window.addEventListener('hashchange', updateFromHash);
        return () => window.removeEventListener('hashchange', updateFromHash);
    }, []);

    const sidebarLinks = [
        { id: "background", label: translations.background },
        { id: "skills", label: translations.skills },
        { id: "education", label: translations.education },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    return (
        <>
            <Sidebar
                title={translations.title}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
            />

            {markdownContent[activeSection] && (
                <MarkdownClient content={markdownContent[activeSection]} />
            )}
        </>
    )
}
