import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CompteComponent } from './compte/compte.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'todo',
    component: TodoComponent
  }, 
  {
    path: 'compte',
    component: CompteComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
