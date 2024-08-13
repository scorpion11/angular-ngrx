import {Component, inject} from '@angular/core';
import {Todo} from "./interfaces/todo.interface";
import {TodoService} from "./services/todo.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgClass} from "@angular/common";
import {Observable} from "rxjs";

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
  todoService = inject(TodoService);
  todos$ = this.todoService.getTodos();

  todoName: string = '';
  todoState: boolean = false;

  addTodo() {
    const newTodo: Todo = { id: Date.now(), title: this.todoName, completed: this.todoState };
    this.todoService.addTodo(newTodo);
    this.todoName = '';
    this.todoState = false;
    this.todos$ = this.todoService.getTodos();
  }
}
