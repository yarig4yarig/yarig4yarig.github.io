<script lang='ts'>
    export let src: string

    let videoEl: HTMLVideoElement

    function handleMouseEnter() {
        videoEl?.play()
    }

    function handleMouseLeave() {
        if (videoEl) {
            videoEl.pause()
            videoEl.currentTime = 0
        }
    }
</script>

<video
    bind:this={videoEl}
    {src}
    muted
    loop
    playsinline
    preload='metadata'
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
/>
