<script>
    import Gearboxing from '$lib/components/Gearboxing.svelte'
    import Window from '$lib/components/Window.svelte'
    import Items from '$lib/templates/Items.svelte'
    import { marked } from 'marked'
    import { _ } from 'svelte-i18n'

    $: aboutMe = marked($_('common.about.about_me'))
    $: programmingLangs = marked($_('common.about.programming_langs'))

    $: dsRu = marked($_('common.socials.ds_ru'))
    $: tgRu = marked($_('common.socials.tg_ru'))
    $: dsUser = marked($_('common.socials.ds_user'))
    $: github = marked($_('common.socials.github'))

    $: newestPostsHeader = marked($_('common.headers.newest_posts'))
    $: newestGamesHeader = marked($_('common.headers.newest_games'))

</script>

<!-- About me -->
<div class='window-container'>
    <div class='window-row'>
        <Window title='Gearboxing' width={400} height={400}>
            <Gearboxing />
        </Window>
    </div>
    <div class='window-row'>
        <Window title='About' width={500} height='auto'>
            {@html aboutMe}
        </Window>
        <Window title='Programming Languages' width={500} height='auto'>
            {@html programmingLangs}
        </Window>
    </div>
</div>

<!-- My Socials -->
<div class='window-container'>
    <div class='window-row'>
        <Window title='My Socials' width={600} height='auto'>
            <table>
                <tbody>
                    <tr>
                        <td>{@html dsRu}</td>
                        <td><a href='https://discord.gg/XGvvDhUBap' target='_blank'>Join Server</a></td>
                    </tr>
                    <tr>
                        <td>{@html dsUser}</td>
                        <td>@real_gearboxing</td>
                    </tr>
                    <tr>
                        <td>{@html tgRu}</td>
                        <td><a href='https://t.me/ungearboxing' target='_blank'>@ungearboxing</a></td>
                    </tr>
                    <tr>
                        <td>{@html github}</td>
                        <td><a href='https://github.com/yarig4yarig' target='_blank'>@yarig4yarig</a></td>
                    </tr>
                </tbody>
            </table>
        </Window>
    </div>
</div>

<!-- Newest posts -->
<div class='window-container'>
    <div class='window-row'>
        <Window width={1500} height='auto'>
            <span class='center' style='width: 100%; height: 100%; font-size: 20px;'>
                {@html newestPostsHeader}
            </span>
        </Window>
    </div>
    <Items item_type='posts' />
</div>

<!-- Newest games -->
<div class='window-container'>
    <div class='window-row'>
        <Window width={1500} height='auto'>
            <span class='center' style='width: 100%; height: 100%; font-size: 20px;'>
                {@html newestGamesHeader}
            </span>
        </Window>
    </div>
    <Items item_type='games' />
</div>
