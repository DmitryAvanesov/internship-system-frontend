import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-student-chips',
    templateUrl: './student-chips.component.html',
    styleUrls: ['./student-chips.component.scss'],
})
export class StudentChipsComponent {
    @Input() title: string
}
