import { createEntityAdapter } from '@ngrx/entity'
import { StudentModel } from './models/student.model'
import { createReducer, on } from '@ngrx/store'
import { StudentsState } from './students.state'
import { studentsLoaded, loadStudents } from './students.actions'

export const studentsAdapter = createEntityAdapter<StudentModel>()

const initialState: StudentsState = studentsAdapter.getInitialState({
    studentsLoading: false,
})

export const studentsReducer = createReducer<StudentsState>(
    initialState,
    on(loadStudents, (state) => ({ ...state, studentsLoading: true })),
    on(studentsLoaded, (state, { students }) =>
        studentsAdapter.setAll(students, { ...state, studentsLoading: false })
    )
)
