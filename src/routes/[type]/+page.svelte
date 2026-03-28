<script lang='ts'>
    import Window from '$lib/components/Window.svelte'
    import Items from '$lib/templates/Items.svelte'
    import { marked } from 'marked'
    import { _ } from 'svelte-i18n'

    export let data

    $: type = data.type
    $: headerKey = type === 'games' ? 'common.headers.all_games' : 'common.headers.all_posts'
    $: header = marked($_(headerKey))
</script>

<div class='window-container'>
    <div class='window-row'>
        <Window width={1500} height='auto'>
            <span class='center' style='width: 100%; height: 100%; font-size: 20px;'>
                {@html header}
            </span>
        </Window>
    </div>
    <Items item_type={type} num_of_elem='all' />
</div>
