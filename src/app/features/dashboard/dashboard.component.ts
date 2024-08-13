import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../todo-list/services/todo.service";
import {AsyncPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Todo} from "../todo-list/interfaces/todo.interface";

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
export class DashboardComponent implements OnDestroy {
  todos: Todo[] = [];
  totalTodos: number = 0;
  completedTodos: number = 0;

  sub =     inject(TodoService).getTodos().subscribe((todos) => {
    this.todos = todos;
    this.totalTodos = todos.length;
    this.completedTodos = todos.filter(todo => todo.completed).length;
  });

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
