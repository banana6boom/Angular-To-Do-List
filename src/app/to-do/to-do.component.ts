import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../models/Todo.interface";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.scss"],
})
export class ToDoComponent implements OnInit {
  @Input() todo: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
