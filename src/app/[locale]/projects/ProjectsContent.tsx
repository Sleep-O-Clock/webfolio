"use client"

import Link from "next/link"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import { useRouter } from "next/navigation"
import styles from "@/src/styles/OverviewPage.module.css"

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
            <main className={styles.main} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.projects.title}</h1>
                <p className={styles.pageSubtitle}>
                    {t.projects.subtitle}
                </p>

                <section>
                    <p className={styles.exploreText}>
                        {t.projects.exploreText}
                    </p>

                    <div className={styles.gridContainer}>
                        <Link href={`/${locale}/projects/personal`} className={styles.card}>
                            <h2 className={styles.cardTitle}>{t.projects.personalProjects}</h2>
                            <p className={styles.cardDescription}>
                                {t.projects.cards.personal.description}
                            </p>
                        </Link>

                        <Link href={`/${locale}/projects/school`} className={styles.card}>
                            <h2 className={styles.cardTitle}>{t.projects.schoolProjects}</h2>
                            <p className={styles.cardDescription}>
                                {t.projects.cards.school.description}
                            </p>
                        </Link>

                        <Link href={`/${locale}/projects/pmc`} className={styles.card}>
                            <h2 className={styles.cardTitle}>{t.projects.pmc}</h2>
                            <p className={styles.cardDescription}>
                                {t.projects.cards.pmc.description}
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
