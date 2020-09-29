import axios from "axios";

export const saveProductInfo = (info) => {
  return {
    type: "PRODUCT_INFO",
    info: info,
  };
};

export const fetchFail = () => {
    return {
        type: "FETCH_FAIL"
    }
}

export const fetchProductInfo = (fetch) => {
  return (dispatch) => {
    axios
      .get("https://e-commerce-app-464f3.firebaseio.com/" + fetch + ".json")
      .then((response) => {
        const responseData = [];
        for (const data in response.data) {
          responseData.push(response.data[data]);
        }
        dispatch(saveProductInfo(responseData));
      })
      .catch (
        err => {
            dispatch(fetchFail())
        }
    );
  };
};
