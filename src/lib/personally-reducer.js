export const personallyReducer = (state, { type, payload }) => {
  if (type === 'test') {
    return {
      ...state,
      personally: payload,
    };
  }
  return state;
};
