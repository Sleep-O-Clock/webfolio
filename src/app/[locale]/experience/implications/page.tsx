"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import styles from "@/src/styles/SubPage.module.css"

export default function ImplicationsPage() {
    const params = useParams()
    const locale = params.locale as string
    const t = getMessages(locale)
    const sidebarMargin = useSidebarMargin()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState("overview")

    const sidebarLinks = [
        { id: "overview", label: t.experience.overview },
        { id: "impl-1", label: "Student Association VP" },
        { id: "impl-2", label: "Coding Club President" },
        { id: "impl-3", label: "Volunteer Tutor" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
    }

    const implicationData: Record<string, {
        title: string;
        organization: string;
        period: string;
        type: string;
        responsibilities: string[];
        impact: string[];
        skills: string[];
    }> = {
        "impl-1": {
            title: "Vice President of Technology",
            organization: "Engineering Student Association",
            period: "September 2025 - Present",
            type: "Elected Leadership Position",
            responsibilities: [
                "Led technology initiatives for organization of 500+ engineering students",
                "Managed complete website redesign and migration to modern tech stack",
                "Coordinated team of 5 developers for various web projects",
                "Organized monthly tech workshops covering topics from web development to AI",
                "Collaborated with other executive members on strategic planning and events",
                "Maintained organization's digital infrastructure and online presence"
            ],
            impact: [
                "Increased website traffic by 200% through improved UX and content",
                "Successfully organized 8 technical workshops with 300+ total participants",
                "Launched new online platform for student project showcases",
                "Secured $5,000 in sponsorship from tech companies for events",
                "Improved internal communication tools, reducing meeting coordination time by 50%"
            ],
            skills: ["Leadership", "Project Management", "Web Development", "Public Speaking", "Event Organization"]
        },
        "impl-2": {
            title: "President",
            organization: "University Coding Club",
            period: "September 2024 - May 2025",
            type: "Student Club Leadership",
            responsibilities: [
                "Organized weekly coding challenges and algorithm practice sessions",
                "Coordinated with faculty advisors and university administration",
                "Managed club budget and secured funding for activities",
                "Recruited and mentored executive team of 6 members",
                "Planned and executed annual hackathon with 100+ participants",
                "Established partnerships with local tech companies for sponsorship and mentorship"
            ],
            impact: [
                "Grew club membership from 30 to 100+ active members in one year",
                "Successfully organized university's first 24-hour hackathon",
                "Secured $8,000 in sponsorship from 4 tech companies",
                "Created sustainable club structure and documentation for future executives",
                "Established partnerships with 3 other university tech clubs for joint events"
            ],
            skills: ["Leadership", "Team Building", "Event Management", "Fundraising", "Communication"]
        },
        "impl-3": {
            title: "Volunteer Tutor",
            organization: "Community Learning Center",
            period: "January 2023 - Present",
            type: "Ongoing Volunteer Work",
            responsibilities: [
                "Provide free tutoring in mathematics and computer science twice weekly",
                "Help students from disadvantaged backgrounds prepare for university entrance exams",
                "Developed educational materials and practice problems for various topics",
                "Mentor high school students interested in pursuing STEM careers",
                "Organize study groups and collaborative learning sessions",
                "Adapt teaching methods to accommodate different learning styles"
            ],
            impact: [
                "Tutored over 40 students with an 85% university acceptance rate",
                "Created comprehensive study guide used by 100+ students",
                "Helped 5 students obtain STEM scholarships",
                "Received 'Volunteer of the Year' award from organization",
                "Inspired 10+ students to pursue computer science degrees"
            ],
            skills: ["Teaching", "Mentoring", "Communication", "Patience", "Curriculum Development", "Empathy"]
        },
    }

    const currentImplication = implicationData[activeSection]

    return (
        <>
            <Sidebar
                title={t.experience.implications}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${t.experience.title}`,
                    onClick: () => router.push(`/${locale}/experience`)
                }}
            />
            <main className={styles.containerNarrow} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.experience.implications}</h1>
                <p className={styles.pageSubtitle}>
                    {t.experience.implicationsPage.subtitle}
                </p>

                {activeSection === "overview" && (
                    <section>
                        <div className={styles.cardWithMargin}>
                            <h2 className={styles.overviewTitle}>{t.experience.implicationsPage.overviewTitle}</h2>
                            <p className={styles.bodyTextShort}>
                                {t.experience.implicationsPage.overviewIntro}
                            </p>
                            <p className={styles.bodyTextShort}>
                                {t.experience.implicationsPage.overviewDetails}
                            </p>
                        </div>
                    </section>
                )}

                {currentImplication && activeSection !== "overview" && (
                    <section>
                        <div className={styles.timelineCard}>
                            <div className={styles.headerRow}>
                                <h2 className={styles.titleLarge}>{currentImplication.title}</h2>
                                <span className={styles.periodText}>{currentImplication.period}</span>
                            </div>
                            <p className={styles.organizationText}>
                                {currentImplication.organization}
                            </p>
                            <p className={styles.locationText}>
                                {currentImplication.type}
                            </p>

                            <div className={styles.sectionTop}>
                                <h3 className={styles.subsectionTitle}>{t.experience.implicationsPage.responsibilities}</h3>
                                <ul className={styles.list}>
                                    {currentImplication.responsibilities.map((item, index) => (
                                        <li key={index} className={`${styles.listItem} ${styles.bulletListItem}`}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <h3 className={styles.subsectionTitle}>{t.experience.implicationsPage.impact}</h3>
                                <ul className={styles.list}>
                                    {currentImplication.impact.map((item, index) => (
                                        <li key={index} className={`${styles.listItem} ${styles.checkListItem}`}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className={styles.subsectionTitle}>{t.experience.implicationsPage.skills}</h3>
                                <div className={styles.tagContainer}>
                                    {currentImplication.skills.map((skill, index) => (
                                        <span key={index} className={styles.tag}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    )
}
