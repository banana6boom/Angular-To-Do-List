import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseResponse } from '../models/firebase-response.interface';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  static url = 'https://angular-calendar-3f80f-default-rtdb.firebaseio.com/tasks';

  constructor(private http: HttpClient) {}

  createTask(task: Task): Observable<Task> {
    return this.http.post<FirebaseResponse>(`${TasksService.url}/${task.date}.json`, task).pipe(
      map((response) => {
        return { ...task, id: response.name };
      }),
    );
  }

  removeTask(task: Task): Observable<void> {
    return this.http.delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`);
  }

  loadTasks(date: moment.Moment): Observable<Task[]> {
    return this.http.get<Task[]>(`${TasksService.url}/${date.format('DD-MM-YYYY')}.json`).pipe(
      map((tasks) => {
        if (!tasks) {
          return [];
        }
        return Object.keys(tasks).map((key: any) => ({ ...tasks[key], id: key }));
      }),
    );
  }
}
