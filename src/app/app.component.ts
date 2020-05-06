import { Component } from "@angular/core";
import { Todo } from "./models/Todo.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-to-do-list";

  public todo: Todo[] = [
    {
      id: 1,
      title: "buy a piece of the moon",
      completed: false,
      date: new Date(),
    },
    {
      id: 2,
      title: "see the last season of Adventure Time",
      completed: false,
      date: new Date(),
    },
    { id: 3, title: "hack Nasa server", completed: true, date: new Date() },
    {
      id: 4,
      title: "check Python courses",
      completed: false,
      date: new Date(),
    },
  ];
}
