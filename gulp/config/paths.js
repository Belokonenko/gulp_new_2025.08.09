import path from 'path';

const buildFolder = './dist';
const srcFolder = './src';

const filePaths = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    static: `${buildFolder}/static/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/assets/icons/**/*.svg`,
    scss: [`${srcFolder}/scss/main.scss`, `${srcFolder}/scss/pages/*.scss`],
    html: `${srcFolder}/pages/*.html`,
    static: `${srcFolder}/static/**/*.*`,
    svgIcons: [`${srcFolder}/assets/icons/*.svg`],
    fontFacesFile: `${srcFolder}/scss/config/fonts.scss`,
    fonts: `${srcFolder}/assets/fonts/`,
  },
  watch: {
    js: [`${srcFolder}/js/**/*.js`, `${srcFolder}/blocks/**/*.js`],
    scss: [
      `${srcFolder}/scss/**/*.scss`,
      `${srcFolder}/blocks/**/*.scss`,
      `${srcFolder}/components/**/*.scss`,
    ],
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    static: `${srcFolder}/static/**/*.*`,
    images: `${srcFolder}/icons/*.{jpg,jpeg,png,svgico}`,
    svgIcons: [`${srcFolder}/assets/icons/*.svg`, `!${srcFolder}/assets/icons/sprite.svg`],
  },
  buildFolder,
  srcFolder,
  projectDirName: path.basename(path.resolve()),
  ftp: ``, // Путь к нужной папке на удаленном сервере. Gulp добавит имя папки проекта автоматически
};

export { filePaths };
