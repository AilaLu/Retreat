//type CRUD

import { get } from "mongoose";

/** Action Type Constants: */
export const GET_CHECKINS = "checkIns/GET_CHECKINS";
export const REMOVE_CHECKINS = "checkIns/REMOVE_CHECKINS";

/**  Action Creators: */
export const getCheckInsAction = (checkIns) => ({
  type: GET_CHECKINS,
  checkIns, //payload
});

export const removeCheckInsAction = () => ({
	type: REMOVE_CHECKINS,
});
/** Thunk: */
export const getCheckInsThunk = () => async (dispatch) => {
  const res = await fetch("/api/checkIns/");
  if (res.ok) {
    const checkIns = await res.json();

    const checkInsArray = checkIns.CheckIns
    dispatch(getCheckInsAction(checkInsArray));
  }
};

export const addCheckInThunk = (mood, year, month, date) => async (dispatch) => {
    const res = await fetch("/api/checkIns/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({mood, year, month, date}),
    });


    if (res.ok) {
      const newCheckInResponse = await res.json();
      // console.log(
      //   "*********************in the if block, res.json()**************",
      //   newCheckInResponse
      // );
      dispatch(getCheckInsThunk());
      return newCheckInResponse;
    } else {
      const errors = await res.json();

      return errors;
    }

  };


  export const editCheckInThunk = (mood, year, month, date, checkInId) => async (dispatch) => {
    //  try {

    const res = await fetch(`/api/checkIns/${checkInId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({mood, year, month, date}),
    });


    if (res.ok) {
      const checkInResponse = await res.json();
      dispatch(getCheckInsThunk());
      return checkInResponse;
    } else {
      const errors = await res.json();

      return errors;
    }

  };


export const deleteCheckInThunk = (checkInId) => async (dispatch) => {
  const res = await fetch(`/api/checkIns/${checkInId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(getCheckInsThunk());
  } else {
    const errors = await res.json();
    return errors;
  }
};


// ! checkInTask thunks below 
export const addCheckInTaskThunk = (checkInId, taskId) => async (dispatch) => {
  const res = await fetch(`/api/checkIns/${checkInId}/${taskId}/task_done`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });


  if (res.ok) {
    const taskDone = await res.json();
    // console.log(
    //   "*********************in the if block, res.json()**************",
    //   taskDone
    // );
    dispatch(getCheckInsThunk());
    return taskDone;
  } else {
    const errors = await res.json();

    return errors;
  }

};


export const deleteCheckInTaskThunk = (checkInId, taskId) => async (dispatch) => {
  const res = await fetch(`/api/checkIns/${checkInId}/${taskId}/task_undone`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(getCheckInsThunk());
  } else {
    const errors = await res.json();
    return errors;
  }
};


// ! Image thunks below
export const addImageThunk = (checkInId, formData) => async (dispatch) => {
  const res = await fetch(`/api/checkIns/${checkInId}/image_add`, {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const newImageResponse = await res.json();
     await dispatch(getCheckInsThunk());
    console.log(
      "*********************in add image thunk, **************",
      newImageResponse
    );
    return newImageResponse;
  } else {
    const errors = await res.json();

    return errors;
  }
};



export const deleteImageThunk = (imageId) => async (dispatch) => {
  const res = await fetch(`/api/checkIns/${imageId}/image_delete`, {
    method: "DELETE",
  });

  if (res.ok) {
    const checkIns = await dispatch(getCheckInsThunk());
    return checkIns
  } else {
    const errors = await res.json();
    return errors;
  }
};


const initialState = {}; //store shape

export const checkInReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECKINS:
      return { ...action.checkIns };
      case REMOVE_CHECKINS:
        return { checkIns: null };
    default:
      return state;
  }
};
