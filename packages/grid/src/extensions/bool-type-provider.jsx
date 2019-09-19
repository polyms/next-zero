// @flow
import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';

const Formatter = ({ value }: Props) => do {
  if (value) <FontAwesomeIcon icon={faCheckSquare} size="lg" className="text-success" />;
  else <FontAwesomeIcon icon={faSquare} size="lg" className="text-muted" />;
};

export const BooleanTypeProvider = (props: Props) => <DataTypeProvider formatterComponent={Formatter} {...props} />;

type Props = {
  value?: boolean,
  for: Array<string>,
};
