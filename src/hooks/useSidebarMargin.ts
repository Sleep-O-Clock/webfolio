"use client"

import { useSidebar } from "@/src/contexts/SidebarContext"

export function useSidebarMargin() {
    const { isCollapsed } = useSidebar()
    const sidebarWidth = 330

    // When sidebar is closed: center at 50vw (middle of window)
    // When sidebar is open: center at sidebar + (remaining space / 2)
    // = 330px + ((100vw - 330px) / 2) = 330px + 50vw - 165px
    return {
        position: "relative" as const,
        left: isCollapsed ? "50vw" : `calc(${sidebarWidth}px + (100vw - ${sidebarWidth}px) / 2)`,
        transform: "translateX(-50%)",
        transition: "left 0.3s ease"
    }
}
