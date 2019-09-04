// @flow
import chalk from 'chalk';
import bodyParser from 'koa-bodyparser';
import reqId from '@kasa/koa-request-id';
import Koa, { type Context } from 'koa';
import Router from 'koa-router';
import { type Server } from 'next';

export { default as apmMiddleware } from './apm-middleware';
export { default as withNZ } from './with-nz';

export default ({ nextServer, app, router, name = 'App' }: Props) => {
  const { PORT = 4000 } = process.env;
  const port = parseInt(PORT, 10);

  // Handle uncaught errors

  app.use(
    bodyParser({
      enableTypes: ['json', 'form'],
      formLimit: '10mb',
      jsonLimit: '10mb',
    })
  );

  app.use(reqId());

  // app.use(async (ctx: Context, next: VoidFunction) => {
  //   try {
  //     ctx.res.statusCode = 200;
  //     await next();
  //   } catch (err) {
  //     ctx.status = err.statusCode || err.status || 500;
  //     ctx.body = {
  //       message: err.message,
  //     };
  //   }
  // });

  // router.get('*', async (ctx: Context) => {
  //   // if (!ctx.body) {
  //     await nextServer.getRequestHandler()(ctx.req, ctx.res);
  //     ctx.respond = false;
  //   // }
  // });

  return {
    app,
    nextServer,
    handleListen: () => {
      /* eslint-disable no-console */
      console.log(chalk`{blue ${name}} Start WEB server.`);
      console.log(chalk`{blue ${name}} ENV {green ${app.env}}`);
      console.log(`> Ready on http://localhost:${port}`);
    },
  };
};

type Props = {
  app: Koa<object>,
  router: Router<object>,
  nextServer: Server,
  name: string,
};
