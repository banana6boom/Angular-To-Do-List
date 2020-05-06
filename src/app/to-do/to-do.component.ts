import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo.interface";
import { TodoService } from "../shared/todo.service";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.scss"],
})
export class ToDoComponent implements OnInit {
  constructor(public todoService: TodoService) {}
  public loading = true;

  public todo: Todo[] = [];

  ngOnInit(): void {
    this.todoService
      .fetchTodo()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false;
      });
  }

  onChange(id: number) {
    this.todoService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }
}
