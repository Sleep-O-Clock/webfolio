import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import PersonalProjectsClient from "./PersonalProjectsClient"

export default async function PersonalProjectsPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side
    const markdownContent = {
        "overview": getMarkdown("projects/personal/personnal.overview", locale),
        "personal-1": getMarkdown("projects/personal/personnal", locale),
    }

    const translations = {
        personalProjects: t.projects.personalProjects,
        overview: t.projects.overview,
        projectsTitle: t.projects.title,
    }

    return (
        <PersonalProjectsClient
            locale={locale}
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
