/* eslint-disable no-param-reassign */
import { createReducer, createAction } from 'redux-starter-kit';

export const addKeyAction = createAction('ADD_KEY');
export const removeKeyAction = createAction('REMOVE_KEY');

export const personallyReducer = createReducer(
  {},
  {
    ADD_KEY: (state, { payload }) => {
      const [key, value] = payload;
      state[key] = value;
    },
    REMOVE_KEY: (state, { payload }) => {
      delete state[payload];
      return state;
    },
  }
);
