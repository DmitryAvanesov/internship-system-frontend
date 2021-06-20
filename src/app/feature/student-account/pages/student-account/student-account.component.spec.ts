import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { StudentAccountComponent } from './student-account.component'

describe('StudentAccountComponent', () => {
    let component: StudentAccountComponent
    let fixture: ComponentFixture<StudentAccountComponent>

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [StudentAccountComponent],
                imports: [IonicModule.forRoot()],
            }).compileComponents()

            fixture = TestBed.createComponent(StudentAccountComponent)
            component = fixture.componentInstance
            fixture.detectChanges()
        })
    )

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
