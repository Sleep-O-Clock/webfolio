"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "../ThemeToggle";
import LanguageToggle from "../LanguageToggle";
import { getMessages } from "@/src/i18n";

export default function Navbar({ locale }: { locale: string }) {
    const messages = getMessages(locale);
    const nav = messages.nav;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null);
    };

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className={styles.nav}>
            {/* Mobile Menu Button */}
            <button 
                className={styles.hamburger}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
                <span className={isMobileMenuOpen ? styles.hamburgerOpen : ""}></span>
                <span className={isMobileMenuOpen ? styles.hamburgerOpen : ""}></span>
                <span className={isMobileMenuOpen ? styles.hamburgerOpen : ""}></span>
            </button>

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

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobileMenuHeader}>
                    <LanguageToggle currentLocale={locale} />
                    <ThemeToggle />
                </div>
                
                <div className={styles.mobileMenuContent}>
                    <Link 
                        href={`/${locale}/about`} 
                        className={styles.mobileLink}
                        onClick={closeMobileMenu}
                    >
                        {nav.home}
                    </Link>

                    {/* Projects Mobile Dropdown */}
                    <div className={styles.mobileDropdown}>
                        <button 
                            className={styles.mobileDropdownTrigger}
                            onClick={() => toggleDropdown('projects')}
                        >
                            {nav.projects}
                            <span className={openDropdown === 'projects' ? styles.arrowUp : styles.arrowDown}>▾</span>
                        </button>
                        <div className={`${styles.mobileDropdownMenu} ${openDropdown === 'projects' ? styles.mobileDropdownMenuOpen : ""}`}>
                            <Link 
                                href={`/${locale}/projects/personal`} 
                                className={styles.mobileDropdownItem}
                                onClick={closeMobileMenu}
                            >
                                {messages.projects.personalProjects}
                            </Link>
                            <Link 
                                href={`/${locale}/projects/school`} 
                                className={styles.mobileDropdownItem}
                                onClick={closeMobileMenu}
                            >
                                {messages.projects.schoolProjects}
                            </Link>
                            <Link 
                                href={`/${locale}/projects/pmc`} 
                                className={styles.mobileDropdownItem}
                                onClick={closeMobileMenu}
                            >
                                {messages.projects.pmc}
                            </Link>
                        </div>
                    </div>

                    {/* Experience Mobile Dropdown */}
                    <div className={styles.mobileDropdown}>
                        <button 
                            className={styles.mobileDropdownTrigger}
                            onClick={() => toggleDropdown('experience')}
                        >
                            {nav.experience}
                            <span className={openDropdown === 'experience' ? styles.arrowUp : styles.arrowDown}>▾</span>
                        </button>
                        <div className={`${styles.mobileDropdownMenu} ${openDropdown === 'experience' ? styles.mobileDropdownMenuOpen : ""}`}>
                            <Link 
                                href={`/${locale}/experience/work`} 
                                className={styles.mobileDropdownItem}
                                onClick={closeMobileMenu}
                            >
                                {messages.experience.workExperiences}
                            </Link>
                            <Link 
                                href={`/${locale}/experience/implications`} 
                                className={styles.mobileDropdownItem}
                                onClick={closeMobileMenu}
                            >
                                {messages.experience.implications}
                            </Link>
                        </div>
                    </div>

                    <Link 
                        href={`/${locale}/contact`} 
                        className={styles.mobileLink}
                        onClick={closeMobileMenu}
                    >
                        {nav.contact}
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className={styles.mobileOverlay}
                    onClick={closeMobileMenu}
                />
            )}
        </nav>
    );
}