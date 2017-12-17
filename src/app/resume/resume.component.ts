import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume = false;
  bio = false;
  home = false;
  contact = false;
  constructor() { }

  swapContentResume() {
    if (this.resume = true) {
      this.resume = true;
      this.bio = false;
      this.home = false;
      this.contact = false;
    }
  }
  ngOnInit() {
  }

}
