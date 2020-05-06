import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./to-do/to-do.component";
import { HttpClientModule } from "@angular/common/http";
import { ToDoFormComponent } from './to-do-form/to-do-form.component';

@NgModule({
  declarations: [AppComponent, ToDoComponent, ToDoFormComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
