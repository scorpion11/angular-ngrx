import {Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Todo} from "../todo-list/interfaces/todo.interface";
import {Store} from "@ngrx/store";
import {TodoActions} from "../todo-list/store/actions/todos.actions";
import {Observable} from "rxjs";
import {AppState} from "../../app/app.state";
import {
  selectCompletedTodosCount, selectTodos
} from "../todo-list/store/selectors/todos.selectors";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  store = inject(Store<AppState>);
  completedTodosCount$ = this.store.select(selectCompletedTodosCount);
  todos$: Observable<Todo[]>;

  constructor() {
    this.store.dispatch(TodoActions.loadTodos())
    this.todos$ = inject(Store).select(selectTodos);
  }
}
