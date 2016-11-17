const defaultState = {
  date: new Date().toISOString(),
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};
