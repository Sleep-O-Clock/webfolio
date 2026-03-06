import { getMarkdown } from "@/src/lib/markdown"
import PMCClientPage from "./PMCClientPage"

export default async function PMCPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params

    // Load markdown content on the server
    const markdownContent = getMarkdown('projects/pmc/pmc', locale)

    return <PMCClientPage locale={locale} content={markdownContent} />
}
