<script lang='ts'>
    import { base } from '$app/paths'
    import Comments from '$lib/components/Comments.svelte'
    import Window from '$lib/components/Window.svelte'
    import contentStore from '$lib/content_store'
    import Items from '$lib/templates/Items.svelte'
    import { marked } from '$lib/utils/markdown'
    import { onDestroy, onMount } from 'svelte'
    import { _ } from 'svelte-i18n'

    export let data

    $: item = data.item
    $: type = data.type
    $: content = marked($_(item.key))
    $: tags = item.tags || []
    $: tagsWithPosts = type === 'games'
        ? tags.filter(tag => contentStore.getItemsByTag('posts', tag).length > 0)
        : []

    let styleEl: HTMLStyleElement | null = null

    onMount(() => {
        if (data.customStyle) {
            styleEl = document.createElement('style')
            styleEl.textContent = data.customStyle
            document.head.appendChild(styleEl)
        }
    })

    onDestroy(() => {
        styleEl?.remove()
    })
</script>

<div class='window-container'>
    <div class='window-row'>
        <Window title='Cover' width={640} height={360}>
            <img src='{base}{item.cover}' alt='cover' class='fill-img'>
        </Window>

        <Window title='Title' width={1000} height={360}>
            <h1>{item.title}</h1>

            {#if tags.length > 0}
                <div class='tags'>
                    {#each tags as tag}
                        {#if type === 'games'}
                            {@const tagLabel = marked($_(`tags.${tag}`))}
                            <a href={`${base}/${type}/find/${tag}`}>
                                <button>{@html tagLabel}</button>
                            </a>
                        {:else}
                            <a href={`${base}/${type}/find/${tag}`}>
                                <button>{@html marked(tag)}</button>
                            </a>
                        {/if}
                    {/each}
                </div>
            {/if}
        </Window>
    </div>

    <div class='window-row'>
        <Window title='Content' width={1500} height='auto'>
            <span style='font-size: 16px;'>
                {@html content}
            </span>
        </Window>
    </div>

    <div class='window-row'>
        <Comments />
    </div>

    {#if type === 'games'}
        {#each tagsWithPosts as tag}
            {@const tagLabel = marked($_(`tags.${tag}`))}
            <div class='window-row'>
                <Window title={$_('common.headers.related_posts')} width={1500} height='auto'>
                    <h2>{$_('common.headers.posts_about')} {@html tagLabel}</h2>
                </Window>
            </div>
            <Items item_type='posts' num_of_elem={3} filter_tag={tag} />
        {/each}
    {/if}
</div>
