import { Component, Input } from '@angular/core'
import { StudentModel } from 'src/app/store/students/models/student.model'

@Component({
    selector: 'app-students-list-item',
    templateUrl: './students-list-item.component.html',
    styleUrls: ['./students-list-item.component.scss'],
})
export class StudentsListItemComponent {
    @Input() student: StudentModel
}
