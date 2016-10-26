import Hapi from 'hapi';

import connection from './config/connection';
import plugins from './config/plugins';
import logger from './config/winston';
import { version } from '../package.json';

const server = new Hapi.Server();

server.connection(connection);

server.register(plugins, (error) => {
  if (error) {
    return server.log('error', error);
  }

  if (!module.parent) {
    server.start((err) => {
      if (err) {
        logger.error(err);
      }

      logger.info('Server started', {
        version,
        NODE_ENV: process.env.NODE_ENV,
        uri: server.info.uri,
      });
    });
  }
});

export default server;
