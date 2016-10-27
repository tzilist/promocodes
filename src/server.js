import Hapi from 'hapi';
// import * as HapiReactViews from 'hapi-react-views';

import connection from './config/connection';
import plugins from './config/plugins';
import logger from './config/logger';
import routes from './config/routes';
// import viewSet from './config/views';
import { version } from '../package.json';

const server = new Hapi.Server();

server.connection(connection);

server.register(plugins, (error) => {
  if (error) {
    return logger.error(error);
  }

  // server.views(viewSet(HapiReactViews));

  server.route(routes);

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
