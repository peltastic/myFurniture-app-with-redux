import axios from "axios"

export const saveProducts = (products) => {
  return {
    type: "RECEIVE_PRODUCTS",
    products: products
  };
};

export const fetchFail = () => {
    return {
        type: "FETCH_FAIL"
    }
}

export const fetchProducts = (fetch) => {
  return (dispatch) => {
    axios
      .get(
        "https://e-commerce-app-464f3.firebaseio.com/" +
          fetch +
          ".json"
      )
      .then((response) => {
        const responseData = [];
        for (const data in response.data) {
          responseData.push(response.data[data]);
        }
        dispatch(saveProducts(responseData))
      })
      .catch (
          err => {
              dispatch(fetchFail())
          }
      );
  };
};
