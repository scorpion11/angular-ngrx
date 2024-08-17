import {Todo} from "../../interfaces/todo.interface";
import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todos': emptyProps,
    'Load Todos Success': props<{ todos: Todo[] }>(),
    'Load Todos Failure': props<{ error: any }>(),
    'Add Todo': props<{ todo: Todo }>(),
  },
});
