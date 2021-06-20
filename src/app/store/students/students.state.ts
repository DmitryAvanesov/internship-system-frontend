import { EntityState } from '@ngrx/entity'
import { StudentModel } from './models/student.model'

export interface StudentsState extends EntityState<StudentModel> {
    studentsLoading: boolean
}
