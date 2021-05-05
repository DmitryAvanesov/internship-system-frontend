import {Component, Input, OnInit} from '@angular/core';
import {StudentModel} from '@store/students/models/student.model';

@Component({
  selector: 'app-priority-students-list-item',
  templateUrl: './priority-students-list-item.component.html',
  styleUrls: ['./priority-students-list-item.component.scss'],
})
export class PriorityStudentsListItemComponent implements OnInit {
  @Input() student: StudentModel;
  constructor() { }

  ngOnInit() {}

}
