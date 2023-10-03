//type CRUD
/** Action Type Constants: */
export const GET_CATEGORIES = "category/GET_CATEGORIES";

/**  Action Creators: */
export const getCategoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  categories, //payload
});

/** Thunk: */
export const getCategoriesThunk = () => async (dispatch) => {
  const res = await fetch("/api/categories");
  if (res.ok) {
    const categories = await res.json();
    // console.log("*********************show in browser console, the response from backend in thunk, getCategoriesThunk**************", categories);
    const categoriesArray = categories.Categories
    dispatch(getCategoriesAction(categoriesArray));
  }
};

export const addCategory =
  (productId, purchaseQuantity) => async (dispatch) => {
    //  try {
    const res = await fetch(`/api/products/${productId}/shopping_cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ purchaseQuantity: purchaseQuantity }),
    });
    // console.log(
    //   "*********************the response from backend in thunk**************",
    //   res
    // );

    if (res.ok) {
      // console.log(
      //   "*********************in the if block, in thunk**************"
      // );
      const newItemResponse = await res.json();
      // console.log(
      //   "*********************in the if block, res.json()**************",
      //   newItemResponse
      // );
      dispatch(getCategoriesThunk());
      return newItemResponse;
    } else {
      const errors = await res.json();
      // console.log("*********************in the else block, the response from backend in thunk**************", errors);
      return errors;
    }
    //  } catch (error) {
    // const errors = await error.json();
    //  return error;
    //  }
  };

export const deleteItemThunk = (productId) => async (dispatch) => {
  //  console.log("*********************the response from backend in thunk**************", productId);
  const res = await fetch(`/api/shopping_cart/${productId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(getCategoriesThunk());
  } else {
    const errors = await res.json();
    return errors;
  }
};

const initialState = {}; //store shape

/** shopping Cart reducers: */
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...action.categories };
    default:
      return state;
  }
};
