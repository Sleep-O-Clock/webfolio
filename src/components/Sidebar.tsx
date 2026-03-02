"use client"

import { useState } from "react"
import { useSidebar } from "@/src/contexts/SidebarContext"
import styles from "./Sidebar.module.css"

interface SidebarLink {
    id: string
    label: string
    children?: SidebarLink[]
}

interface BackLink {
    label: string
    onClick: () => void
}

interface SidebarProps {
    title?: string
    links?: SidebarLink[]
    onSectionChange?: (sectionId: string) => void
    activeSection?: string
    backLink?: BackLink
}

export default function Sidebar({ title, links = [], onSectionChange, activeSection, backLink }: SidebarProps) {
    const { isCollapsed, setIsCollapsed } = useSidebar()
    const [currentSection, setCurrentSection] = useState(activeSection || "")

    const handleLinkClick = (id: string) => {
        setCurrentSection(id)
        if (onSectionChange) {
            onSectionChange(id)
        }
    }

    return (
        <>
            <button
                className={`${styles.toggleButton} ${isCollapsed ? styles.collapsed : ""}`}
                onClick={() => setIsCollapsed(!isCollapsed)}
                aria-label={isCollapsed ? "Open sidebar" : "Close sidebar"}
            >
                {isCollapsed ? "▶" : "◀"}
            </button>

            <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
                {backLink && (
                    <button
                        className={styles.backLink}
                        onClick={backLink.onClick}
                    >
                        {backLink.label}
                    </button>
                )}
                {title && <h2 className={styles.title}>{title}</h2>}
                {links.length > 0 && (
                    <nav className={styles.nav}>
                        {links.map((link) => (
                            <div key={link.id}>
                                <button
                                    className={`${styles.link} ${currentSection === link.id ? styles.active : ""}`}
                                    onClick={() => handleLinkClick(link.id)}
                                >
                                    {link.label}
                                </button>
                                {link.children && link.children.length > 0 && (
                                    <div className={styles.sublinks}>
                                        {link.children.map((child) => (
                                            <button
                                                key={child.id}
                                                className={`${styles.link} ${styles.sublink} ${currentSection === child.id ? styles.active : ""}`}
                                                onClick={() => handleLinkClick(child.id)}
                                            >
                                                {child.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                )}
            </aside>
        </>
    )
}
