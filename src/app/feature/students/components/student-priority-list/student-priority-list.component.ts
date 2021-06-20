import { Component, Input } from '@angular/core';
import { CompanyModel } from '@store/companies/models/company.model';

@Component({
  selector: 'app-student-priority-list',
  templateUrl: './student-priority-list.component.html',
  styleUrls: ['./student-priority-list.component.scss'],
})
export class StudentPriorityListComponent {
  @Input() companies: CompanyModel[];
}
