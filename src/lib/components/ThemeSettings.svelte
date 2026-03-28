<script lang='ts'>
    import Window from '$lib/components/Window.svelte'
    import themeStore from '$lib/theme_store'

    let theme: string
    let dynamicEnabled: boolean

    themeStore.currentTheme.subscribe((value) => {
        theme = value
    })

    themeStore.dynamicThemesEnabled.subscribe((value) => {
        dynamicEnabled = value
    })

    const themes = themeStore.getThemes()

    function handleThemeChange(event: Event) {
        const target = event.target as HTMLSelectElement
        themeStore.setTheme(target.value)
    }

    function handleDynamicToggle(event: Event) {
        const target = event.target as HTMLInputElement
        themeStore.toggleDynamicThemes(target.checked)
    }
</script>

<Window title='Theme Settings' width={400} height='auto'>
    <div class='theme-settings'>
        <div class='setting-group'>
            <label for='theme-select'>Theme:</label>
            <select id='theme-select' value={theme} on:change={handleThemeChange}>
                {#each themes as theme}
                    <option value={theme.name}>{theme.displayName}</option>
                {/each}
            </select>
        </div>

        <div class='setting-group'>
            <label>
                <input
                    type='checkbox'
                    checked={dynamicEnabled}
                    on:change={handleDynamicToggle}
                />
                Enable dynamic themes (game/post specific themes)
            </label>
        </div>

        <div class='setting-info'>
            <p>Dynamic themes allow games and posts to override the default theme with custom colors.</p>
        </div>
    </div>
</Window>

<style>
    .theme-settings {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .setting-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .setting-group label {
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .setting-info {
        margin-top: 8px;
        padding: 8px;
        background: var(--bg-secondary);
        border: 1px solid var(--border-shadow);
    }

    .setting-info p {
        margin: 0;
        font-size: 11px;
        color: var(--text-secondary);
    }

    input[type='checkbox'] {
        width: 13px;
        height: 13px;
        cursor: pointer;
    }
</style>
