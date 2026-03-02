"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "../ThemeToggle";
import LanguageToggle from "../LanguageToggle";
import { getMessages } from "@/src/i18n";

export default function Navbar({ locale }: { locale: string }) {
    const messages = getMessages(locale);
    const nav = messages.nav;

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <Link href={`/${locale}/about`} className={styles.link}>
                    {nav.home}
                </Link>

                {/* Projects Dropdown */}
                <div className={styles.dropdown}>
                    <Link href={`/${locale}/projects`} className={styles.dropdownTrigger}>
                        {nav.projects} ▾
                    </Link>
                    <div className={styles.dropdownMenu}>
                        <Link href={`/${locale}/projects/personal`} className={styles.dropdownItem}>
                            {messages.projects.personalProjects}
                        </Link>
                        <Link href={`/${locale}/projects/school`} className={styles.dropdownItem}>
                            {messages.projects.schoolProjects}
                        </Link>
                        <Link href={`/${locale}/projects/pmc`} className={styles.dropdownItem}>
                            {messages.projects.pmc}
                        </Link>
                    </div>
                </div>

                {/* Experience Dropdown */}
                <div className={styles.dropdown}>
                    <Link href={`/${locale}/experience`} className={styles.dropdownTrigger}>
                        {nav.experience} ▾
                    </Link>
                    <div className={styles.dropdownMenu}>
                        <Link href={`/${locale}/experience/work`} className={styles.dropdownItem}>
                            {messages.experience.workExperiences}
                        </Link>
                        <Link href={`/${locale}/experience/implications`} className={styles.dropdownItem}>
                            {messages.experience.implications}
                        </Link>
                    </div>
                </div>

                <Link href={`/${locale}/contact`} className={styles.link}>
                    {nav.contact}
                </Link>
            </div>

            <div className={styles.right}>
                <LanguageToggle currentLocale={locale} />
                <ThemeToggle />
            </div>
        </nav>
    );
}