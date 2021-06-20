import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentPriorityListItemComponent } from './student-priority-list-item.component';

describe('StudentPriorityListItemComponent', () => {
  let component: StudentPriorityListItemComponent;
  let fixture: ComponentFixture<StudentPriorityListItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StudentPriorityListItemComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(StudentPriorityListItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
