"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import SchoolProjectOverviewSection from "./SchoolProjectOverviewSection"
import SchoolProjectDetailSection from "./SchoolProjectDetailSection"
import styles from "@/src/styles/SubPage.module.css"

export default function SchoolProjectsPage() {
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
            if (hash && ["overview", "school-1", "school-2", "school-3"].includes(hash)) {
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
        { id: "school-1", label: "Data Structures Project" },
        { id: "school-2", label: "Database Management System" },
        { id: "school-3", label: "Machine Learning Classifier" },
    ]

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId)
        window.location.hash = sectionId
    }

    const projectData: Record<string, {
        title: string;
        course: string;
        description: string;
        details: string;
        technologies: string[];
        learnings: string[];
    }> = {
        "school-1": {
            title: "Data Structures & Algorithms Implementation",
            course: "CSE2100 - Advanced Data Structures",
            description: "Comprehensive implementation of various data structures and algorithms",
            details: "Implemented binary search trees, AVL trees, hash tables with separate chaining, and graph data structures in C++. Developed and analyzed sorting algorithms (QuickSort, MergeSort, HeapSort) and pathfinding algorithms (Dijkstra's, A*). Includes comprehensive unit tests and performance benchmarking.",
            technologies: ["C++", "STL", "Google Test", "CMake", "Git"],
            learnings: [
                "Deep understanding of time and space complexity analysis",
                "Memory management and pointer manipulation in C++",
                "Trade-offs between different data structure implementations",
                "Importance of thorough testing for complex algorithms"
            ]
        },
        "school-2": {
            title: "University Management Database System",
            course: "CSE3210 - Database Systems",
            description: "Relational database design and implementation for university operations",
            details: "Designed and implemented a comprehensive relational database for managing student records, course registrations, faculty information, and grade management. Created normalized schema following 3NF, wrote complex SQL queries with joins and subqueries, and developed stored procedures and triggers for data integrity. Implemented a web interface using PHP for database interaction.",
            technologies: ["MySQL", "PHP", "SQL", "PhpMyAdmin", "HTML/CSS"],
            learnings: [
                "Database normalization and schema design principles",
                "Writing efficient SQL queries and optimizing performance",
                "Implementing business logic through triggers and stored procedures",
                "Understanding of ACID properties and transaction management"
            ]
        },
        "school-3": {
            title: "Image Classification with Neural Networks",
            course: "CSE4250 - Machine Learning",
            description: "CNN-based image classifier for multi-class classification",
            details: "Developed a convolutional neural network for classifying images into 10 categories using the CIFAR-10 dataset. Implemented data augmentation techniques, experimented with different architectures (VGG, ResNet), and utilized transfer learning. Achieved 92% accuracy on the test set after hyperparameter tuning. Final project included detailed analysis of model performance and error cases.",
            technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "Jupyter"],
            learnings: [
                "Understanding of CNN architectures and layer design",
                "Techniques for preventing overfitting (dropout, regularization)",
                "Importance of data preprocessing and augmentation",
                "Model evaluation metrics and confusion matrix analysis"
            ]
        },
    }

    const currentProject = projectData[activeSection]

    return (
        <>
            <Sidebar
                title={t.projects.schoolProjects}
                links={sidebarLinks}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                backLink={{
                    label: `← ${t.projects.title}`,
                    onClick: () => router.push(`/${locale}/projects`)
                }}
            />
            <main className={styles.container} style={sidebarMargin}>
                <h1 className={styles.pageTitle}>{t.projects.schoolProjects}</h1>
                <p className={styles.pageSubtitle}>
                    {t.projects.school.subtitle}
                </p>

                {activeSection === "overview" && (
                    <SchoolProjectOverviewSection
                        title={t.projects.school.overviewTitle}
                        intro={t.projects.school.overviewIntro}
                        details={t.projects.school.overviewDetails}
                    />
                )}

                {currentProject && activeSection !== "overview" && (
                    <SchoolProjectDetailSection
                        project={currentProject}
                        labels={{
                            technologiesUsed: t.projects.technologiesUsed,
                            keyLearnings: t.projects.school.keyLearnings,
                            viewProject: t.projects.viewProject,
                            viewCode: t.projects.viewCode
                        }}
                    />
                )}
            </main>
        </>
    )
}
