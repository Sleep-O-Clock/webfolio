"use client"

import { useSidebar } from "@/src/contexts/SidebarContext"
import { useState, useEffect } from "react"

export function useSidebarMargin() {
    const { isCollapsed, isInitializing } = useSidebar()
    const sidebarWidth = 330
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // On mobile, sidebar doesn't affect layout (it overlays)
    // On desktop: When sidebar is closed, center at 50vw
    // When sidebar is open: center at sidebar + (remaining space / 2)
    if (isMobile) {
        return {
            position: "relative" as const,
            left: "50vw",
            transform: "translateX(-50%)",
            maxWidth: "min(1200px, 90vw)",
            transition: isInitializing ? "none" : "left 0.3s ease, transform 0.3s ease"
        }
    }

    return {
        position: "relative" as const,
        left: isCollapsed ? "50vw" : `calc(${sidebarWidth}px + (100vw - ${sidebarWidth}px) / 2)`,
        transform: "translateX(-50%)",
        maxWidth: isCollapsed ? "min(1200px, 80vw)" : `min(1200px, calc(80vw - ${sidebarWidth}px))`,
        transition: isInitializing ? "none" : "left 0.3s ease, transform 0.3s ease"
    }
}
