//type CRUD
/** Action Type Constants: */
export const GET_TASKS = "category/GET_TASKS";

/**  Action Creators: */
export const getCategoriesAction = (categories) => ({
  type: GET_TASKS,
  categories, //payload
});

/** Thunk: */
export const getCategoriesThunk = () => async (dispatch) => {
  const res = await fetch("/api/categories/");
  if (res.ok) {
    const categories = await res.json();
    // console.log("*********************show in browser console, the response from backend in thunk, getCategoriesThunk**************", categories);
    const categoriesArray = categories.Categories
    dispatch(getCategoriesAction(categoriesArray));
  }
};

export const addTaskThunk = (title, icon) => async (dispatch) => {
    //  try {

    const res = await fetch("/api/categories/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({title, icon}),
    });
    console.log(
      "*********************the response from backend in thunk****************",
      res
    );

    if (res.ok) {
      // console.log(
      //   "*********************in the if block, in thunk**************"
      // );
      const newCategoryResponse = await res.json();
      // console.log(
      //   "*********************in the if block, res.json()**************",
      //   newCategoryResponse
      // );
      dispatch(getCategoriesThunk());
      return newCategoryResponse;
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
    case GET_TASKS:
      return { ...action.categories };
    default:
      return state;
  }
};
