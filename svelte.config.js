import adapter from '@sveltejs/adapter-static'

const config = {
    kit: {
        adapter: adapter({
            fallback: '404.html',
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH || '' : '',
        },
        prerender: {
            entries: ['*'],
        },
    },
    vitePlugin: {
        dynamicCompileOptions: ({ filename }) =>
            filename.includes('node_modules') ? undefined : { runes: false },
    },
}

export default config
