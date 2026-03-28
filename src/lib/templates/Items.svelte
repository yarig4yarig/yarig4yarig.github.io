<script lang='ts'>
    import type { ContentType } from '$lib/types'
    import { base } from '$app/paths'
    import Window from '$lib/components/Window.svelte'
    import contentStore from '$lib/content_store'
    import { marked } from '$lib/utils/markdown'
    import { _ } from 'svelte-i18n'

    export let num_of_elem: number | 'all' = 5
    export let item_type: ContentType = 'posts'
    export let filter_tag: string | undefined

    function smartTrim(text: string, maxLength: number): string {
        if (text.length <= maxLength)
            return text
        return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}...`
    }

    function parseDate(dateStr: string): number {
        const [day, month, year] = dateStr.split('.').map(Number)
        return new Date(year, month - 1, day).getTime()
    }

    $: allItems = filter_tag
        ? contentStore.getItemsByTag(item_type, filter_tag)
        : contentStore.getSlug(item_type)

    $: sortedItems = [...allItems].sort((a, b) => {
        const itemA = contentStore.getItem(item_type, a)
        const itemB = contentStore.getItem(item_type, b)
        return parseDate(itemB.date) - parseDate(itemA.date)
    })

    $: displayItems = num_of_elem === 'all'
        ? sortedItems
        : sortedItems.slice(0, num_of_elem)
</script>

{#each displayItems as item, i}
    {@const itemData = contentStore.getItem(item_type, item)}
    {@const content = marked($_(itemData.key))}
    {@const link = `${base}/${item_type}/${item}`}
    {@const isEven = i % 2 === 0}

    <div class='window-row'>
        {#if isEven}
            <Window width={700} height='auto' title='Post #{i + 1}'>
                <a href={link}><h1>{itemData.title}</h1></a>
                <p>{@html smartTrim(content, 100)}</p>
            </Window>
            <Window width={360} height={200} title='Cover #{i + 1}' bg_col='black'>
                <a href={link}><img class='fill-img' src='{base}{itemData.cover}' alt='cover'></a>
            </Window>
        {:else}
            <Window width={360} height={200} title='Cover #{i + 1}' bg_col='black'>
                <a href={link}><img class='fill-img' src='{base}{itemData.cover}' alt='cover'></a>
            </Window>
            <Window width={700} height='auto' title='Post #{i + 1}'>
                <a href={link}><h1>{itemData.title}</h1></a>
                <p>{@html smartTrim(content, 100)}</p>
            </Window>
        {/if}
    </div>
{/each}
