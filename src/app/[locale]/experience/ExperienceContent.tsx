"use client"

import Link from "next/link"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import { useRouter } from "next/navigation"
import styles from "@/src/styles/OverviewPage.module.css"

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
            <main className={styles.main} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.experience.title}</h1>
                <p className={styles.pageSubtitle}>
                    {t.experience.subtitle}
                </p>

                <section>
                    <p className={styles.exploreText}>
                        {t.experience.exploreText}
                    </p>

                    <div className={styles.cardsContainer}>
                        <Link href={`/${locale}/experience/work`} className={styles.card}>
                            <h2 className={styles.cardTitle}>{t.experience.workExperiences}</h2>
                            <p className={styles.cardDescription}>
                                {t.experience.cards.work.description}
                            </p>
                        </Link>

                        <Link href={`/${locale}/experience/implications`} className={styles.card}>
                            <h2 className={styles.cardTitle}>{t.experience.implications}</h2>
                            <p className={styles.cardDescription}>
                                {t.experience.cards.implications.description}
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

