import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriorityStudentsListItemComponent } from './priority-students-list-item.component';

describe('PriorityStudentsListItemComponent', () => {
  let component: PriorityStudentsListItemComponent;
  let fixture: ComponentFixture<PriorityStudentsListItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PriorityStudentsListItemComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(PriorityStudentsListItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
