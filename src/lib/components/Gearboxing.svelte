<script lang='ts'>
    import { WeightList } from '$lib/types'
    import { onMount } from 'svelte'

    const PATH = '/assets/GearBoxingStickers/V1/'

    const images = new WeightList<string>([
        { item: 'Normal', weight: 1 },
        { item: 'ToViewer', weight: 1 },
        { item: 'ToViewer2', weight: 1 },
        { item: 'Upview', weight: 1 },
        { item: 'UpviewSus', weight: 1 },
    ])

    const rareImages = new WeightList<string>([
        { item: 'BackviewVerySus', weight: 1 },
        { item: 'ToViewerAeaeae', weight: 1 },
        { item: 'ToViewerShock', weight: 1 },
        { item: 'UpviewShock', weight: 1 },
    ])

    const veryRareImages = new WeightList([
        { item: 'img', weight: 1 },
    ])

    const imagesPool = new WeightList<() => string | undefined>([
        { item: () => images.getRandomUniqueItem(), weight: 75 },
        { item: () => rareImages.getRandomUniqueItem(), weight: 25 },
        { item: () => veryRareImages.getRandomItem(), weight: 1 },
    ])

    let img = ''

    function pickRandomImage() {
        const imageName = imagesPool.getRandomItem()?.() ?? ''
        img = `${PATH}${imageName}.png`
    }

    onMount(() => {
        pickRandomImage()
        const intervalId = setInterval(pickRandomImage, 1000)
        return () => clearInterval(intervalId)
    })
</script>

<img src={img} alt='GearBoxing' class='fill-img'>
