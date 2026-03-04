"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import WorkOverviewSection from "./WorkOverviewSection"
import WorkExperienceDetailSection from "./WorkExperienceDetailSection"
import styles from "@/src/styles/SubPage.module.css"

export default function WorkExperiencePage() {
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
            if (hash && ["overview", "work-1", "work-2", "work-3"].includes(hash)) {
                setActiveSection(hash);
            }
        };

        // Set initial hash on mount
        updateFromHash();

        window.addEventListener('hashchange', updateFromHash);
        return () => window.removeEventListener('hashchange', updateFromHash);
    }, []);

    const sidebarLinks = [
        { id: "overview", label: t.experience.overview },
        { id: "work-1", label: "Software Developer Intern" },
        { id: "work-2", label: "Junior Developer" },
        { id: "work-3", label: "Research Assistant" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    const experienceData: Record<string, {
        title: string;
        organization: string;
        period: string;
        location: string;
        type: string;
        responsibilities: string[];
        achievements: string[];
        technologies: string[];
    }> = {
        "work-1": {
            title: "Software Developer Intern",
            organization: "Tech Innovations Inc.",
            period: "May 2025 - August 2025",
            location: "Montreal, QC",
            type: "Full-time Internship",
            responsibilities: [
                "Developed and maintained web applications using React and TypeScript for client-facing products",
                "Collaborated with senior developers on RESTful API design and implementation using Node.js",
                "Participated actively in code reviews, sprint planning, and agile development processes",
                "Created comprehensive unit and integration tests using Jest and React Testing Library",
                "Documented technical specifications and maintained API documentation"
            ],
            achievements: [
                "Improved application load time by 30% through code optimization and lazy loading",
                "Implemented a new feature that increased user engagement by 15%",
                "Contributed to the migration of legacy codebase to TypeScript",
                "Received positive feedback from team lead for code quality and collaboration"
            ],
            technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Git", "Jest", "Docker"]
        },
        "work-2": {
            title: "Junior Developer",
            organization: "Startup Labs",
            period: "September 2024 - April 2025",
            location: "Quebec City, QC",
            type: "Part-time Contract",
            responsibilities: [
                "Built mobile application features using React Native for iOS and Android platforms",
                "Implemented automated testing suite with Jest and Detox for end-to-end testing",
                "Worked directly with clients to gather requirements and provide technical solutions",
                "Mentored new interns and junior team members on coding best practices",
                "Participated in weekly tech talks and knowledge sharing sessions"
            ],
            achievements: [
                "Successfully launched mobile app update with 4.8 star rating",
                "Reduced bug count by 40% through comprehensive test coverage",
                "Led the implementation of CI/CD pipeline using GitHub Actions",
                "Presented technical demo to potential investors"
            ],
            technologies: ["React Native", "Redux", "Firebase", "Expo", "GitHub Actions", "Detox"]
        },
        "work-3": {
            title: "Research Assistant",
            organization: "University Computer Science Lab",
            period: "January 2024 - August 2024",
            location: "Université Laval, QC",
            type: "Part-time Research Position",
            responsibilities: [
                "Conducted research on machine learning algorithms for natural language processing",
                "Developed data processing pipelines in Python for large-scale text analysis",
                "Implemented and evaluated various ML models using TensorFlow and scikit-learn",
                "Analyzed experimental results and contributed to research documentation",
                "Presented findings at weekly lab meetings and student research symposium"
            ],
            achievements: [
                "Co-authored research paper accepted at student research conference",
                "Developed novel data preprocessing technique that improved model accuracy by 8%",
                "Created reusable Python library for text analysis used by other lab members",
                "Received research scholarship for outstanding contribution"
            ],
            technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Jupyter", "LaTeX"]
        },
    }

    const currentExperience = experienceData[activeSection]

    return (
        <>
            <Sidebar
                title={t.experience.workExperiences}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${t.experience.title}`,
                    onClick: () => router.push(`/${locale}/experience`)
                }}
            />
            <main className={styles.container} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.experience.workExperiences}</h1>
                <p className={styles.pageSubtitle}>
                    {t.experience.work.subtitle}
                </p>

                {activeSection === "overview" && (
                    <WorkOverviewSection
                        title={t.experience.work.overviewTitle}
                        intro={t.experience.work.overviewIntro}
                        details={t.experience.work.overviewDetails}
                    />
                )}

                {currentExperience && activeSection !== "overview" && (
                    <WorkExperienceDetailSection
                        experience={currentExperience}
                        labels={{
                            responsibilities: t.experience.work.responsibilities,
                            achievements: t.experience.work.achievements,
                            technologies: t.experience.work.technologies
                        }}
                    />
                )}
            </main>
        </>
    )
}
