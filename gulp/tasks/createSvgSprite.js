// import gulp from 'gulp';
// import svgSprite from 'gulp-svg-sprite';
//
// import { filePaths } from '../config/paths.js';
// import { logger } from '../config/Logger.js';
//
// const createSvgSprite = () => {
//     return gulp
//         .src(filePaths.src.svgIcons, {})
//         .pipe(logger.handleError('COPY ROOT FILES'))
//         .pipe(
//             svgSprite({
//                 mode: {
//                     symbol: {
//                         sprite: '../sprite.svg',
//
//                         /** Создавать страницу с перечнем иконок */
//                         example: true,
//                     },
//                 },
//             })
//         )
//         .pipe(gulp.dest(filePaths.srcFolder + '/blocks/svg-sprites/'));
// };
//
// export { createSvgSprite };

import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import newer from 'gulp-newer'; // Импортируем плагин 'gulp-newer'

import { filePaths } from '../config/paths.js';
import { logger } from '../config/Logger.js';

const createSvgSprite = () => {
    const destinationPath = filePaths.srcFolder + '/assets/'; // Определяем путь назначения для проверки 'newer'

    return gulp
        .src(filePaths.src.svgIcons, {}) // Исходные SVG-иконки
        .pipe(logger.handleError('COPY ROOT FILES')) // Обработка ошибок
        .pipe(newer(destinationPath + 'sprite.svg')) // Проверка наличия изменений с помощью 'newer'
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        dest: '.',
                        sprite: 'sprite.svg', // Имя файла спрайта

                        /** Создавать страницу с перечнем иконок */
                        example: true, // Создаём HTML-страницу с перечнем иконок
                    },
                },
            })
        )
        .pipe(gulp.dest(filePaths.buildFolder)); // Сохраняем спрайт и HTML-страницу
};

export { createSvgSprite };
