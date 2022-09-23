import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-three',
  templateUrl: './week-three.component.html',
  styleUrls: ['./week-three.component.css']
})
export class WeekThreeComponent implements OnInit {

  constructor() {
  }

  dateNow: Date = new Date();

  ngOnInit(): void {
  }

}
