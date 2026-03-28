import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',

    },
    gitignore: true,
    markdown: false,
    jsonc: false,
    yaml: false,
    svelte: true,
    typescript: true,
}).overrideRules({
    "antfu/curly": "off",
    "antfu/if-newline": "off",
    "import/no-mutable-exports": "off",
    "svelte/no-at-html-tags": "off"
})
