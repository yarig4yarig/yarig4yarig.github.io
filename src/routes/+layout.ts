import { setupI18n } from '$lib/i18n'

export const prerender = true
export const trailingSlash = 'always'

export async function load() {
    await setupI18n('en')
    return {}
}
