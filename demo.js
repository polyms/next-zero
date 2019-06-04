/* eslint-disable import/no-extraneous-dependencies */
import apm from 'elastic-apm-node';
import server from './src/server';

apm.start({
  // Ignore requests to certain URLs from being instrumented
  ignoreUrls: ['/', '/spec'],
  // Only activate the agent if it's running in production and apm server is set
  active: process.env.NODE_ENV === 'production' && !!process.env.ELASTIC_APM_SERVER_URL,
});

server({ nextConfig: {} });
