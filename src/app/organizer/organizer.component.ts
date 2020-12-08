import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.interface';
import { DateService } from '../shared/date.service';
import { TasksService } from '../shared/tasks.service';
import { map, switchMap } from 'rxjs/operators';
import { Moment } from 'moment';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss'],
})
export class OrganizerComponent implements OnInit {
  public date: any;
  public form!: FormGroup;
  public tasks: Task[] = [];

  constructor(public dateService: DateService, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.dateService.date.pipe(switchMap((value: Moment) => this.tasksService.loadTasks(value))).subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  submit() {
    const { title } = this.form.value;
    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY'),
    };
    this.tasksService.createTask(task).subscribe(
      (task) => {
        this.tasks.push(task);
        this.form.reset();
      },
      (error) => console.error(error),
    );
  }

  removeTask(task: Task) {
    this.tasksService.removeTask(task).subscribe(
      () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
      (error) => console.log(error),
    );
  }
}
