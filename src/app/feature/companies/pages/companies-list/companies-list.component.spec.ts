import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { CompaniesListComponent } from './companies-list.component'

describe('CompaniesListComponent', () => {
    let component: CompaniesListComponent
    let fixture: ComponentFixture<CompaniesListComponent>

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CompaniesListComponent],
                imports: [IonicModule.forRoot()],
            }).compileComponents()

            fixture = TestBed.createComponent(CompaniesListComponent)
            component = fixture.componentInstance
            fixture.detectChanges()
        })
    )

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
