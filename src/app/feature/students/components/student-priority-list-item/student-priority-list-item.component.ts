import { Component, Input } from '@angular/core';
import { CompanyModel } from '@store/companies/models/company.model';

@Component({
  selector: 'app-student-priority-list-item',
  templateUrl: './student-priority-list-item.component.html',
  styleUrls: ['./student-priority-list-item.component.scss'],
})
export class StudentPriorityListItemComponent {
  @Input() company: CompanyModel;
}
