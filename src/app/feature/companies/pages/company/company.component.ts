import { Component, OnInit } from '@angular/core'
import { StudentModel } from '@store/students/models/student.model'

interface MockSpecialization {
    id: string
    name: string
    isOpen: boolean
}

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
    specializations: MockSpecialization[] = [
        {
            id: '1',
            name: 'Specialization 1',
            isOpen: true,
        },
        {
            id: '2',
            name: 'Specialization 2',
            isOpen: false,
        },
    ]
    students: StudentModel[] = [
        {
            id: '1',
            userName: 'Ivan',
            score: Math.round(Math.random() * 500) / 100,
        },
        {
            id: '2',
            userName: 'Ivan',
            score: Math.round(Math.random() * 500) / 100,
        },
        {
            id: '3',
            userName: 'Ivan',
            score: Math.round(Math.random() * 500) / 100,
        },
    ]

    toggleSpecialization(id: string) {
        const specializationIndex = this.specializations.findIndex(
            (el) => el.id === id
        )
        if (specializationIndex !== -1) {
            const newSpecializations = [...this.specializations]
            newSpecializations[specializationIndex] = {
                ...newSpecializations[specializationIndex],
                isOpen: !newSpecializations[specializationIndex].isOpen,
            }
            this.specializations = newSpecializations
        }
    }
}
