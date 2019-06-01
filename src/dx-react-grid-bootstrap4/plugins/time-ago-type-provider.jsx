// @flow
import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import formatRelative from 'date-fns/formatRelative';

const Formatter = ({ value }: Props) => (
  <>{value && formatRelative(new Date(value), new Date(), { weekStartsOn: 1 })}</>
);

export const TimeAgoTypeProvider = props => <DataTypeProvider formatterComponent={Formatter} {...props} />;

type Props = {
  value?: Date | string | number,
};
