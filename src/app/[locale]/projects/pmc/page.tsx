import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import PMCClient from "./PMCClient"

export default async function PMCPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side
    const markdownContent = {
        "overview": getMarkdown("projects/pmc/pmc.overview", locale),
        "pmc-client": getMarkdown("projects/pmc/pmc", locale),
    }

    const translations = {
        pmc: t.projects.pmc,
        projectsTitle: t.projects.title,
    }

    return (
        <PMCClient 
            locale={locale}
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
