import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { TodoFilterPipe } from './shared/todo-filter.pipe';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';

@NgModule({
  declarations: [AppComponent, ToDoComponent, ToDoFormComponent, TodoFilterPipe, ToDoPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
