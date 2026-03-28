import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export function entries() {
    return [{ type: 'games' }, { type: 'posts' }]
}

export const load: PageLoad = ({ params }) => {
    const { type } = params

    if (type !== 'games' && type !== 'posts') {
        throw error(404, 'Unknown type')
    }

    return { type }
}
