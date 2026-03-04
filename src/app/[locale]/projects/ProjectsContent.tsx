"use client"

import Link from "next/link"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import { useRouter } from "next/navigation"

interface ProjectsContentProps {
    locale: string
}

export default function ProjectsContent({ locale }: ProjectsContentProps) {
    const t = getMessages(locale)
    const sidebarMargin = useSidebarMargin()
    const router = useRouter()

    const sidebarLinks = [
        { id: "personal", label: t.projects.personalProjects },
        { id: "school", label: t.projects.schoolProjects },
        { id: "pmc", label: t.projects.pmc },
    ]

    const handleSectionChange = (sectionId: string) => {
        router.push(`/${locale}/projects/${sectionId}`)
    }

    return (
        <>
            <Sidebar
                title={t.projects.title}
                links={sidebarLinks}
                onSectionChange={handleSectionChange}
            />
            <main style={{
                padding: "48px",
                width: "100%",
                ...sidebarMargin
            }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{t.projects.title}</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "48px", opacity: 0.7 }}>
                    {t.projects.subtitle}
                </p>

                <section>
                    <p style={{ fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.6 }}>
                        {t.projects.exploreText}
                    </p>

                    <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        <Link href={`/${locale}/projects/personal`} style={{
                            padding: "32px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            background: "rgba(255, 255, 255, 0.05)",
                            textDecoration: "none",
                            display: "block",
                            transition: "all 0.2s ease"
                        }}>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{t.projects.personalProjects}</h2>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                {t.projects.cards.personal.description}
                            </p>
                        </Link>

                        <Link href={`/${locale}/projects/school`} style={{
                            padding: "32px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            background: "rgba(255, 255, 255, 0.05)",
                            textDecoration: "none",
                            display: "block",
                            transition: "all 0.2s ease"
                        }}>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{t.projects.schoolProjects}</h2>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                {t.projects.cards.school.description}
                            </p>
                        </Link>

                        <Link href={`/${locale}/projects/pmc`} style={{
                            padding: "32px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            background: "rgba(255, 255, 255, 0.05)",
                            textDecoration: "none",
                            display: "block",
                            transition: "all 0.2s ease"
                        }}>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{t.projects.pmc}</h2>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                {t.projects.cards.pmc.description}
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
