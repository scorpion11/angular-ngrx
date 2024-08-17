import {Component, inject} from '@angular/core';
import {Todo} from "./interfaces/todo.interface";
import {TodoService} from "./services/todo.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {AppState} from "../../app/app.state";
import {Store} from "@ngrx/store";
import {TodoActions} from "./store/actions/todos.actions";
import {selectTodos} from "./store/selectors/todos.selectors";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
  imports: [
    FormsModule,
    AsyncPipe
  ],
  standalone: true
})
export class TodoListComponent {
  store = inject(Store<AppState>);
  todos$ = this.store.select(selectTodos);

  todoName: string = '';
  todoState: boolean = false;

  addTodo() {
    const newTodo: Todo = {id: Date.now(), title: this.todoName, completed: this.todoState};
    this.todoName = '';
    this.todoState = false;
    this.store.dispatch(TodoActions.addTodo({todo: newTodo}));
  }
}
