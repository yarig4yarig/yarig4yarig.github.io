import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

async function main() {
    const rl = readline.createInterface({ input, output })

    try {
        const id = await rl.question('Введите ID игры (например my-game): ')
        const title = await rl.question('Введите заголовок игры: ')
        const date = await rl.question('Введите дату (DD.MM.YYYY, по умолчанию сегодня): ') || new Date().toLocaleDateString('ru-RU')
        const tags = await rl.question('Введите через пробел все теги: ')
        const withStyle = await rl.question('Создать файл стилей? (y/n, по умолчанию n): ')

        const tagList = tags.split(' ').filter(t => t.trim())

        const yamlContent = `key: games.${id}
title: "${title}"
date: "${date}"
cover: "/assets/games/imgs/${id}/cover.png"
tags:
${tagList.map(tag => `    - ${tag}`).join('\n')}${withStyle.toLowerCase() === 'y' ? `\nstyle: "games/${id}.scss"` : ''}
`
        await writeFile(join('src/data/games', `${id}.yml`), yamlContent, 'utf-8')
        await writeFile(join('src/lib/i18n/locales/en/games', `${id}.md`), 'Write your game description here in English.', 'utf-8')
        await writeFile(join('src/lib/i18n/locales/ru/games', `${id}.md`), 'Напишите описание игры здесь на русском.', 'utf-8')
        await mkdir(join('static/assets/games/imgs', id), { recursive: true })

        if (withStyle.toLowerCase() === 'y') {
            await writeFile(join('src/lib/style/games', `${id}.scss`), '\n', 'utf-8')
        }

        console.log('Готово!')
    }
    finally {
        rl.close()
    }
}

main().catch(console.error)
