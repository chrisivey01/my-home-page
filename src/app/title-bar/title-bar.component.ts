import { Component, OnInit } from '@angular/core';
import $ from 'jquery';



@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  home = false;
  bio = false;
  resume = false;
  contact = false;
  myDate: Date;


  ngOnInit() {
    this.time();
  }

  time() {
    setInterval(() => {
      this.myDate = new Date();
     // console.log(this.myDate); // just testing if it is working
    }, 1000);
  }
}
