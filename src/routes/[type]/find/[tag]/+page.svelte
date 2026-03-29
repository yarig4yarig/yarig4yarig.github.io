<script lang='ts'>
    import Window from '$lib/components/Window.svelte'
    import Items from '$lib/templates/Items.svelte'
    import { marked } from '$lib/utils/markdown'
    import { _ } from 'svelte-i18n'
    import type { ContentType } from "$lib/types";

    export let data

    $: type = data.type
    $: tagLabel = marked($_(`tags.${data.tag}`))
    $: headerKey = type === 'games' ? 'common.headers.games_by_tag' : 'common.headers.posts_by_tag'
</script>

<div class='window-container'>
    <div class='window-row'>
        <Window title={$_(headerKey)} width={1500} height='auto'>
            <h1>{@html tagLabel}</h1>
        </Window>
    </div>

    <Items item_type={type} num_of_elem='all' filter_tag={data.tag} />
</div>
