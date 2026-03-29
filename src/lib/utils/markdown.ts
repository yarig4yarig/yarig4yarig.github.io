import { base } from '$app/paths'
import { marked as markedOriginal } from 'marked'

export function marked(src: string): string {
    const html = markedOriginal(src) as string
    return html
        .replace(/src="\/(?!\/|https?:)/g, `src="${base}/`)
        .replace(/href="\/(?!\/|https?:)/g, `href="${base}/`)
}
