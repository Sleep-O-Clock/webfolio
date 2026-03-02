import en from "@/src/messages/en.json"
import fr from "@/src/messages/fr.json"

export type Locale = "en" | "fr"
export const messages = { en, fr } as const

export function getMessages(locale: string) {
    return (messages[locale as Locale] ?? messages.en)
}