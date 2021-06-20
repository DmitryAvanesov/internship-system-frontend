import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { CompaniesListItemComponent } from './companies-list-item.component'

describe('CompaniesListItemComponent', () => {
    let component: CompaniesListItemComponent
    let fixture: ComponentFixture<CompaniesListItemComponent>

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CompaniesListItemComponent],
                imports: [IonicModule.forRoot()],
            }).compileComponents()

            fixture = TestBed.createComponent(CompaniesListItemComponent)
            component = fixture.componentInstance
            fixture.detectChanges()
        })
    )

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
