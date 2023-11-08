// //type CRUD
// /** Action Type Constants: */
// export const GET_IMAGES = "task/GET_IMAGES";
// export const REMOVE_IMAGES = "task/REMOVE_IMAGES"

// /**  Action Creators: */
// export const getImagesAction = (images) => ({
//   type: GET_IMAGES,
//   images, //payload
// });

// export const removeImagesAction = () => ({
// 	type: REMOVE_IMAGES,
// });

// export const getImagesThunk = (checkInId) => async (dispatch) => {
//  const res = await fetch(`/api/categories/${checkInId}/tasks`);
//  if (res.ok) {
//    const tasks = await res.json();
//    const tasksArray = tasks.Category_tasks;
//    // console.log(
//    //  "*********************in the if block, res.json()**************",
//    //  tasksArray
//    //  );
//    dispatch(getTasksAction(tasksArray));
//    return tasksArray;
//  }
// };

// export const addImageThunk = (formData) => async (dispatch) => {
//   const res = await fetch(`/api/checkIns/${checkInId}/image_add`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData),
//   });

//   if (res.ok) {
//     // const newTaskResponse = await res.json();
//     const tasks = await dispatch(getTasksThunk(checkInId));
//     // console.log(
//     //   "*********************in the if block, **************",
//     // tasks
//     // );
//     return tasks;
//   } else {
//     const errors = await res.json();

//     return errors;
//   }
// };



// export const deleteTaskThunk = (taskId, categoryId) => async (dispatch) => {
//   const res = await fetch(`/api/tasks/delete/${taskId}`, {
//     method: "DELETE",
//   });

//   if (res.ok) {
//     const tasks = await dispatch(getTasksThunk(categoryId));
//     return tasks;
//   } else {
//     const errors = await res.json();
//     return errors;
//   }
// };

// const initialState = {}; //store shape

// export const imageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_IMAGES:
//       return { ...action.tasks };
//     case REMOVE_IMAGES:
//       return {  tasks: null };
//     default:
//       return state;
//   }
// };
