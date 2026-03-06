import fs from 'fs'
import path from 'path'

/**
 * Get markdown content for a page
 * @param pagePath - Path to the markdown file (e.g., 'projects/pmc', 'about', 'contact')
 * @param locale - Locale code (e.g., 'en', 'fr')
 * @returns The raw markdown content
 */
export function getMarkdown(pagePath: string, locale: string): string {
    const filePath = path.join(process.cwd(), 'src', 'messages', 'md', `${pagePath}.${locale}.md`)

    if (!fs.existsSync(filePath)) {
        throw new Error(`Markdown file not found: ${filePath}`)
    }

    return fs.readFileSync(filePath, 'utf-8')
}
