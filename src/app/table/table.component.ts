import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/todo';

import { TodoService } from '../shared/todo.service'; 

 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource = [] ;
  constructor(private toDoService:TodoService) { }
 
  ngOnInit() {
    //this.dataSource = ELEMENT_DATA;
  }


  
  doAdd(todo){ 
    this.dataSource.push(todo);   
  }
  doDelete(todo){  
    //delete this.dataSource[todo];
    this.dataSource =this.dataSource.filter(obj => obj !== todo)
  } 
  todo: Todo = new Todo();
 
 
  saveTodo() {
    this.toDoService.saveTodo(this.todo)
      .subscribe(data=>{
        console.log(data)
      }, err=>{
        console.log(err);
      }) 
  }
}
