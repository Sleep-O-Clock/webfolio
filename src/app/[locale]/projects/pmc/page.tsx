"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import PMCOverviewSection from "./PMCOverviewSection"
import PMCPhaseDetailSection from "./PMCPhaseDetailSection"
import styles from "@/src/styles/SubPage.module.css"

export default function PMCPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale)
    const sidebarMargin = useSidebarMargin()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview");

    // Initialize from hash and listen for hash changes
    useEffect(() => {
        const updateFromHash = () => {
            const hash = window.location.hash.slice(1);
            if (hash && ["overview", "pmc-overview", "pmc-research", "pmc-implementation", "pmc-testing"].includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Set initial hash on mount
        updateFromHash();

        window.addEventListener('hashchange', updateFromHash);
        return () => window.removeEventListener('hashchange', updateFromHash);
    }, []);

    const sidebarLinks = [
        { id: "overview", label: t.projects.overview },
        { id: "pmc-overview", label: "Project Overview" },
        { id: "pmc-research", label: "Research & Design Phase" },
        { id: "pmc-implementation", label: "Implementation Phase" },
        { id: "pmc-testing", label: "Testing & Validation" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    const pmcData: Record<string, {
        title: string;
        phase: string;
        description: string;
        details: string;
        achievements?: string[];
        challenges?: string[];
    }> = {
        "pmc-overview": {
            title: "Projet Majeur de Conception",
            phase: "Final Year Capstone Project - 2025-2026",
            description: "Comprehensive engineering design project spanning research, development, and validation",
            details: "The PMC (Projet Majeur de Conception) is a year-long capstone project where students form teams to solve real-world engineering problems. Our project focuses on developing an innovative solution that addresses current industry needs. The project involves multiple phases including problem definition, research, design, implementation, testing, and final presentation to industry professionals and faculty.",
            achievements: [
                "Successfully defined project scope and objectives",
                "Formed multidisciplinary team of 5 engineering students",
                "Secured industry partner for project validation",
                "Presented initial proposal to evaluation committee"
            ]
        },
        "pmc-research": {
            title: "Research & Design Phase",
            phase: "September 2025 - December 2025",
            description: "Market research, literature review, and technical design",
            details: "Conducted extensive market research to identify user needs and analyze existing solutions. Performed comprehensive literature review of relevant technologies and methodologies. Developed detailed technical specifications, created system architecture, and designed user interfaces. Presented research findings and design proposal to project committee for approval.",
            achievements: [
                "Completed market analysis with 50+ user surveys",
                "Reviewed 30+ academic papers and technical documents",
                "Created detailed system architecture and component diagrams",
                "Developed functional and non-functional requirements",
                "Received committee approval for design proposal"
            ],
            challenges: [
                "Balancing innovative features with project timeline",
                "Selecting appropriate technology stack from multiple options",
                "Coordinating team schedules for collaborative work"
            ]
        },
        "pmc-implementation": {
            title: "Implementation Phase",
            phase: "January 2026 - March 2026",
            description: "Development, integration, and iterative refinement",
            details: "Implemented core features following agile methodology with bi-weekly sprints. Integrated various system components and conducted regular code reviews. Developed comprehensive test suite and performed continuous integration. Regularly demonstrated progress to industry partner and incorporated feedback into development process.",
            achievements: [
                "Completed 6 sprint cycles with deliverables",
                "Integrated all major system components",
                "Implemented 85% of planned features",
                "Conducted 4 presentations to industry partner",
                "Maintained 90% code coverage with automated tests"
            ],
            challenges: [
                "Managing technical debt while meeting deadlines",
                "Resolving integration issues between components",
                "Adapting to changing requirements from stakeholders"
            ]
        },
        "pmc-testing": {
            title: "Testing & Validation Phase",
            phase: "April 2026 - May 2026",
            description: "User testing, validation, and final refinements",
            details: "Conducted comprehensive testing including unit tests, integration tests, and user acceptance testing. Performed beta testing with real users and gathered feedback for final improvements. Validated system performance against initial requirements. Prepared final documentation and presentation materials for defense.",
            achievements: [
                "Completed user testing with 25 participants",
                "Achieved 95% of performance requirements",
                "Fixed all critical bugs and 90% of minor issues",
                "Finalized comprehensive project documentation",
                "Successfully defended project before evaluation panel"
            ],
            challenges: [
                "Prioritizing bug fixes with limited time",
                "Balancing perfectionism with project deadline",
                "Preparing comprehensive defense presentation"
            ]
        },
    }

    const currentPhase = pmcData[activeSection]

    return (
        <>
            <Sidebar
                title={t.projects.pmc}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${t.projects.title}`,
                    onClick: () => router.push(`/${locale}/projects`)
                }}
            />
            <main className={styles.container} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.projects.pmc}</h1>
                <p className={styles.pageSubtitle}>
                    {t.projects.pmcPage.subtitle}
                </p>

                {activeSection === "overview" && (
                    <PMCOverviewSection
                        title={t.projects.pmcPage.overviewTitle}
                        intro={t.projects.pmcPage.overviewIntro}
                        details={t.projects.pmcPage.overviewDetails}
                    />
                )}

                {currentPhase && activeSection !== "overview" && (
                    <PMCPhaseDetailSection
                        phase={currentPhase}
                        labels={{
                            achievements: t.projects.pmcPage.achievements,
                            challenges: t.projects.pmcPage.challenges,
                            viewProject: t.projects.viewProject,
                            viewCode: t.projects.viewCode
                        }}
                    />
                )}
            </main>
        </>
    )
}
