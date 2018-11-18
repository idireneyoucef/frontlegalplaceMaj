import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component'; 
import {HttpModule} from '@angular/http';
import { CompteComponent } from './compte/compte.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TableComponent,
    CompteComponent,
    HomeComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
