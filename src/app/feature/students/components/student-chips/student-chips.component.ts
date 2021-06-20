import { Component, Input, OnInit } from '@angular/core';
import {applicationColors} from '@core/consts/applicationColors';

@Component({
  selector: 'app-student-chips',
  templateUrl: './student-chips.component.html',
  styleUrls: ['./student-chips.component.scss'],
})
export class StudentChipsComponent implements OnInit {
  @Input() title: string;
  @Input() chipsList: string[];

  colors = applicationColors;

  constructor() {}

  ngOnInit() {}
}
