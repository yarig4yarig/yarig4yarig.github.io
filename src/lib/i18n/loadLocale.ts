const modules = import.meta.glob(
    '/src/lib/i18n/locales/**/*.md',
    { eager: true, query: '?raw', import: 'default' },
)

export function loadLocale(lang: string) {
    const messages: Record<string, string> = {}

    for (const path in modules) {
        if (!path.includes(`/locales/${lang}/`)) continue

        const key = path
            .split(`/locales/${lang}/`)[1]
            .replace('.md', '')
            .replaceAll('/', '.')

        messages[key] = modules[path] as string
    }

    return messages
}
