// @flow
import React from 'react';
import { Grid as GridBase } from '@devexpress/dx-react-grid';
import { Root } from './templates/layout';

export const Grid = ({ children, ...props }: Props) => (
  <GridBase rootComponent={Root} {...props}>
    {children}
  </GridBase>
);

Grid.Root = Root;

type Props = {
  children: React.ReactNode,
};
