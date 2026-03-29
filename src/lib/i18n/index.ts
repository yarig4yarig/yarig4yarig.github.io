import { init, locale, register, waitLocale } from 'svelte-i18n'
import { loadLocale } from './loadLocale'

const defaultLocale = 'en'

register('en', () => Promise.resolve(loadLocale('en')))
register('ru', () => Promise.resolve(loadLocale('ru')))

init({
    fallbackLocale: defaultLocale,
    initialLocale: defaultLocale,
})

export async function setupI18n(lang: string = defaultLocale) {
    locale.set(lang)
    await waitLocale()
}
