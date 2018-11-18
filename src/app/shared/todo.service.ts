import { Injectable } from '@angular/core'; 
import {HttpModule, Http} from '@angular/http';
import {Todo} from '../model/todo';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
toDoList :string [];

  constructor( private http:Http) 
  { 

  }
  getTodoList(){
   
  }
  addTitel( title :string ){
    
     
  }

  checkOrUnChekTitle($key :string , flag:boolean)
  {
    
  }

  removeTitle( $key :string ){
     
     
  }

  getTodo( ){
    return this.http.get("http://localhost:8080/todo/todos")
      .map(resp => resp.json());
  }

  saveTodo(todo:Todo){
    return this.http.post("http://localhost:8080/todo/save",todo)
      .map(resp => resp.json());
  }
  
  deleteTodo(id:number){
    return this.http.delete("http://localhost:8080/todo/todos/"+id)
      .map(resp => resp.json());
  }

}
