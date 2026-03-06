# Markdown Content System

Store your page content as markdown files in this directory.

## Quick Start

1. Create `[pagename].en.md` and `[pagename].fr.md`
2. Write your content in markdown
3. Load it in your page:

```tsx
import { getMarkdown } from "@/src/lib/markdown"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from "@/src/styles/SubPage.module.css"

export default async function MyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const content = getMarkdown('pagename', locale)
    
    return (
        <main className={styles.container}>
            <div className={styles.markdownContent}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>
        </main>
    )
}
```

## Current Files

- `pmc.en.md` / `pmc.fr.md` - PMC project content
- `TEMPLATE.md` - Template for creating new pages
- `README.md` - This file

## Markdown Features

✅ Simple markdown syntax  
✅ **HTML support** - use standard HTML tags like `<img>`, `<div>`, etc.  
✅ Automatic responsive styling via `.markdownContent`  
✅ Easy translations (one file per language)  
✅ Version control friendly  
✅ Non-developers can edit content  
✅ Supports headings, lists, bold, italic, links, code, etc.

See `TEMPLATE.md` for markdown examples and syntax.