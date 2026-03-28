import{r as R,a as X,b as I,w as Z,g as Q,i as O,h as ee,m as j,$ as te,s as C,W as N,c as ne}from"../chunks/WTMIRDKB.js";import{c as se,a as g,g as A,b as q,s as Y,f as p,d as oe,p as ae}from"../chunks/BDJKeTFG.js";import{o as ie,b as re,b9 as le,ay as ce,h as E,C as de,R as F,j as W,i as B,k as me,P as he,ba as _e,n as $,e as U,w as ue,bb as ge,bc as be,ai as pe,V as x,a4 as M,a0 as w,$ as b,a2 as u,_ as L,g as m,u as S,Y as P,A as G,Z as V,a3 as ve,a1 as T,bd as we,be as fe}from"../chunks/0XuYziEB.js";import{b as k}from"../chunks/DwKYmNX5.js";import{e as ye,i as ke}from"../chunks/D3QuLIb0.js";import{i as Ie}from"../chunks/_tSM4f7b.js";import{b as Se}from"../chunks/DThCccZV.js";function Te(e,s){let i=null,t=E;var l;if(E){i=me;for(var n=he(document.head);n!==null&&(n.nodeType!==de||n.data!==e);)n=F(n);if(n===null)W(!1);else{var a=F(n);n.remove(),B(a)}}E||(l=document.head.appendChild(ie()));try{re(()=>s(l),le|ce)}finally{t&&(W(!0),B(i))}}function K(e,s,i=!1){if(e.multiple){if(s==null)return;if(!ue(s))return ge();for(var t of e.options)t.selected=s.includes(y(t));return}for(t of e.options){var l=y(t);if(be(l,s)){t.selected=!0;return}}(!i||s!==void 0)&&(e.selectedIndex=-1)}function Ae(e){var s=new MutationObserver(()=>{K(e,e.__value)});s.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pe(()=>{s.disconnect()})}function Le(e,s,i=s){var t=new WeakSet,l=!0;_e(e,"change",n=>{var a=n?"[selected]":":checked",r;if(e.multiple)r=[].map.call(e.querySelectorAll(a),y);else{var h=e.querySelector(a)??e.querySelector("option:not([disabled])");r=h&&y(h)}i(r),e.__value=r,$!==null&&t.add($)}),U(()=>{var n=s();if(e===document.activeElement){var a=$;if(t.has(a))return}if(K(e,n,l),l&&n===void 0){var r=e.querySelector(":checked");r!==null&&(n=y(r),i(n))}e.__value=n,l=!1}),Ae(e)}function y(e){return"__value"in e?e.__value:e.value}const Ee=`I'm **Gearboxing** / **Гирбоксинг** / **Yaroslav**. A young Russian person (not sure about that), who creates all sorts of stuff.

I'm a pretty optimistic, humorous creature _and, let's be honest, a bit dumb._

Mostly I write **programs/little games** and less often **model** in _Blender_. Haven't quite figured out yet who I am and what I'll become.

I started my programmer journey a long time ago. I specifically started it by writing simple prank viruses.
Later I discovered a website called **Scratch**. And it was during this period that I intensively studied programming.
~~_I probably won't say my specific username there_~~.
Later I switched to Turbowarp, and then to PenguinMod. After the switch, I stopped liking Scratch (plus I was studying, and still am studying OOP).
So I switched to Godot, and I'm still on it now. Pretty nice engine...

**Downside:** I work veeeery slowly.

!!!You're on my website right now (no way)!!!
`,$e=`I code in:
- **C#** (Learning)
- **Python** (Intermediate level)
- **JavaScript** / **TypeScript** (Also intermediate level)

Using:
- **Godot** (Game engine)
- **Svelte** (This site is written in it. Learning)

Grew out of:
- **Scratch** / **Turbowarp** / **PenguinMod** (Legends)
- **Devel Next** / **Devel Studio** (Also Legends).
`,Ce=`All **games**
`,De=`All **posts**
`,Oe=`Games by tag
`,xe=`Newest **games**
`,Me=`Newest **posts**
`,Pe=`Posts about
`,Ge=`Posts by tag
`,je=`Related posts
`,Ne=`Discord server (Russian)
`,Fe=`Discord username (DM)
`,We=`GitHub
`,Be=`Telegram channel (Russian)
`,He=`**DOWNLOAD CLICKER** - One of my first serious projects. I started developing it way back in 2023 as a simple clicker. Later, more and more ideas kept coming, and it grew into a whole separate game.

<img src="/assets/games/imgs/download-clicker/screenshots/screen1.png" alt="First version of the game" width="600">

The game was developed on the _[Scratch](https://scratch.mit.edu/)_ engine, or more precisely on _[Turbowarp](https://turbowarp.org/)_ (a Scratch mod that adds tons of improvements) with extensions. And this is probably my most unusual and favorite project (in terms of code, soundtrack, and style).
Of course, developing big games in Scratch with multiple scenes, even with extensions, was torture, but at the time it was pleasant torture.

## Gameplay
As for gameplay, it's pretty bare-bones, let's be honest. Currently, only version **"Beta 1"** is publicly available... yeah... just one version... well, plus one minor update. I'm ashamed of that, yeah.
This version has everything you'd find in any clicker - upgrades, a shop, and the clicker system itself, BUT this game already has its own soundtrack, plus a story with dialogues (monologues addressed to the player, to be precise).

<img src="/assets/games/imgs/download-clicker/screenshots/screen2.png" alt="Screenshot 1" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen3.png" alt="Screenshot 2" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen4.png" alt="Screenshot 3" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen5.png" alt="Screenshot 4" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen6.png" alt="Screenshot 5" width="600">

## Story
Yes, this game has a story. And I'll even say more - I'm gonna develop it further. According to the plot of **DOWNLOAD CLICKER**, the player gets a job as an archiver of ~~Epstein's~~ webpage files. It was the 90s and the internet was just starting to develop.
All you gotta do is download files from servers and upload them to the company's server for archiving (like Wayback Machine). Your boss turns out to be a dumb ~~and cringe~~ artificial intelligence named Webly. You're his only employee.

Yeah, pretty simple and weird plot, I agree. Keep in mind this is just a piece of the full story. Actually, DC's plot is pretty dark, I can tell you that.
If you want the story to continue and to understand what's actually going on, wait for new versions of DC or new games...

## Graphics
I also love the visuals of this project. It was almost entirely built using Scratch's built-in SVG image editing tool.
Very handy editor by the way. In the end, the picture turned out pretty decent if you ask me. Plus, I'm amused by the fact that because of this, the graphics don't lose quality and stay smooth.
There was an idea to change it, but for now I dunno. I've really grown attached to it.

## Soundtrack
Also, I asked my composer friend - [Taylor](https://www.youtube.com/@TTFOfficialMusic), what he thinks about this game and its soundtrack. He's the one who wrote all the tracks, by the way.
> Creating the soundtrack for Download Clicker was my first experience writing a full soundtrack for any game. It was quite an interesting challenge, which I can say I handled 200%. If I look at these tracks now... all I can say is - these are beginner tracks. Indeed, switching to FL Studio from [Ultrabox](https://ultraabox.github.io/) was the right decision for me as a still-learning composer. Sadly, we abandoned the game without putting in 100% of the content we had planned... maybe we had too big ambitions. Nevertheless, the soundtrack includes tracks if not for the entire game it could have been in another reality, then definitely for all the content that was prepared for the future. Will we use parts of the tracks in new works? I don't think so.

## SO WHAT'S THE DEAL
And here's the deal: we finished production of this game in 2025, in the middle of developing version **"Beta 2"**.
The reason was the complexity of development. Although this torture was pleasant, it was still torture. Plus, I didn't know how to properly implement balance.
So yeah, the project is now half-dead.
`,Re=`**FALL MACHINE** - This is another project I'm working on right now.

After DC, Taylor and I tried different game ideas. We needed something simpler. Eventually, I started developing FM.

<img src="/assets/games/imgs/fall-machine/screen1.jpg" alt="Prototype of the first level" width="600px" title="Prototype of the first level">

The idea was straightforward. The gameplay was that the player endlessly fell into an endless hole. In the hole, you'd encounter
various enemies and obstacles that you need to dodge.

I had this idea even before developing DC. But in Scratch, I was just too lazy to do it.

I combined development with my studies. Basically, I switched to Godot. This is already a serious and proper game engine.

Very quickly, this idea kept growing and expanding. So here's what the idea is today:

## Story and Gameplay
So. You're a scientist. You work in Antarctica. In this universe, they found deposits of some unique minerals/stones at the South Pole.
One of the loaders transporting this philosophical cargo dropped one of the minerals into some crack in the ground. When trying to get the mineral out by hand
or with other tools, it only went deeper. Eventually, it turned out that the crack was an entrance to some cave.
Meanwhile, someone already managed to steal the mineral. Scanning showed that:
first, the cave is crazy deep,
second, the mineral is at the very bottom.
The mineral is still very valuable, so they send you down to the bottom in a special transport for protection and cushioning the fall, thanks to the force generated by the engine.
But here's the problem - the engine just broke, and the transport along with you falls like a stone down. Communication with the outside world is cut off.

In the depths, there's something unusual, some other world...
Terribly strange, but familiar. There are traces of human activity in the world.

<img src="/assets/games/imgs/fall-machine/robot.jpg" alt="First concept of the 'robot'" width="600px" title="First concept of the 'robot'">

After passing this first level, you're met by some robot (haven't figured out what to call him yet). He was ready to kill you, but then he learns about your goal - to get that damn mineral.
The robot has a different goal though. He was created to watch over this world. He tells you about its structure:

The whole world is divided into layers (or levels). Each level is ~~jerked off by~~ managed by its own boss. Unfortunately (or fortunately), all of them are infected.
It's simple - you need to go through each boss and eliminate them all, thus getting to the very bottom. That's where the player will find the mineral and get sent back to the base.

I'll say right away that I obviously didn't retell the entire plot.

<img src="/assets/games/imgs/fall-machine/screen2.jpg" alt="Developing the level generation system" width="600px" title="Developing the level generation system">

I planned 5 levels in total. Right now, the first 2 levels are being made.

Wait for new updates about the game!
`,qe=`Idk this game dude💀💀💀💀💀💀💀
`,Ye=`Unknown page!
`,Ue=`Unknown **post**!
`,Ve=`# Warning!
This site is not mobile-friendly.
`,Ke=`**Yo watsap**

This is the first post on my website!
`,ze=`DOWNLOAD CLICKER
`,Je=`FALL MACHINE
`,Xe=`Godot
`,Ze=`No Theme
`,Qe=`Scratch
`,et=`SVG Style
`,tt=`Я - **Gearboxing** / **Гирбоксинг** / **Ярослав**. Молодой русский человек(не точно), который творит всякое.

Существо я довольно оптимистичное, юморное _и, давайте быть честными, немного туповатое._

В основном пишу **программки/поигрульки** и реже **моделирую** в _блендере_. Пока точно не определился, хто я и кем буду.

Начал я свой путь программиста ещё очень давно. Начинал я его конкретно с написания простых вирусов-шуток.
Позже я открыл для себя сайт под названием **Scratch**. И именно в этот период я усиленно изучал программирование.
~~_Говорить конкретно свой ник там я пожалуй не буду_~~.
Позже перешёл на Turbowarp, а затем на PenguinMod. После перехода мне разонравился Scratch(+я изучал, и сейчас изучаю ООП).
Поэтому я перешёл на Godot, да и сейчас сижу на нём. Довольно приятный движок...

**Минус:** я ооочень медленно работаю.

!!!Сейчас ты на моём сайте(да ладно)!!!
`,nt=`Пишу на языках:
- **C#** (Учу)
- **Python** (Средний уровень)
- **JavaScript** / **TypeScript** (Тож средний уровень)

Используя:
- **Godot** (Игровой движок)
- **Svelte** (На нём написан этот сайт. Учу)

Вырос из:
- **Scratch** / **Turbowarp** / **PenguinMod** (Легенды Ленинграда)
- **Devel Next** / **Devel Studio** (Тоже Леги).
`,st=`Игры по тегу
`,ot=`Посты о
`,at=`Посты по тегу
`,it=`Связанные посты
`,rt=`Дискорд сервер(русский)
`,lt=`Дискорд никнейм(ЛС)
`,ct=`Гитхаб
`,dt=`Телеграмм канал(русский)
`,mt=`**DOWNLOAD CLICKER** - Один из моих первых серьёзных проектов. Начал я его разрабатывать ещё в далёком 2023 году, как простой кликер. Позже приходило всё больше идей, и это переросло в целую отдельную игру.

<img src="/assets/games/imgs/download-clicker/screenshots/screen1.png" alt="First version of the game" width="600">

Игра была разработана на движке _[Scratch](https://scratch.mit.edu/)_, а точнее на _[Turbowarp](https://turbowarp.org/)_(модификация скретча, добавляющий множество улучшений) с расширениями. И, пожалуй, это мой самый необычный и любимый проект(в плане кода, саундтрека и стилистики).
Конечно, разрабатывать большие игры Скретче с несколькими сценами даже с расширениями было пыткой, но в то время пыткой приятной.

## Геймплей
Что по части геймлпея, тут всё скудно, будем мы честны. В данный момент в общем доступе выложенна версия **"Бета 1"**... да... всего одна версия... ну и плюс один минорный апдейт. За это мне стыдно, да.
В этой версии доступно всё что есть в любом кликере - улучшения, магазин, ну и сама система кликера, НО у этой игры уже есть свой саундтрек, а также сюжет с диалогами(монологами адресованными к игроку, если быть точнее).

<img src="/assets/games/imgs/download-clicker/screenshots/screen2.png" alt="Screenshot 1" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen3.png" alt="Screenshot 2" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen4.png" alt="Screenshot 3" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen5.png" alt="Screenshot 4" width="600">
<img src="/assets/games/imgs/download-clicker/screenshots/screen6.png" alt="Screenshot 5" width="600">

## Сюжот
Да, в этой игре есть сюжет. И я даже больше скажу, я буду его развивать. По сюжету **DOWNLOAD CLICKER-а**, игрок устраивается на работу архиватором файлов ~~эпштейна~~ вебстраниц. На дворе стояли 90-ые и интернет только-только развивался.
Всё что нужно делать - скачивать файлы с серверов и загружать их уже на сервер компании для архивации(типа Wayback Machine). Его боссом оказывается туповатый ~~и кринжовый~~ исскуственный интеллект, под названием Вебли. Вы - его единственный сотрудник.

Да, довольно простенький и странный сюжет, соглашусь. Учтите, что это всего лишь кусок от полной истории. На самом деле сюжет ДК довольно мрачный, это я вам могу сказать.
Если вы хотите продолжения сюжета и понять, что вообще происходит, то ждите новых версий ДК или новых игр...

## Графико
Ещё мне нравится в этом проекте его визуал. Он был почти полностью построен на встроенном в скретч инструменте редактирования SVG изображений.
Очень удобный редактор кстати. В итоге картинка получилась как по мне достойная. Плюс, меня забавляет тот факт, что эта графика из-за этого не теряет в качестве и остаётся гладкой.
Была кстати идея сменить её, но пока я хз. Уж очень мне она в душу запала.

## Саундтрок
Также, я спросил своего друга-композитора - [Тейлора](https://www.youtube.com/@TTFOfficialMusic), что он думает об этой игре и о его саундтреке. Именно он, если что, написал все треки.
> Создание саундтрека к Download Clicker было моим первым опытом написания полного саундтрека к какой либо игре. Это была весьма интересная задача, с которой я справился можно сказать на 200%. Если же я сейчас посмотрю на эти треки.. все что я могу сказать - это треки новичка. И вправду переход на Fl studio с [Ultrabox](https://ultraabox.github.io/) было самым верным решением для меня, как для все еще учащегося композитора. Увы мы забросили игру не заложив в нее 100% контента, что задумывали... возможно у нас были слишком большие амбиции. Тем не менее саундтрек включает в себя треки если не для всей игры ,которой она могла быть в иной реальности, так для всего контента, что был заготовлен на будущее точно. Будем ли мы использовать части треков в новых работах? не думаю.

## А ПО ИТОГУ ЧО
А по итогу вот чо: мы закончили производство этой игры в 2025 году, посреди разработки версии **"Бета 2"**.
Причиной послужила сложность разработки. Пытка эта хоть и приятная, но была всё равно пыткой(ауф). Плюс, я не знал, как реализовать нормально баланс.
Так что да, проект сейчас полумёртв.
`,ht=`**FALL MACHINE** - Это ещё один мой проект, над которым я работаю сейчас.

После ДК, я с Тейлором пробовали разные идеи для игр. Нужно было что-то попроще. В итоге я начал разрабатывать ФМ.

<img src="/assets/games/imgs/fall-machine/screen1.jpg" alt="Прототип первого уровня" width="600px" title="Прототип первого уровня">

Идея была незамысловата. Геймплей заключался в том, что игрок бесконечно падал в бесконечной дыре. В дыре же встречались
различные враги и препятствия, от которых нужно уворачиваться.

Эта идея у меня была ещё до разработки ДК. Но в Скретче мне было банально лень это делать.

Разработку я совместил с учёбой. Короче, я перешёл на Годот. Это уже серьёзный и нормальный движок для игр.

Уже очень быстро эта идея наращивалась и увеличивалась. В итоге вот какова идея сегодня:

## Сюжот и геймплей
Крч. Вы - учёный. Работаете на антарктиде. В этой вселенной на южном полюсе нашли залежи каких то уникальных минералов/камней.
Один из грузчиков, перевозивших этот философский груз уронил один из минералов в какую то расщелину на земле. При попытке достать минерал руками
или иными инструментами он спускался только глубже. В итоге оказалось, что та расщелина - это вход в какую то пещеру.
Минерал тем временем уже кто-то умудрился украсть. Сканирование показало что:
во-первых, пещера афигеть какая глубокая,
во-вторых, что минерал находится на самом дне.
Минерал всё-таки очень ценный, а поэтому на дно спускают вас, в специальном транспорте для защиты и смягчения падения, за счёт силы, генерируемом двигателем.
Но вот проблема, двигатель попросту сломался, и транспорт вместе с вами падает камнем вниз. Связь с внешним миром прекращена.

В глубине находится нечто необычное, какой-то другой мир...
Жутко странный, но знакомый. В мире есть следы деятельности людей.

<img src="/assets/games/imgs/fall-machine/robot.jpg" alt="Первый концепт 'робота'" width="600px" title="Первый концепт 'робота'">

После прохождения этого первого уровня вас встречает некий робот(пока не придумал как его звать). Он уже был готов вас убить, но потом он узнаёт про вашу цель - достать этот едрить его в ноздри якорем минерал.
У робота же цель другая. Он был создан следить за этим миром. Он рассказывает про его строй:

Весь мир разделён на слои(или же уровни). Каждым уровнем ~~рукоблудит~~ руководит свой босс. К сожалению(или к счастью) все их них заразились.
Всё просто - нужно пройти через каждого босса до и всех ликвидировать, таким образом попав на самое дно. Там то игрок и найдёт минерал и его отправят назад на базу.

Сразу скажу, что я пересказал естественно не весь сюжет.

<img src="/assets/games/imgs/fall-machine/screen2.jpg" alt="Разрабатываю систему генерации уровней" width="600px" title="Разрабатываю систему генерации уровней">

Уровней всего я запланировал 5. Сейчас делаются 2 первых уровня.

Ждите новых обновлений по поводу игры!


`,_t=`Чо за игра чел я хс лол💀💀💀💀💀💀💀💀
`,ut=`Неизвестная страница!
`,gt=`Неизвестный **пост**!
`,bt=`# Внимание!
Этот сайт не адаптирован под телефоны.
`,pt=`**Дарова**

Это первый пост на моём сайте!
`,vt=`Godot
`,wt=`Без Темы
`,ft=`Скретч
`,yt=`СВГ Стиль
`,H=Object.assign({"/src/lib/i18n/locales/en/common/about/about_me.md":Ee,"/src/lib/i18n/locales/en/common/about/programming_langs.md":$e,"/src/lib/i18n/locales/en/common/headers/all_games.md":Ce,"/src/lib/i18n/locales/en/common/headers/all_posts.md":De,"/src/lib/i18n/locales/en/common/headers/games_by_tag.md":Oe,"/src/lib/i18n/locales/en/common/headers/newest_games.md":xe,"/src/lib/i18n/locales/en/common/headers/newest_posts.md":Me,"/src/lib/i18n/locales/en/common/headers/posts_about.md":Pe,"/src/lib/i18n/locales/en/common/headers/posts_by_tag.md":Ge,"/src/lib/i18n/locales/en/common/headers/related_posts.md":je,"/src/lib/i18n/locales/en/common/socials/ds_ru.md":Ne,"/src/lib/i18n/locales/en/common/socials/ds_user.md":Fe,"/src/lib/i18n/locales/en/common/socials/github.md":We,"/src/lib/i18n/locales/en/common/socials/tg_ru.md":Be,"/src/lib/i18n/locales/en/games/download-clicker.md":He,"/src/lib/i18n/locales/en/games/fall-machine.md":Re,"/src/lib/i18n/locales/en/messages/errors/404/unknown_game.md":qe,"/src/lib/i18n/locales/en/messages/errors/404/unknown_page.md":Ye,"/src/lib/i18n/locales/en/messages/errors/404/unknown_post.md":Ue,"/src/lib/i18n/locales/en/messages/other/no_mobile.md":Ve,"/src/lib/i18n/locales/en/posts/i-created-website.md":Ke,"/src/lib/i18n/locales/en/tags/download-clicker.md":ze,"/src/lib/i18n/locales/en/tags/fall-machine.md":Je,"/src/lib/i18n/locales/en/tags/godot.md":Xe,"/src/lib/i18n/locales/en/tags/no-theme.md":Ze,"/src/lib/i18n/locales/en/tags/scratch.md":Qe,"/src/lib/i18n/locales/en/tags/svg-style.md":et,"/src/lib/i18n/locales/ru/common/about/about_me.md":tt,"/src/lib/i18n/locales/ru/common/about/programming_langs.md":nt,"/src/lib/i18n/locales/ru/common/headers/games_by_tag.md":st,"/src/lib/i18n/locales/ru/common/headers/posts_about.md":ot,"/src/lib/i18n/locales/ru/common/headers/posts_by_tag.md":at,"/src/lib/i18n/locales/ru/common/headers/related_posts.md":it,"/src/lib/i18n/locales/ru/common/socials/ds_ru.md":rt,"/src/lib/i18n/locales/ru/common/socials/ds_user.md":lt,"/src/lib/i18n/locales/ru/common/socials/github.md":ct,"/src/lib/i18n/locales/ru/common/socials/tg_ru.md":dt,"/src/lib/i18n/locales/ru/games/download-clicker.md":mt,"/src/lib/i18n/locales/ru/games/fall-machine.md":ht,"/src/lib/i18n/locales/ru/messages/errors/404/unknown_game.md":_t,"/src/lib/i18n/locales/ru/messages/errors/404/unknown_page.md":ut,"/src/lib/i18n/locales/ru/messages/errors/404/unknown_post.md":gt,"/src/lib/i18n/locales/ru/messages/other/no_mobile.md":bt,"/src/lib/i18n/locales/ru/posts/i-created-website.md":pt,"/src/lib/i18n/locales/ru/tags/godot.md":vt,"/src/lib/i18n/locales/ru/tags/no-theme.md":wt,"/src/lib/i18n/locales/ru/tags/scratch.md":ft,"/src/lib/i18n/locales/ru/tags/svg-style.md":yt});function z(e){const s={};for(const i in H){if(!i.includes(`/locales/${e}/`))continue;const t=i.split(`/locales/${e}/`)[1].replace(".md","").replaceAll("/",".");s[t]=H[i]}return s}const D="en";R("en",()=>Promise.resolve(z("en")));R("ru",()=>Promise.resolve(z("ru")));X({fallbackLocale:D,initialLocale:D});async function kt(e=D){I.set(e),await Z()}const It=!0,St="always";async function Tt(){return await kt("en"),{}}const Rt=Object.freeze(Object.defineProperty({__proto__:null,load:Tt,prerender:It,trailingSlash:St},Symbol.toStringTag,{value:"Module"}));var At=p("<option> </option>"),Lt=p("<select></select>");function Et(e,s){x(s,!1);const i=()=>q(I,"$locale",t),[t,l]=Y(),n=[{code:"en",label:"English"},{code:"ru",label:"Русский"}],a="preferred-locale";let r=G("en");M(()=>{const o=localStorage.getItem(a)||i()||Q()||"en";I.set(o),w(r,o)});function h(d){const o=d.target.value;I.set(o),w(r,o),localStorage.setItem(a,o)}O();var _=Lt();ye(_,5,()=>n,ke,(d,o)=>{var c=At(),v=b(c,!0);u(c);var f={};L(()=>{se(v,(m(o),S(()=>m(o).label))),f!==(f=(m(o),S(()=>m(o).code)))&&(c.value=(c.__value=(m(o),S(()=>m(o).code)))??"")}),g(d,c)}),u(_),Le(_,()=>m(r),d=>w(r,d)),A("change",_,h),g(e,_),P(),l()}var $t=p('<div class="overlay svelte-16thuch"><div class="banner"><!> <button class="svelte-16thuch">X</button></div></div>');function Ct(e,s){x(s,!1);const i=()=>q(te,"$_",t),[t,l]=Y(),n=["Android","webOS","iPhone","iPad","iPod","BlackBerry","IEMobile","Opera Mini"];let a=G(!1);M(()=>{const o=navigator.userAgent||navigator.vendor||window.opera||"";w(a,n.some(c=>o.includes(c)))});function r(){w(a,!1)}O();var h=oe(),_=V(h);{var d=o=>{var c=$t(),v=b(c),f=b(v);ee(f,()=>(ve(j),i(),S(()=>j(i()("messages.other.no_mobile")))));var J=T(f,2);u(v),u(c),A("click",J,r),g(o,c)};Ie(_,o=>{m(a)&&o(d)})}g(e,h),P(),l()}var Dt=p('<video loop="" playsinline="" preload="metadata"></video>',2);function Ot(e,s){let i=ae(s,"src",8),t=G();function l(){m(t)?.play()}function n(){m(t)&&(m(t).pause(),we(t,m(t).currentTime=0))}var a=Dt();a.muted=!0,Se(a,r=>w(t,r),()=>m(t)),L(()=>C(a,"src",i())),A("mouseenter",a,l),A("mouseleave",a,n),g(e,a)}var xt=p('<link rel="icon"/>'),Mt=p("<a><!></a>"),Pt=p('<!> <div class="window-container"><div class="window-row"><!></div> <div class="window-row"><!></div></div> <!>',1);function qt(e,s){x(s,!1),M(()=>{document.documentElement.style.setProperty("--base-path",`"${k}"`)}),O();var i=Pt();Te("12qhfyh",d=>{var o=xt();L(()=>C(o,"href",`${k??""}/favicon.png`)),U(()=>{fe.title="GearBoxing's web world"}),g(d,o)});var t=V(i);Ct(t,{});var l=T(t,2),n=b(l),a=b(n);N(a,{title:"Hello world",width:500,height:200,bg_col:"black",children:(d,o)=>{var c=Mt(),v=b(c);Ot(v,{get src(){return`${k??""}/assets/gearboxing-logo.mkv`}}),u(c),L(()=>C(c,"href",`${k??""}/`)),g(d,c)},$$slots:{default:!0}}),u(n);var r=T(n,2),h=b(r);N(h,{title:"Settings",width:500,height:"auto",children:(d,o)=>{Et(d,{})},$$slots:{default:!0}}),u(r),u(l);var _=T(l,2);ne(_,s,"default",{}),g(e,i),P()}export{qt as component,Rt as universal};
