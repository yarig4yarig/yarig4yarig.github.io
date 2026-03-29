<script lang='ts'>
    import { dev } from '$app/environment'
    import Window from '$lib/components/Window.svelte'
    import Giscus from '@giscus/svelte'
    import { locale } from 'svelte-i18n'

    $: lang = $locale?.split('-')[0] || 'en'
</script>

{#if !dev}
    <Window title='Comments' width={1500} height='auto'>
        <Giscus
            repo='yarig4yarig/yarig4yarig.github.io'
            repoId='R_kgDOMBPMIg'
            category='Announcements'
            categoryId='DIC_kwDOMBPMIs4C5hmr'
            mapping='pathname'
            strict='0'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='bottom'
            theme='preferred_color_scheme'
            lang={lang}
        />
    </Window>
{/if}
