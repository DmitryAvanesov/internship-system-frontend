import { createAction, props } from '@ngrx/store'
import { StudentModel } from './models/student.model'

export const loadStudents = createAction('[Students] Load students')
export const studentsLoaded = createAction(
    '[Students] Students loaded',
    props<{ students: StudentModel[] }>()
)
