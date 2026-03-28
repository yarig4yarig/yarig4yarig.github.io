import type { PageLoad } from './$types'
import contentStore from '$lib/content_store'
import { error } from '@sveltejs/kit'

export function entries() {
    const gamesTags = contentStore.getAllTags('games').map(tag => ({ type: 'games', tag }))
    const postsTags = contentStore.getAllTags('posts').map(tag => ({ type: 'posts', tag }))
    return [...gamesTags, ...postsTags]
}

export const load: PageLoad = ({ params }) => {
    const { type, tag } = params

    if (type !== 'games' && type !== 'posts') {
        throw error(404, 'Unknown type')
    }

    return {
        type,
        tag,
    }
}
