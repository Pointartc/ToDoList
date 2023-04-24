import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoBookComponent } from './todo-book/todo-book.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './shared/main/main.component';
import { TodoListComponent } from './todo-book/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBookComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
