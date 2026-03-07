import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import WorkClient from "./WorkClient"

export default async function WorkExperiencePage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side
    const markdownContent = {
        "overview": getMarkdown("experience/work/work.overview", locale),
        "work-1": getMarkdown("experience/work/work-1", locale),
        "work-2": getMarkdown("experience/work/work-2", locale),
        "work-3": getMarkdown("experience/work/work-3", locale),
    }

    const translations = {
        workExperiences: t.experience.workExperiences,
        overview: t.experience.overview,
        experienceTitle: t.experience.title,
        work1Title: t.experience.cards.work.djobInternship.title,
    }

    return (
        <WorkClient
            locale={locale}
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
