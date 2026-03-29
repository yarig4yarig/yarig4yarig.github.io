<script lang="ts">
    import Giscus from "@giscus/svelte";
    import Window from "$lib/components/Window.svelte";
    import { locale } from 'svelte-i18n';
    import { dev } from '$app/environment';

    // Преобразуем локаль в формат Giscus (en, ru и т.д.)
    $: giscusLang = $locale?.split('-')[0] || 'en';
</script>

{#if !dev}
    <Window title="Comments" width={1500} height="auto">
        <Giscus
            repo="yarig4yarig/yarig4yarig.github.io"
            repoId="R_kgDOMBPMIg"
            category="Announcements"
            categoryId="DIC_kwDOMBPMIs4C5hmr"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="preferred_color_scheme"
            lang={giscusLang}
        />
    </Window>
{/if}
