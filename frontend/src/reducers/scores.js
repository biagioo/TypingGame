const scores = (
  state = {
    All: [],
  },
  action
) => {
  switch (action.type) {
    case 'ALL_SCORES':
      return {
        ...state,
        All: action.payload,
      };

    default:
      return state;
  }
};

export default scores;
