import type { ContentType, Item, ModuleMap } from '$lib/types'
import { error } from '@sveltejs/kit'

class ContentStore {
    private modules: Record<ContentType, ModuleMap>
    private slugIndex: Record<ContentType, Map<string, string>>

    constructor() {
        this.modules = {
            posts: import.meta.glob('../data/posts/*.yml', { eager: true }) as ModuleMap,
            games: import.meta.glob('../data/games/*.yml', { eager: true }) as ModuleMap,
        }

        this.slugIndex = {
            posts: new Map(),
            games: new Map(),
        }

        this.buildIndex('posts')
        this.buildIndex('games')
    }

    private buildIndex(type: ContentType) {
        const modules = this.modules[type]
        const index = this.slugIndex[type]

        for (const path of Object.keys(modules)) {
            const slug = this.extractSlug(path)
            if (index.has(slug)) throw error(500, 'Duplicate slug')
            index.set(slug, path)
        }
    }

    private extractSlug(path: string): string {
        const file = path.split('/').pop()
        if (!file) throw error(500, 'Invalid path')
        return file.replace('.yml', '')
    }

    getSlug(type: ContentType): string[] {
        return Array.from(this.slugIndex[type].keys())
    }

    getItem(type: ContentType, slug: string): Item {
        const path = this.slugIndex[type].get(slug)

        if (!path) {
            throw error(404, type === 'posts'
                ? 'messages.errors.404.unknown_post'
                : 'messages.errors.404.unknown_game')
        }

        const mod = this.modules[type][path]
        if (!mod?.default) throw error(500, 'Broken module')

        return mod.default
    }

    getItemsByTag(type: ContentType, tag: string): string[] {
        return this.getSlug(type).filter((slug) => {
            const item = this.getItem(type, slug)
            return item.tags?.includes(tag)
        })
    }

    getAllTags(type: ContentType): string[] {
        const slugs = this.getSlug(type)
        const tags = new Set<string>()

        for (const slug of slugs) {
            const item = this.getItem(type, slug)
            if (item.tags) {
                item.tags.forEach(tag => tags.add(tag))
            }
        }

        return Array.from(tags)
    }
}

const contentStore = new ContentStore()

export default contentStore
