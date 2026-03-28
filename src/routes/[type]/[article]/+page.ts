import type { PageLoad } from './$types'
import contentStore from '$lib/content_store'
import { error } from '@sveltejs/kit'

const styles = import.meta.glob('$lib/style/**/*.scss', {
    query: '?inline',
    import: 'default',
})

export function entries() {
    const games = contentStore.getSlug('games').map(slug => ({ type: 'games', article: slug }))
    const posts = contentStore.getSlug('posts').map(slug => ({ type: 'posts', article: slug }))
    return [...games, ...posts]
}

export const load: PageLoad = async ({ params }) => {
    const { type, article } = params

    if (type !== 'games' && type !== 'posts') {
        throw error(404, 'Unknown type')
    }

    const item = contentStore.getItem(type, article)
    let customStyle: string | null = null

    if (item.style) {
        const stylePath = `/src/lib/style/${item.style}`
        const loader = styles[stylePath]
        if (loader) {
            try {
                customStyle = await loader() as string
            }
            catch {
                // ignore
            }
        }
    }

    return {
        type,
        item,
        customStyle,
    }
}
