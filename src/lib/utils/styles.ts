import { base } from '$app/paths'

export function processStyle(css: string): string {
    return css.replace(/url\(["']?\/assets\//g, `url("${base}/assets/`)
}
