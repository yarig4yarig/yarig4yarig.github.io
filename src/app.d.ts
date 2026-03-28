// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {}
}

declare module '*.yml' {
    import type { Item } from '$lib/types'

    const content: Item
    export default content
}

export {}
