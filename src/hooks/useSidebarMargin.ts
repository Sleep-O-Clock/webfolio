"use client"

import { useSidebar } from "@/src/contexts/SidebarContext"

export function useSidebarMargin() {
    const { isCollapsed } = useSidebar()

    return {
        marginLeft: isCollapsed ? "0px" : "330px",
        transition: "margin-left 0.3s ease"
    }
}
