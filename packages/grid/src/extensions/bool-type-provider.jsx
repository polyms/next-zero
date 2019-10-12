// @flow
import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {
  value: boolean | null | undefined,
  for: Array<string>,
};

const Formatter = ({ value }: Props) => do {
  if (value) <FontAwesomeIcon icon={faCheckSquare} size="lg" className="text-success mt-1" />;
  else <FontAwesomeIcon icon={faSquare} size="lg" className="text-muted mt-1" />;
};

export const BooleanTypeProvider = (props: Props) => <DataTypeProvider formatterComponent={Formatter} {...props} />;
