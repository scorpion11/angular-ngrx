import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Todo} from "../../interfaces/todo.interface";
import {todosFeature} from "../reducers/todos.reducers";

export const selectTodos = createFeatureSelector<Todo[]>(todosFeature.name);
export const selectCompletedTodosCount = createSelector(
  selectTodos, (todos: Todo[]) => (todos?.filter(todo => todo.completed))?.length
);
