import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from "../actionTypes/actionTypes.js";

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
