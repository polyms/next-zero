// @flow
import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import prettysize from 'prettysize';

const Formatter = ({ value }: Props) => <>{value && prettysize(value)}</>;

export const SizeTypeProvider = props => <DataTypeProvider formatterComponent={Formatter} {...props} />;

type Props = {
  value?: number,
};
