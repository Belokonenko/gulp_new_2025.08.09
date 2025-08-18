import { plugins } from '../config/plugins.js';
import { filePaths } from '../config/paths.js';

const server = () => {
  plugins.browserSync.init({
    server: {
      baseDir: filePaths.buildFolder,
    },
    logLevel: 'info',
    cors: true,
    notify: true,
    port: 3000,
    middleware: [
      function (req, res, next) {
        res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';");
        next();
      }
    ]
  });
};

export { server };
