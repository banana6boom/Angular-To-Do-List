import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';

const routes: Routes = [
  {
    path: 'to-do',
    component: ToDoPageComponent,
  },
  {
    path: 'organizer',
    loadChildren: () => import('./organizer-page/organizer.module').then((m) => m.OrganizerModule),
  },
  { path: '', redirectTo: '/to-do', pathMatch: 'full' },
  { path: '**', redirectTo: 'to-do' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
