import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  test1;
  test2;
  answer;
  addSign;
  subtractSign;
  multiplySign;
  divideSign;


  constructor() { }

  ngOnInit() {

  }

  addPicker() {
    if ($('#add').prop('checked')) {
      $('#addSign').show();
      $('#minusSign').hide();
      $('#multiplySign').hide();
      $('#divideSign').hide();
    }
  }

  minusPicker() {
    if ($('#subtract').prop('checked')) {
      $('#addSign').hide();
      $('#minusSign').show();
      $('#multiplySign').hide();
      $('#divideSign').hide();
    }
  }
  multiplyPicker() {
    if ($('#multiply').prop('checked')) {
      $('#addSign').hide();
      $('#minusSign').hide();
      $('#multiplySign').show();
      $('#divideSign').hide();
    }
  }
  dividePicker() {
    if ($('#divide').prop('checked')) {
      $('#addSign').hide();
      $('#minusSign').hide();
      $('#multiplySign').hide();
      $('#divideSign').show();
    }
  }
  picker() {
    if ($('#add').prop('checked')) {
      this.sum();
    } if ($('#subtract').prop('checked')) {
      this.subtract();
    } if($('#multiply').prop('checked')){
      this.multiply();
    }if($('#divide').prop('checked')){
      this.divide();
    }
  }
  sum() {
    this.test1 = $('#test1').val();
    this.test2 = $('#test2').val();


    this.answer = (Number(this.test1)) + (Number(this.test2));
  }

  subtract() {
    this.test1 = $('#test1').val();
    this.test2 = $('#test2').val();

    this.answer = (Number(this.test1)) - (Number(this.test2));
  }

  multiply() {
    this.test1 = $('#test1').val();
    this.test2 = $('#test2').val();

    this.answer = (Number(this.test1)) * (Number(this.test2));
  }

  divide() {
    this.test1 = $('#test1').val();
    this.test2 = $('#test2').val();

    this.answer = (Number(this.test1)) / (Number(this.test2));
  }

}
