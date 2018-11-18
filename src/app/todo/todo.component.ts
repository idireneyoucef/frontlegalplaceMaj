import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service'; 
import {Http} from '@angular/http';
import { Todo } from '../model/todo';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  todo: Todo = new Todo();
  pageContent : any = [] ;
  constructor(private http:Http,private toDoService:TodoService) { } 
 title='Todo List With Angular';

  ngOnInit() {
  //this.pageContent=this.toDoService.getTodo();
  this.getTodos();
     
  }
  onadd(itemTitle){
this.toDoService.addTitel(itemTitle);
itemTitle.value=null;

  }
 
  getTodos(){
    this.toDoService.getTodo()
      .subscribe(data => {
        this.pageContent= data; 
       // this.pages = new Array(data.totalPage);
      }, err => {
        console.log(err);
      });
  }
   
  deleteTodo(todo){
    this.toDoService.deleteTodo(todo)
      .subscribe(data => {  
        console.log(data);
        this.getTodos();
       // this.pages = new Array(data.totalPage);
      }, err => {
        console.log(err);
      });
  }
  
  
  saveTodo() {
    console.log("je teste ");
    this.toDoService.saveTodo(this.todo)
      .subscribe(data=>{
        
        console.log(data)
      }, err=>{
        console.log(err);
      }) 
  }

  

}
