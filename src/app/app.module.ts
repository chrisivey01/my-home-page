import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule,
  MatSelectModule, MatToolbarModule, MatDialogModule} from '@angular/material';
import {MomentModule} from 'angular2-moment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { GymCalcComponent } from './gym-calc/gym-calc.component';

const appRoutes: Routes = [
  { path: 'resume',
    component: ResumeComponent
  },
  { path: 'bio',
    component: BioComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    ResumeComponent,
    BioComponent,
    HomeComponent,
    GymCalcComponent
  ],
  entryComponents: [GymCalcComponent],
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
    MatDialogModule,
    MomentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [TitleBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
