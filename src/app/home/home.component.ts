import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {GymCalcComponent} from '../gym-calc/gym-calc.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dialogRef: MatDialogRef<GymCalcComponent>;


  constructor( public dialog: MatDialog) { }


  openDialog() {
    if (this.dialogRef == null) {
      this.dialogRef = this.dialog.open(GymCalcComponent, {
        height: '225px',
        width: '200px'
      });

      this.dialogRef.updatePosition({top: '8%', left: '30%'});
    }
  }

  ngOnInit() {
  }

}
