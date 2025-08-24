# DAT-web

![demo-web](./website-demo-image/desktop.jpg 'Desktop Demo')
https://belokonenko.github.io/gulp_new_2025.08.09/

## Demo

![Desktop Demo](./website-demo-image/desktop.jpg 'Desktop Demo')
![Mobile Demo](./website-demo-image/mobile.jpg 'Mobile Demo')

---

##JSON REST API

-   Для работы с базой данных использоаван json-server

-   Установка.
    ```bach
        npm install json-server --save-dev
    ```
-   Запуск. 3000 порт занят gulp.

    ```bach
        json-server --watch db.json --port 4000
    ```

---

# Start Template: Gulp + WebPack + Babel

## Для работы используйте такие команды

-   Для установки всех зависимостей: `$ npm install`;
-   Для запуска сборщика Gulp нужно использовать: `$ npm run dev`;
-   Для сборки проекта в режиме `"production"`: `$ npm run build`;
-   Публикация dist на github в ветке gh-pages \\`$ npm run deploy`;

## Что делает Gulp?

-   сжимает HTML в режиме `production`;
-   удаляет комментарии из HTML в режиме `production`;
-   собирает SCSS файлы, добавляет вендорные префиксы;
-   удаляет комментарии из SCSS файлов;
-   в режиме `production` сжимает CSS и делает копию без сжатия;
-   конвертирует шрифты в `.ttf`, и из `.ttf` в `woff/woff2`;
         шрифтов .ttf поместить в папку src/assets/fonts
-   создает файл для подключения шрифтов.
-   Данный файл создается по такому пути: `src/scss/config/fonts.scss`,
-   выглядит это так:

```scss
@font-face {
    font-family: Inter;
    font-display: swap;
    src: url('../fonts/Inter-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
```

### ВНИМАНИЕ!!!

> Если в папке `src/scss/config` - уже есть файл `fonts.scss` 
    - тогда при добавлении новых шрифтов **НУЖНО УДАЛИТЬ** 
    старый файл `fonts.scss`. Не переживай, при повторном 
    запуске сборки - Gulp все новые шрифты сконвертирует и 
    создаст новый файл `fonts.scss`.

Дальше, что еще умеет сборка:

-   сжимает изображения и конвертирует их дополнительно в формат 
-    `.webp` 
-   подключает их если браузер поддерживает этот формат;
-
-   копирует папку `/static` с содержимым в финальную сборку.

### SVG sprite
    подключение sprite.html на стр первым в body
    ```html
        <body>
          @@include('../assets/sprite.html')
    ```
    подключение svg 
    ```html
    <svg class="test" width="20" height="20">
      <use xlink:href="#Icon-test"></use>
    </svg>
    ```
    
    пример sprite.html
    ```html
        
        <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
          <symbol id='Icon-test' viewBox="0 0 50 50">
            <path d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z" fill="#FFD11A" />
          </symbol>

          <symbol id='Icon-smal' viewBox="0 0 50 50">
            <path d="M28.9275 34.4167H21.1219V50H28.9275V34.4167Z" fill="#FFD11A" />
          </symbol>
        </svg>
    ```
-   

отдельной командой `$ npm run zip` можно заархивировать финальную папку для
-   заказчика **с именем проекта**;
-
-   так же для разработки `gulp` запускает сервер с автоматической перезагрузкой окна в браузере при
-   изменении файлов в проекте;
-
-   отдельной командой `$ npm run deployFTP` финальный проект выгружается на хостинг.
-   Опции для отправки проекта на нужный хостинг указываются в файле: `gulp/config/ftp.js`;
-
-   с 18.08.2023 есть поддержка шрифтов с такими названиями например: "`Inter-Regular[ |-|_|__][I|i]talic`"
-   -   такие названия Gulp правильно обработает и запишет в стили `font-style: normal/italic`;
-
-   Конвертация шрифтов происходит в папке `src/fonts`
-   от туда шрифты с рассширением `.woff2` переносятся в `dist/fonts`.
-   Если файл для подключения шрифтов уже создан -
-   gulp просто перенесет шрифты `*.woff2` в `dist/fonts` без лишней трудозатратной конвертации.

## Что делает WebPack?

-   именно `webpack` в данной сборке занимается обработкой файлов c JavaScript;
-   поддерживается модульное подключение скриптов `import/export`;
-   при импорте нет необходимости писать расширение файла `.js`, так
-   же если осуществляется импорт из файла `index.js` необязательно это указывать:

```javascript
import * as flsFunctions from './modules'; // './modules/index.js'
```

-   `webpack` c помощью `babel` позволяет тебе писать код на любимом **ES6+**;
-   в режиме `"production"` при финальной сборке файлы JS сжимаются, а
-   лишние комментарии удаляются.

## Финал

Отдельной вишенкой является плагин `gh-pages` для деплоя папки `/dist`
на отдельную ветку GitHub, чтобы красиво развернуть свой проект на GitHub Pages.
Для этого в `package.json` укажи в поле **homepage** ссылку на свою страницу gh-pages:

```json
"homepage": "https://{UserName}.github.io/{NameRepo}",
```

"homepage": "https://github.com/Belokonenko/Gulp-001",

скопировал в браузере в адрес

По любым вопросам касающихся сборки пишите мне в [Telegram](https://t.me/StarkElessar).

---


УДАЛИТЬ эту часть после настройки

Основная информация
name: Измените на имя вашего проекта.

version: Установите версию вашего проекта, если это не первая версия, начните с 1.0.0.

description: Напишите описание вашего проекта.

author: Замените Name <name.elessar@gmail.com> на ваше имя и email.

Репозиторий и домашняя страница

repository.url: Установите URL вашего репозитория.

bugs.url: Установите URL для страницы с проблемами вашего

репозитория (обычно это https://github.com/your-username/your-repo/issues).

homepage: Установите URL домашней страницы

вашего проекта (обычно это https://your-username.github.io/your-repo).

Скрипты
Если ваши задачи и настройки отличаются, возможно, вам потребуется изменить или добавить скрипты. Например:

deploy: Если вы используете другую платформу для деплоя,
измените этот скрипт соответствующим образом.

Ключевые слова

keywords: Обновите ключевые слова, чтобы они лучше описывали ваш проект.

DevDependencies и Dependencies

Возможно, вам не потребуется изменять этот раздел, если используемые пакеты вас устраивают. Но если вы используете другие пакеты, добавьте или удалите их здесь.
