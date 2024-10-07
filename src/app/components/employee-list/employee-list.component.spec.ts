import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

fdescribe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleDepartmentSelection', () => {
    it('should assign the event value to the departmentIdSubject', () => {
      // GIVEN
      const departmentId = 'sales';

      // WHEN
      component.handleDepartmentSelection(departmentId);

      // THEN
      component.departmentIdSubject$.subscribe(
        (result: string) => expect(result).toEqual(departmentId)
      );
    });
  })

});
