<script lang='ts'>
    import LanguageSelect from '$lib/components/LanguageSelect.svelte'
    import NoMobileBanner from '$lib/components/NoMobileBanner.svelte'
    import VideoHover from '$lib/components/VideoHover.svelte'
    import Window from '$lib/components/Window.svelte'
    import '$lib/style/win98el.scss'
    import '$lib/style/layout.scss'
</script>

<svelte:head>
    <link rel='icon' href='/favicon.png' />
    <title>GearBoxing's web world</title>
</svelte:head>

<NoMobileBanner />

<div class='window-container'>
    <div class='window-row'>
        <Window title='Hello world' width={500} height={200} bg_col='black'>
            <a href='/'>
                <VideoHover src='/assets/gearboxing-logo.mkv' />
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
