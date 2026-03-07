import { getMessages } from "@/src/i18n"
import { getMarkdown } from "@/src/lib/markdown"
import ContactClient from "./ContactClient"

export default async function ContactPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = getMessages(locale)

    // Fetch all markdown content server-side (except form)
    const markdownContent = {
        "info": getMarkdown("contact/info", locale),
        "social": getMarkdown("contact/social", locale),
        "availability": getMarkdown("contact/availability", locale),
    }

    const translations = {
        title: t.contact.title,
        form: t.contact.sidebarLabels.form,
        info: t.contact.sidebarLabels.info,
        social: t.contact.sidebarLabels.social,
        availability: t.contact.sidebarLabels.availability,
        formLabels: t.contact.form,
    }

    return (
        <ContactClient
            translations={translations}
            markdownContent={markdownContent}
        />
    )
}
