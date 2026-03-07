"use client"

import { useSidebarMargin } from "@/src/hooks/useSidebarMargin";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import styles from "@/src/styles/SubPage.module.css";


interface MarkdownClientProps {
    content: string;
}

export default function MarkdownClient({ content }: MarkdownClientProps) {

    const sidebarMargin = useSidebarMargin()

    return (
        <>
            <main className={styles.container} style={sidebarMargin}>
                <div>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {content}
                    </ReactMarkdown>
                </div>
            </main>
        </>
    );
}

