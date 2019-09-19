/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withCssResources } from '@storybook/addon-cssresources';
import results from './.jest-test-results.json';

// configure(require.context('../../src', true, /\.stories\.jsx$/), module);
configure(require.context('../../stories', true, /\.stories\.(jsx|mdx)$/), module);

addDecorator(withCssResources);

addDecorator(
  withTests({
    results,
  })
);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'responsive',
  },
});
