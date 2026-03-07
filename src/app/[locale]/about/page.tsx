import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import AboutClient from "./AboutClient"

export default async function AboutPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side
    const markdownContent = {
        "background": getMarkdown("about/background", locale),
        "skills": getMarkdown("about/skills", locale),
        "education": getMarkdown("about/education", locale),
    }

    const translations = {
        title: t.about.title,
        background: t.about.sidebarLabels.background,
        skills: t.about.sidebarLabels.skills,
        education: t.about.sidebarLabels.education,
    }

    return (
        <AboutClient
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
