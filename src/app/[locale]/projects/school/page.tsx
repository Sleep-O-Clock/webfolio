import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import SchoolProjectsClient from "./SchoolProjectsClient"

export default async function SchoolProjectsPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side
    const markdownContent = {
        "overview": getMarkdown("projects/school/school.overview", locale),
        "school-1": getMarkdown("projects/school/school-1", locale),
        "school-2": getMarkdown("projects/school/school-2", locale),
        "school-3": getMarkdown("projects/school/school-3", locale),
    }

    const translations = {
        schoolProjects: t.projects.schoolProjects,
        overview: t.projects.overview,
        projectsTitle: t.projects.title,
    }

    return (
        <SchoolProjectsClient
            locale={locale}
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
