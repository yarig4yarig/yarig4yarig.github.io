<script>
    import { base } from '$app/paths'
    import { page } from '$app/stores'
    import Window from '$lib/components/Window.svelte'
    import { marked } from '$lib/utils/markdown'
    import { _ } from 'svelte-i18n'

    $: errorMessage = $page.error?.message ? marked($_($page.error.message)) : ''
</script>

<div class='window-container'>
    <div class='window-row'>
        <Window title='Error {$page.status}' width='auto' height='auto'>
            <img src='{base}/assets/icons/error.png' alt='Error'>
            <span style='font-size: 20px'>{@html errorMessage}</span>
        </Window>
    </div>
</div>
