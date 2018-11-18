import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Compte } from '../model/compte';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  pageContent : any = [] ;
  compte: Compte = new Compte();
  constructor(private http:Http ) { } 
 

  ngOnInit() {
    this.getComptes();
  }

  getComptes(){
    this.http.get("http://localhost:8080/compte/comptes")
    .map(resp => resp.json()) 
      .subscribe(data => {
        this.pageContent= data; 
       // this.pages = new Array(data.totalPage);
      }, err => {
        console.log(err);
      });
  }
   
  deletecompte(compte){
    this.http.delete("http://localhost:8080/compte/comptes/"+compte)
    .map(resp => resp.json())
      .subscribe(data => {  
        console.log(data);
        this.getComptes();
       // this.pages = new Array(data.totalPage);
      }, err => {
        console.log(err);
      });
  }
  
  
  savecompte() {
    console.log("je teste "); 
    this.http.post("http://localhost:8080/compte/save",this.compte)
      .map(resp => resp.json())
      .subscribe(data=>{
        this.getComptes();
        console.log(data)
      }, err=>{
        console.log(err);
      }) 
  }

}
