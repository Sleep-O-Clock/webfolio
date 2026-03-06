"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import ProjectOverviewSection from "./ProjectOverviewSection"
import ProjectDetailSection from "./ProjectDetailSection"
import styles from "@/src/styles/SubPage.module.css"

export default function PersonalProjectsPage() {
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
            if (hash && ["overview", "personal-1", "personal-2", "personal-3"].includes(hash)) {
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
        { id: "personal-1", label: "Personal Project 1" },
        { id: "personal-2", label: "Personal Project 2" },
        { id: "personal-3", label: "Personal Project 3" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    const projectData: Record<string, { title: string; description: string; details: string; technologies: string[] }> = {
        "personal-1": {
            title: "Personal Project 1",
            description: "A web application for tracking personal goals and habits",
            details: "Built with React and Node.js, featuring real-time updates and data visualization. Implemented user authentication, database design with PostgreSQL, and responsive UI with Tailwind CSS. The application helps users track daily habits, set long-term goals, and visualize their progress over time with interactive charts.",
            technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Chart.js", "JWT Authentication"]
        },
        "personal-2": {
            title: "Personal Project 2",
            description: "Mobile app for recipe management and meal planning",
            details: "Cross-platform mobile application using React Native. Features include recipe search with external API integration, meal planning calendar, automated shopping list generation, and nutritional information tracking. Implemented offline-first architecture with local storage synchronization.",
            technologies: ["React Native", "Expo", "Redux", "AsyncStorage", "REST API", "Firebase"]
        },
        "personal-3": {
            title: "Personal Project 3",
            description: "CLI tool for developer productivity and automation",
            details: "Command-line tool written in Python that automates common development tasks. Includes file generation from templates, project scaffolding for different frameworks, git workflow helpers, and automated code formatting. Published on PyPI with over 500 downloads.",
            technologies: ["Python", "Click", "Jinja2", "Git API", "PyPI", "Unit Testing"]
        },
    }

    const currentProject = projectData[activeSection]

    return (
        <>
            <Sidebar
                title={t.projects.personalProjects}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${t.projects.title}`,
                    onClick: () => router.push(`/${locale}/projects`)
                }}
            />
            <main className={styles.container} style={sidebarMargin}>

                {activeSection === "overview" && (
                    <ProjectOverviewSection
                        title={t.projects.personal.overviewTitle}
                        intro={t.projects.personal.overviewIntro}
                        details={t.projects.personal.overviewDetails}
                    />
                )}

                {currentProject && activeSection !== "overview" && (
                    <ProjectDetailSection
                        project={currentProject}
                        labels={{
                            technologiesUsed: t.projects.technologiesUsed,
                            viewProject: t.projects.viewProject,
                            viewCode: t.projects.viewCode
                        }}
                    />
                )}
            </main>
        </>
    )
}
