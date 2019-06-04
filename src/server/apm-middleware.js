import apm from 'elastic-apm-node';

// function redactAuthHeaders(payload) {
//   if (payload.context && payload.context.request && payload.context.request.headers) {
//     const headers = payload.context.request.headers;
//     if (headers['x-authenticated-userid']) {
//       headers['x-authenticated-userid'] = '[REDACTED]';
//     }
//   }
//   return payload;
// }

// apm.addFilter(redactAuthHeaders);

export default () => {
  return async (ctx, next) => {
    // Skip if apm is disabled
    if (!apm.isStarted()) {
      // Skipped because APM is disabled
      await next();
      return;
    }

    try {
      await next();
    } catch (err) {
      // Sending error when response is sent
      ctx.res.on('finish', () => {
        apm.captureError(err);

        // Sent error to APM server
      });
      throw err;
    } finally {
      // Set custom context data
      const reqId = ctx.state.reqId || ctx.reqId || ctx.req.id || ctx.get('X-Request-Id');
      const custom = { reqId };
      apm.setCustomContext(custom);

      // Set user context data
      apm.setUserContext({ userId: 'test' }); // ctx.state.user
    }
  };
};
