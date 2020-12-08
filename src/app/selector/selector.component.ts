import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  public date: any;
  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.dateService.date.subscribe((date) => (this.date = date));
  }

  toggle(direction: number) {
    this.dateService.changeMonth(direction);
  }
}
