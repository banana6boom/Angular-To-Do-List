import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo.interface";
import { TodoService } from "../shared/todo.service";

@Component({
  selector: "app-to-do-form",
  templateUrl: "./to-do-form.component.html",
  styleUrls: ["./to-do-form.component.scss"],
})
export class ToDoFormComponent implements OnInit {
  title = "";

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date(),
    };

    this.todoService.addTodo(todo);
    this.title = "";
  }
}
