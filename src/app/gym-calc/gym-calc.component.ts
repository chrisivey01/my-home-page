///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-gym-calc',
  templateUrl: './gym-calc.component.html',
  styleUrls: ['./gym-calc.component.css']
})
export class GymCalcComponent implements OnInit {
  fortyFives = 0;
  twentyFives = 0;
  tens = 0;
  fives = 0;
  twoPointFives = 0;


  constructor(private fb: FormBuilder) {
  }
  calcForm = this.fb.group({
    weightCalculate: ['', Validators.required]
  });

  calculateWeight() {

    this.fortyFives = 0;
    this.twentyFives = 0;
    this.tens = 0;
    this.fives = 0;
    this.twoPointFives = 0;

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
    }
  }


  ngOnInit() {
  }

}
