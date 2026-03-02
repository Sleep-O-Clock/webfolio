"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import styles from "./ThemeToggle.module.css"

export default function ThemeToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const saveTheme = localStorage.getItem("theme")
        if (saveTheme === "dark") {
            document.documentElement.classList.add("dark")
            setDark(true)
        }
    }, [])

    const toggleTheme = () => {
        const html = document.documentElement

        if (dark) {
            html.classList.remove("dark")
            localStorage.setItem("theme", "light")
        } else {
            html.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        setDark(!dark)
    }
    return (
        <button
            onClick={toggleTheme}
            className={styles.toggleButton}
            aria-label="Toggle theme"
        >
            <span className={styles.icon}>
                {dark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </span>
        </button>
    )
}