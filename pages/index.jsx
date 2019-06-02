import React from 'react';
import { connect } from 'react-redux';

const action = clientState => ({
  type: 'test',
  payload: clientState,
});

export default connect(
  state => state,
  { setClientState: action }
)(({ personally, setClientState }) => (
  <div>
    <div>fromClient: {personally}</div>
    <div>
      <button type="button" onClick={() => setClientState('bar')}>
        Set Client State
      </button>
    </div>
  </div>
));
