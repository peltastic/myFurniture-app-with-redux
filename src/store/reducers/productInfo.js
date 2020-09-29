const initialState = {
  data: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_INFO":
      return {
        ...state,
        data: action.info,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
