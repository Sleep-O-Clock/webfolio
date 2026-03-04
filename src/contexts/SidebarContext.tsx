"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SidebarContextType {
    isCollapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
    isInitializing: boolean
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
    // Always start with false to match server render
    const [isCollapsed, setIsCollapsedState] = useState(false)
    const [isInitializing, setIsInitializing] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    // Load from localStorage after mount (client-only)
    useEffect(() => {
        setIsMounted(true)
        const savedState = localStorage.getItem('sidebarCollapsed')
        if (savedState === 'true') {
            setIsCollapsedState(true)
        }
        setIsInitializing(false)
    }, [])

    // Wrapper function that updates both state and localStorage
    const setIsCollapsed = (collapsed: boolean) => {
        setIsCollapsedState(collapsed)
        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebarCollapsed', String(collapsed))
        }
    }

    return (
        <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed, isInitializing }}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider")
    }
    return context
}
