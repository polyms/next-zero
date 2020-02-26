import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'personally',
  initialState: {},
  reducers: {
    set: (state, { payload: [key, value] }) => ({
      ...state,
      [key]: value,
    }),
    remove: (state, { payload }) => ({
      ...state,
      [payload]: null,
    }),
  },
});

export const { actions } = slice;

export default slice;
