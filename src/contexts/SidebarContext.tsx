"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SidebarContextType {
    isCollapsed: boolean
    setIsCollapsed: (collapsed: boolean) => void
    isInitializing: boolean
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsedState] = useState(() => {
        // Initialize from localStorage on first render (SSR-safe)
        if (typeof window !== 'undefined') {
            const savedState = localStorage.getItem('sidebarCollapsed')
            return savedState === 'true'
        }
        return false
    })
    const [isInitializing, setIsInitializing] = useState(true)

    // Mark initialization complete after first render
    useEffect(() => {
        setIsInitializing(false)
    }, [])

    // Save sidebar state to localStorage whenever it changes
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
