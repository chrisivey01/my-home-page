import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule,
  MatSelectModule, MatToolbarModule} from '@angular/material';
import {MomentModule} from 'angular2-moment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MomentModule
  ],
  providers: [TitleBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
