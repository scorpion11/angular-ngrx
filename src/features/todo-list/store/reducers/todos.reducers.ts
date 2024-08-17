import {createFeature, createReducer, on} from '@ngrx/store';
import {TodoActions} from "../actions/todos.actions";
import {Todo} from "../../interfaces/todo.interface";

export const initialState: Todo[] = []


export const todosFeature = createFeature({
  name: 'todos',
  reducer: createReducer(
    initialState,
    on(TodoActions.loadTodosSuccess, (state, { todos }) => [...todos]),
    on(TodoActions.addTodo, (state, { todo }) => [...state, todo])
  )
});

export const {
  selectTodosState
} = todosFeature;
