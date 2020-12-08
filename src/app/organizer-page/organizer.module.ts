import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganizerComponent } from '../organizer/organizer.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { SelectorComponent } from '../selector/selector.component';
import { OrganizerPageComponent } from './organizer-page.component';
import { MomentPipe } from '../shared/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [OrganizerComponent, CalendarComponent, SelectorComponent, OrganizerPageComponent, MomentPipe],
  imports: [
    CommonModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: OrganizerPageComponent }]),
  ],
  exports: [RouterModule],
})
export class OrganizerModule {}
