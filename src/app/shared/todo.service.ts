import { Injectable } from "@angular/core";
import { Todo } from "../models/Todo.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  public todo: Todo[] = [
    // {
    //   id: 1,
    //   title: "buy a piece of the moon",
    //   completed: false,
    //   date: new Date(),
    // },
    // {
    //   id: 2,
    //   title: "see the last season of Adventure Time",
    //   completed: false,
    //   date: new Date(),
    // },
    // { id: 3, title: "hack Nasa server", completed: true, date: new Date() },
    // {
    //   id: 4,
    //   title: "check Python courses",
    //   completed: false,
    //   date: new Date(),
    // },
  ];

  constructor(private http: HttpClient) {}

  fetchTodo(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .pipe(tap((todo) => (this.todo = todo)));
  }

  onToggle(id: number) {
    const index = this.todo.findIndex((t) => t.id === id);
    this.todo[index].completed = !this.todo[index].completed;
  }

  removeTodo(id: number) {
    this.todo = this.todo.filter((t) => t.id !== id);
  }
}
