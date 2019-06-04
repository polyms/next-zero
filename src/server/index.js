// @flow
import chalk from 'chalk';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import nextServer from 'next';
import apm from 'elastic-apm-node';

function handleError(err, ctx) {
  if (apm.active) {
    apm.captureError(err);
  }

  if (ctx == null) {
    // logger.error({ err, event: 'error' }, 'Unhandled exception occured');
  }
}

export default ({ nextConfig, routers, name = 'App' }) => {
  const { NODE_ENV, PORT = 4000 } = process.env;
  const port = parseInt(PORT, 10);
  const dev = NODE_ENV !== 'production';
  const server = nextServer({ dev, ...nextConfig });

  const app = new Koa();

  // Handle uncaught errors
  app.on('error', handleError);

  app.use(bodyParser());

  const router = new Router();
  if (routers) routers(router);

  router.get('*', async ctx => {
    await server.getRequestHandler()(ctx.req, ctx.res);
    ctx.respond = false;
  });

  app.use(async (ctx, next) => {
    try {
      ctx.res.statusCode = 200;
      await next();
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = {
        message: err.message,
      };
    }
  });

  app.use(router.routes()).use(router.allowedMethods());

  server.prepare().then(() => {
    const listener = app.listen(port, () => {
      /* eslint-disable import/no-dynamic-require */
      /* eslint-disable no-console */
      /* eslint-disable global-require */

      console.log(chalk`{blue ${name}} Start WEB server.`);
      console.log(chalk`{blue ${name}} ENV {green ${app.env}}`);
      console.log(`> Ready on http://localhost:${port}`);
    });

    listener.on('error', handleError);
  });

  return { app, next: nextServer };
};
