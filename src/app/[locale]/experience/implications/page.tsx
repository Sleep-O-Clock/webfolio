import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import ImplicationsClient from "./ImplicationsClient"

export default async function ImplicationsPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side
    const markdownContent = {
        "overview": getMarkdown("experience/implications/implications.overview", locale),
        "impl-1": getMarkdown("experience/implications/impl-1", locale),
        "impl-2": getMarkdown("experience/implications/impl-2", locale),
        "impl-3": getMarkdown("experience/implications/impl-3", locale),
    }

    const translations = {
        implications: t.experience.implications,
        overview: t.experience.overview,
        experienceTitle: t.experience.title,
    }

    return (
        <ImplicationsClient
            locale={locale}
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
