"use client"

import { usePathname, useRouter } from "next/navigation"
import styles from "./LanguageToggle.module.css"

export default function LanguageToggle({ currentLocale }: { currentLocale: string }) {
    const pathname = usePathname()
    const router = useRouter()

    const toggleLanguage = () => {
        const newLocale = currentLocale === "en" ? "fr" : "en"

        // Replace the locale in the pathname
        const segments = pathname.split("/")
        segments[1] = newLocale
        const newPath = segments.join("/")

        router.push(newPath)
    }

    return (
        <button
            onClick={toggleLanguage}
            className={styles.toggleButton}
            aria-label="Toggle language"
            title={currentLocale === "en" ? "Switch to French" : "Switch to English"}
        >
            <span className={styles.label}>
                {currentLocale === "en" ? "FR" : "EN"}
            </span>
        </button>
    )
}
