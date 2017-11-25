import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
  fortyFives = 0;
  twentyFives = 0;
  tens = 0;
  fives = 0;
  twoPointFives = 0;
  weight = 0;

  constructor(private fb: FormBuilder) {
  }
  calcForm = this.fb.group({
    weightCalculate: ['', Validators.required]
  });

  swapContentHome() {
    if (this.home = true) {
      this.home = true;
      this.bio = false;
      this.resume = false;
      this.contact = false;
    }
  }

  swapContentBio() {
    if (this.bio = true) {
      this.bio = true;
      this.home = false;
      this.resume = false;
      this.contact = false;
    }
  }

  swapContentResume() {
    if (this.resume = true) {
      this.resume = true;
      this.bio = false;
      this.home = false;
      this.contact = false;
    }
  }

  swapContentContact() {
    if (this.contact = true) {
      this.contact = true;
      this.bio = false;
      this.home = false;
      this.resume = false;
    }
  }


  calculateWeight() {

    let weight = this.calcForm.controls.weightCalculate.value;

    weight -= 45;

    while (weight > 0) {
      if (weight >= 90) {
        weight = weight - 90;
        this.fortyFives += 2;
      } else if (weight >= 50) {
        weight = weight - 50;
        this.twentyFives += 2;
      } else if (weight >= 20) {
        weight = weight - 20;
        this.tens += 2;
      } else if (weight >= 10) {
        weight = weight - 10;
        this.fives += 2;
      } else if (weight >= 5) {
        weight = weight - 5;
        this.twoPointFives += 2;
      }
    } this.calcForm.updateValueAndValidity();
  }

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
