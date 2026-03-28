type Weight<T> = Array<{ item: T, weight: number }>

export class WeightList<T> {
    public value: Weight<T>
    public last_value: T | undefined

    constructor(
        value: Weight<T>,
        private equals: (a: T, b: T) => boolean = (a, b) => a === b,
    ) {
        this.value = value
    }

    getRandomItem(): T | undefined {
        if (this.value.length === 0)
            return

        const total = this.value.reduce((a, x) => a + x.weight, 0)
        let r = Math.random() * total

        for (const { item, weight } of this.value) {
            if (r < weight)
                return item
            r -= weight
        }

        return this.value.at(-1)?.item
    }

    getRandomUniqueItem(): T | undefined {
        if (this.value.length === 0)
            return

        const items = this.last_value === undefined
            ? this.value
            : this.value.filter(x => !this.equals(x.item, this.last_value!))

        if (items.length === 0)
            return

        const total = items.reduce((a, x) => a + x.weight, 0)
        let r = Math.random() * total

        for (const { item, weight } of items) {
            if (r < weight) {
                this.last_value = item
                return item
            }
            r -= weight
        }

        const last = items.at(-1)?.item
        this.last_value = last
        return last
    }
}

export type ContentType = 'posts' | 'games'

export interface Item {
    key: string
    title: string
    date: string
    cover: string
    tags: string[]
    style?: string
}

export type ModuleMap = Record<string, { default: Item }>
