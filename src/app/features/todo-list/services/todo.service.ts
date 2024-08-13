import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/todo.interface";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Buy groceries', completed: true },
    { id: 2, title: 'Clean the house', completed: true },
    { id: 3, title: 'Do the dishes', completed: false },
    { id: 4, title: 'Clean the car', completed: false },
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
