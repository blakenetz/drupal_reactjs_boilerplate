export default (state = { count: 0 }, action: any) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};
