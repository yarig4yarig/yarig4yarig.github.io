import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

async function main() {
    const rl = readline.createInterface({ input, output })

    try {
        const id = await rl.question('Введите ID поста (например my-post): ')
        const title = await rl.question('Введите заголовок поста: ')
        const date = await rl.question('Введите дату (DD.MM.YYYY, по умолчанию сегодня): ') || new Date().toLocaleDateString('ru-RU')
        const coverName = await rl.question('Введите имя файла обложки (например cover.png): ')
        const tags = await rl.question('Введите через пробел все теги: ')

        const tagList = tags.split(' ').filter(t => t.trim())

        const yamlContent = `key: posts.${id}
title: ${title}
date: "${date}"
cover: "/assets/posts/imgs/${coverName}"
tags:
${tagList.map(tag => `    - ${tag}`).join('\n')}
`
        await writeFile(join('src/data/posts', `${id}.yml`), yamlContent, 'utf-8')
        await writeFile(join('src/lib/i18n/locales/en/posts', `${id}.md`), '\nWrite your post content here in English.\n', 'utf-8')
        await writeFile(join('src/lib/i18n/locales/ru/posts', `${id}.md`), '\nНапишите содержимое поста здесь на русском.\n', 'utf-8')

        console.log('Готово!')
    }
    finally {
        rl.close()
    }
}

main().catch(console.error)
