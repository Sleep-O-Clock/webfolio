"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/src/components/layout/Sidebar"
import MarkdownClient from "@/src/components/content/markdownFormat"
import ContactFormSection from "./ContactFormSection"

interface ContactClientProps {
    translations: {
        title: string;
        form: string;
        info: string;
        social: string;
        availability: string;
        formLabels: {
            name: string;
            email: string;
            message: string;
            send: string;
            sending: string;
            success: string;
            error: string;
        };
    };
    markdownContent: Record<string, string>;
}

export default function ContactClient({
    translations,
    markdownContent
}: ContactClientProps) {
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

    const sidebarLinks = [
        { id: "form", label: translations.form },
        { id: "info", label: translations.info },
        { id: "social", label: translations.social },
        { id: "availability", label: translations.availability },
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

            {activeSection === "form" && (
                <ContactFormSection labels={translations.formLabels} />
            )}

            {activeSection !== "form" && markdownContent[activeSection] && (
                <MarkdownClient content={markdownContent[activeSection]} />
            )}
        </>
    )
}
