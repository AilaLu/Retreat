//type CRUD
/** Action Type Constants: */
export const GET_TASKS = "task/GET_TASKS";
export const REMOVE_TASKS = "task/REMOVE_TASKS"

/**  Action Creators: */
export const getTasksAction = (tasks) => ({
  type: GET_TASKS,
  tasks, //payload
});

export const removeTasksAction = () => ({
	type: REMOVE_TASKS,
});

/** Thunk: */
export const getTasksThunk = (categoryId) => async (dispatch) => {
  const res = await fetch(`/api/categories/${categoryId}/tasks`);
  if (res.ok) {
    const tasks = await res.json();
    const tasksArray = tasks.Category_tasks;
    // console.log(
    //  "*********************in the if block, res.json()**************",
    //  tasksArray
    //  );
    dispatch(getTasksAction(tasksArray));
    return tasksArray;
  }
};

export const addTaskThunk = (title, icon, categoryId) => async (dispatch) => {
  const res = await fetch(`/api/categories/${categoryId}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, icon }),
  });

  if (res.ok) {
    // const newTaskResponse = await res.json();
    const tasks = await dispatch(getTasksThunk(categoryId));
    // console.log(
    //   "*********************in the if block, **************",
    // tasks
    // );
    return tasks;
  } else {
    const errors = await res.json();

    return errors;
  }
};

export const editTaskThunk =
  (title, icon, taskId, categoryId) => async (dispatch) => {
    //  try {

    const res = await fetch(`/api/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, icon }),
    });

    if (res.ok) {
      // const newTaskResponse = await res.json();
      // dispatch(getTasksThunk(categoryId));
      // return newTaskResponse;
      const tasks = await dispatch(getTasksThunk(categoryId));
      return tasks;
    } else {
      const errors = await res.json();

      return errors;
    }
  };

export const deleteTaskThunk = (taskId, categoryId) => async (dispatch) => {
  const res = await fetch(`/api/tasks/delete/${taskId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const tasks = await dispatch(getTasksThunk(categoryId));
    return tasks;
  } else {
    const errors = await res.json();
    return errors;
  }
};

const initialState = {}; //store shape

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...action.tasks };
    case REMOVE_TASKS:
      return {  tasks: null };
    default:
      return state;
  }
};
