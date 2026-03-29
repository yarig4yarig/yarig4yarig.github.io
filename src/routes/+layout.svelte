<script lang='ts'>
    import { base } from '$app/paths'
    import LanguageSelect from '$lib/components/LanguageSelect.svelte'
    import NoMobileBanner from '$lib/components/NoMobileBanner.svelte'
    import VideoHover from '$lib/components/VideoHover.svelte'
    import Window from '$lib/components/Window.svelte'
    import '$lib/style/base.scss'
    import '$lib/style/layout.scss'
    import { processStyle } from '$lib/utils/styles'
    import { onMount, onDestroy } from 'svelte'
    import { page } from '$app/stores'

    let defaultStyleEl: HTMLStyleElement | null = null

    $: hasCustomStyle = $page.data?.customStyle

    onMount(async () => {
        if (!hasCustomStyle) {
            const defaultStyleModule = await import('$lib/style/default.scss?inline')
            defaultStyleEl = document.createElement('style')
            defaultStyleEl.textContent = processStyle(defaultStyleModule.default)
            document.head.appendChild(defaultStyleEl)
        }
    })

    onDestroy(() => {
        defaultStyleEl?.remove()
    })

    $: if (hasCustomStyle) {
        defaultStyleEl?.remove()
        defaultStyleEl = null
    } else if (!defaultStyleEl && typeof window !== 'undefined') {
        import('$lib/style/default.scss?inline').then(module => {
            defaultStyleEl = document.createElement('style')
            defaultStyleEl.textContent = processStyle(module.default)
            document.head.appendChild(defaultStyleEl)
        })
    }
</script>

<svelte:head>
    <link rel='icon' href='{base}/favicon.png' />
    <title>GearBoxing's web world</title>
</svelte:head>

<NoMobileBanner />

<div class='window-container'>
    <div class='window-row'>
        <Window title='Hello world' width={500} height={200} bg_col='black'>
            <a href='{base}/'>
                <VideoHover src='{base}/assets/gearboxing-logo.mkv' />
            </a>
        </Window>
    </div>
    <div class='window-row'>
        <Window title='Settings' width={500} height='auto'>
            <LanguageSelect />
        </Window>
    </div>
</div>

<slot />
