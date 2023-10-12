//type CRUD
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
