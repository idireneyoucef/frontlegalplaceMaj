import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';
import { Compte } from '../model/compte';
import {Router} from "@angular/router"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  compte: Compte = new Compte();
  constructor(private http:Http,private router: Router ) { } 

  ngOnInit() {
  }


  connect(){
    this.http.get("http://localhost:8080/compte/connect/"+this.compte.email)
    .map(resp => resp.json()) 
      .subscribe(data => {  
       this.router.navigate(['/todo'])
      }, err => {
        console.log(err);
      });
  }
}
