"use client"

import Link from "next/link"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import { useRouter } from "next/navigation"

interface ExperienceContentProps {
    locale: string
}

export default function ExperienceContent({ locale }: ExperienceContentProps) {
    const t = getMessages(locale)
    const sidebarMargin = useSidebarMargin()
    const router = useRouter()

    const sidebarLinks = [
        { id: "work", label: t.experience.workExperiences },
        { id: "implications", label: t.experience.implications },
    ]

    const handleSectionChange = (sectionId: string) => {
        router.push(`/${locale}/experience/${sectionId}`)
    }

    return (
        <>
            <Sidebar
                title={t.experience.title}
                links={sidebarLinks}
                onSectionChange={handleSectionChange}
            />
            <main style={{
                padding: "48px",
                maxWidth: "900px",
                margin: "0 auto",
                ...sidebarMargin
            }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{t.experience.title}</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "48px", opacity: 0.7 }}>
                    {t.experience.subtitle}
                </p>

                <section>
                    <p style={{ fontSize: "1.1rem", marginBottom: "32px", lineHeight: 1.6 }}>
                        Explore my professional work experience and volunteer involvement using the sidebar. Each section contains detailed information about specific roles and contributions.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <Link href={`/${locale}/experience/work`} style={{
                            padding: "32px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            background: "rgba(255, 255, 255, 0.05)",
                            textDecoration: "none",
                            display: "block",
                            transition: "all 0.2s ease"
                        }}>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{t.experience.workExperiences}</h2>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                Professional work experience including internships, part-time positions, and research roles.
                            </p>
                        </Link>

                        <Link href={`/${locale}/experience/implications`} style={{
                            padding: "32px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                            background: "rgba(255, 255, 255, 0.05)",
                            textDecoration: "none",
                            display: "block",
                            transition: "all 0.2s ease"
                        }}>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>{t.experience.implications}</h2>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                Leadership roles in student organizations and volunteer work in the community.
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
