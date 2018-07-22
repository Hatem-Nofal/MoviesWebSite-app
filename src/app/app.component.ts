import {Component} from '@angular/core';
import {OnInit} from "@angular/core";

import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HomeComponent]
})
export class AppComponent implements OnInit{

  constructor(private movielist: HomeComponent  ){}
  // login = false;


  login(){
    console.log("adding form values ");

  }
  ngOnInit() {
  }

}
