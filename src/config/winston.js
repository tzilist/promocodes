import winston from 'winston';
import chalk from 'chalk';

const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)({
      level: 'debug',
      prettyPrint: true,
      handleExceptions: true,
      timestamp() {
        return Date.now();
      },
      formatter(options) {
        // Return string will be passed to logger.
        const color = options.level === 'error' ? 'bgRed' : 'bgGreen';
        let meta;
        if (options.level === 'error') {
          meta = `\n\n${chalk[color].black('STACK TRACE')}\n${JSON.stringify(options.meta.stack, undefined, 1)}`;
        } else if (options.meta && Object.keys(options.meta).length) {
          meta = `\n\n${chalk[color].black('META DATA')}\n${JSON.stringify(options.meta, undefined, 1)}`;
        } else {
          meta = '';
        }
        return `${chalk.bgBlue.white(new Date())}\n\n${chalk[color].black(options.level.toUpperCase())}   ${chalk.cyan(options.message || '')} ${meta}`;
      },
    }),
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'filelog-info.log',
      level: 'info',
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error',
      handleExceptions: true,
      humanReadableUnhandledException: true,
    }),
  ],
});

export default logger;
