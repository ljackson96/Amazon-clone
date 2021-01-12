export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // code for adding item to basket
      break;
    case "REMOVE_FROM_BASKET":
      // code for adding item to basket
      break;
    default:
      return state;
  }
};

export default reducer;
