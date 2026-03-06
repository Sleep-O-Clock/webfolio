"use client"

import { useRouter } from "next/navigation"
import { getMessages } from "@/src/i18n"
import Sidebar from "@/src/components/layout/Sidebar"
import { useSidebarMargin } from "@/src/hooks/useSidebarMargin"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import styles from "@/src/styles/SubPage.module.css"

interface PMCClientPageProps {
    locale: string
    content: string
}

export default function PMCClientPage({ locale, content }: PMCClientPageProps) {
    const t = getMessages(locale)
    const sidebarMargin = useSidebarMargin()
    const router = useRouter()

    return (
        <>
            <Sidebar
                title={t.projects.pmc}
                backLink={{
                    label: `← ${t.projects.title}`,
                    onClick: () => router.push(`/${locale}/projects`)
                }}
            />
            <main className={styles.container} style={sidebarMargin}>
                <div className={styles.markdownContent}>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </main>
        </>
    )
}
