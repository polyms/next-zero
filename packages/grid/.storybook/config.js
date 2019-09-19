import { configure, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from './.jest-test-results.json';


configure(require.context('../src', true, /\.stories\.jsx$/), module);

addDecorator(
  withTests({
    results,
  })
);
