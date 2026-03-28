<script lang='ts'>
    import { onMount } from 'svelte'
    import { getLocaleFromNavigator, locale } from 'svelte-i18n'

    const LANGUAGES = [
        { code: 'en', label: 'English' },
        { code: 'ru', label: 'Русский' },
    ]

    const LOCALE_STORAGE_KEY = 'preferred-locale'

    let selectedLang = 'en'

    onMount(() => {
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
        const current = savedLocale || $locale || getLocaleFromNavigator() || 'en'
        locale.set(current)
        selectedLang = current
    })

    function handleChange(event: Event) {
        const value = (event.target as HTMLSelectElement).value
        locale.set(value)
        selectedLang = value
        localStorage.setItem(LOCALE_STORAGE_KEY, value)
    }
</script>

<select bind:value={selectedLang} on:change={handleChange}>
    {#each LANGUAGES as lang}
        <option value={lang.code}>{lang.label}</option>
    {/each}
</select>
