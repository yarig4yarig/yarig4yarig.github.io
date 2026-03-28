<script lang='ts'>
    import { marked } from 'marked'
    import { onMount } from 'svelte'
    import { _ } from 'svelte-i18n'

    const MOBILE_AGENTS = [
        'Android',
        'webOS',
        'iPhone',
        'iPad',
        'iPod',
        'BlackBerry',
        'IEMobile',
        'Opera Mini',
    ]

    let showBanner = false

    onMount(() => {
        const ua = navigator.userAgent || navigator.vendor || (window as any).opera || ''
        showBanner = MOBILE_AGENTS.some(agent => ua.includes(agent))
    })

    function closeBanner() {
        showBanner = false
    }
</script>

{#if showBanner}
    <div class='overlay'>
        <div class='banner'>
            {@html marked($_('messages.other.no_mobile'))}
            <button on:click={closeBanner}>X</button>
        </div>
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        inset: 0;
        background: rgb(0, 0, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        color: white;
    }

    button {
        background: #ff4444;
        color: white;
    }

    button:hover {
        background: #cc0000;
    }
</style>
