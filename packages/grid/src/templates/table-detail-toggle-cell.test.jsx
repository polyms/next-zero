import * as React from 'react';
import { shallow } from 'enzyme';
import { setupConsole } from '../demo-data/setup-console';
import { TableDetailToggleCell } from './table-detail-toggle-cell';

describe('TableDetailToggleCell', () => {
  let resetConsole;
  beforeAll(() => {
    resetConsole = setupConsole({ ignore: ['validateDOMNesting'] });
  });
  afterAll(() => {
    resetConsole();
  });

  it('should pass style to the root element', () => {
    const tree = shallow(<TableDetailToggleCell className="test" />);

    expect(tree.prop('className')).toContain('test');
  });

  it('should pass rest props to the root element', () => {
    const tree = shallow(<TableDetailToggleCell data={{ a: 1 }} />);

    expect(tree.props().data).toMatchObject({ a: 1 });
  });
});