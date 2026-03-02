"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import styles from "@/src/styles/SubPage.module.css"

export default function PersonalProjectsPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale)
    const sidebarMargin = useSidebarMargin()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview")

    const sidebarLinks = [
        { id: "overview", label: t.projects.overview },
        { id: "personal-1", label: "Personal Project 1" },
        { id: "personal-2", label: "Personal Project 2" },
        { id: "personal-3", label: "Personal Project 3" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
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
                <h1 className={styles.pageTitle}>{t.projects.personalProjects}</h1>
                <p className={styles.pageSubtitle}>
                    {t.projects.subtitle}
                </p>

                {activeSection === "overview" && (
                    <section>
                        <div className={styles.cardWithMargin}>
                            <h2 className={styles.overviewTitle}>{t.projects.personal.overviewTitle}</h2>
                            <p className={styles.bodyTextShort}>
                                {t.projects.personal.overviewIntro}
                            </p>
                            <p className={styles.bodyTextShort}>
                                {t.projects.personal.overviewDetails}
                            </p>
                        </div>
                    </section>
                )}

                {currentProject && activeSection !== "overview" && (
                    <section>
                        <div className={styles.card}>
                            <h2 className={styles.sectionTitle}>{currentProject.title}</h2>
                            <p className={styles.sectionDescription}>
                                {currentProject.description}
                            </p>
                            <p className={styles.bodyText}>
                                {currentProject.details}
                            </p>

                            <div className={styles.section}>
                                <h3 className={styles.subsectionTitle}>{t.projects.technologiesUsed}</h3>
                                <div className={styles.tagContainer}>
                                    {currentProject.technologies.map((tech, index) => (
                                        <span key={index} className={styles.tag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.linkContainer}>
                                <a href="#" className={styles.link}>{t.projects.viewProject} →</a>
                                <a href="#" className={styles.link}>{t.projects.viewCode} →</a>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    )
}
