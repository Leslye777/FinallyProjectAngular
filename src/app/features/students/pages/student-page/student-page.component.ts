import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  constructor() { }

  user:any;
  ngOnInit(): void {
    this.user =  JSON.parse(sessionStorage.getItem('student')!);
  }

}
