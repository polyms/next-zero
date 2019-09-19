import * as React from 'react';
import { shallow } from 'enzyme';
import { Draggable } from '@devexpress/dx-react-core';
import { setupConsole } from '../../demo-data/setup-console';
import { ResizingControl } from './resizing-control';

const defaultProps = {
  onWidthChange: () => {},
  onWidthDraft: () => {},
  onWidthDraftCancel: () => {},
};

describe('ResizingControl', () => {
  let resetConsole;
  beforeAll(() => {
    resetConsole = setupConsole({ ignore: ['validateDOMNesting'] });
  });
  afterAll(() => {
    resetConsole();
  });

  it('should trigger onWidthChange with correct change on resize end', () => {
    const onWidthChange = jest.fn();
    const onWidthDraftCancel = jest.fn();
    const tree = shallow(
      <ResizingControl {...defaultProps} onWidthChange={onWidthChange} onWidthDraftCancel={onWidthDraftCancel} />
    );

    tree.find(Draggable).prop('onStart')({ x: 0 });

    tree.find(Draggable).prop('onEnd')({ x: 10 });
    expect(onWidthDraftCancel).toHaveBeenCalled();
    expect(onWidthChange).toHaveBeenCalledWith({ shift: 10 });
  });

  it('should trigger onWidthDraft with correct change on resize update', () => {
    const onWidthDraft = jest.fn();
    const tree = shallow(<ResizingControl {...defaultProps} onWidthDraft={onWidthDraft} />);

    tree.find(Draggable).prop('onStart')({ x: 0 });

    tree.find(Draggable).prop('onUpdate')({ x: 10 });
    expect(onWidthDraft).toHaveBeenCalledWith({ shift: 10 });
  });
});
