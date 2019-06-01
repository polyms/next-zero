// @flow
import chalk from 'chalk';
import Koa from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import nextServer from 'next';

export default ({ nextConfig, routers }) => {
  const { NODE_ENV, PORT } = process.env;
  const port = parseInt(PORT, 10);
  const dev = NODE_ENV !== 'production';
  const server = nextServer({ dev, ...nextConfig });

  const app = new Koa();
  app.use(koaBody());

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
    app.listen(port, () => {
      /* eslint-disable import/no-dynamic-require */
      /* eslint-disable no-console */
      /* eslint-disable global-require */

      const { name } = require(__dirname);

      console.log(chalk`{blue ${name}} Start WEB server.`);
      console.log(chalk`{blue ${name}} ENV {green ${app.env}}`);
      console.log(`> Ready on http://localhost:${port}`);
    });
  });

  return { app, next: nextServer };
};
