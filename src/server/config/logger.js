import winston from 'winston';
import chalk from 'chalk';

function defineMeta(options, color) {
  if (options.level === 'error') {
    return `\n\n${chalk[color]('STACK TRACE')}\n\n${JSON.stringify(options.meta.stack, undefined, 1)}`;
  } else if (options.meta && Object.keys(options.meta).length) {
    return `\n\n${chalk[color]('META DATA')}\n\n${JSON.stringify(options.meta, undefined, 1)}`;
  }
  return '';
}

const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)({
      level: 'debug',
      prettyPrint: true,
      handleExceptions: true,
      formatter(options) {
        const color = options.level === 'error' ? 'red' : 'green';
        const meta = defineMeta(options, color);
        // Return string will be passed to logger.
        return `${chalk.blue(new Date())} \n\n${chalk[color](options.level.toUpperCase())} - ${chalk.magenta(options.message || '')} ${meta}`;
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
