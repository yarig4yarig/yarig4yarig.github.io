<script lang='ts'>
    export let title = 'Window'
    export let width: number | 'auto' = 500
    export let height: number | 'auto' = 500
    export let bg_col = '#c0c0c0'
    export let style = ''

    $: widthStyle = width === 'auto' ? 'auto' : `${width}px`
    $: heightStyle = height === 'auto' ? 'auto' : `${height}px`
</script>

<div
    class='window'
    style={`width: ${widthStyle}; height: ${heightStyle}; --bg-col: ${bg_col}`}
>
    <div class='title-bar'>
        <span class='title'>{title}</span>
    </div>

    <div class='content' style={style}>
        <slot />
    </div>
</div>
