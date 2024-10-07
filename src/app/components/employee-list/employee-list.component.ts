import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, catchError, combineLatestWith, debounceTime, map, Observable, of, tap } from 'rxjs';
import { Constants } from '../../constants';
import { Department } from '../../interfaces/department.model';
import { Employee } from '../../interfaces/employee.model';
import { DepartmentPipe } from '../../pipes/department.pipe';
import { ApiService } from '../../services/api.service';
import { EmployeeFilterService } from '../../services/employee-filter.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, DepartmentPipe, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {
  filteredEmployeesList$: Observable<Array<Employee>> = of([]);
  departmentsList$: Observable<Array<Department>> = of([]);

  departmentIdSubject$ = new BehaviorSubject<string>(Constants.EMPTY_STRING);
  private searchSubject$ = new BehaviorSubject<string>(Constants.EMPTY_STRING);

  constructor(
    private readonly apiService: ApiService,
    private readonly employeesFilterService: EmployeeFilterService,
  ) { }

  ngOnInit(): void {
    const employeesList$: Observable<Array<Employee>> = this.apiService.getEmployees()
      .pipe(catchError(error => {
        console.error('Error fetching employees:', error);
        return of([]);
      }));

    this.filteredEmployeesList$ = this.searchSubject$.pipe(
      debounceTime(Constants.DEBOUNCE_TIME),
      combineLatestWith(employeesList$, this.departmentIdSubject$),
      map(([searchText, employeesList, department]: [string, Array<Employee>, string]) => {
        return employeesList
          .filter((employee: Employee) => {
            return this.employeesFilterService.filterByDepartment(employee, department)
              && this.employeesFilterService.filterByKeys(employee, searchText);
          })
      })
    );

    this.departmentsList$ = this.apiService.getDepartments()
      .pipe(
        tap((departments: Array<Department>) => {
          if (departments.length > 0) {
            this.departmentIdSubject$.next(departments[0].id);
          }
        }),
        catchError(error => {
          console.error('Error fetching deparments:', error);
          return of([]);
        })
      );
  }

  handleSearchInput(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement | null;

    if (inputElement) {
      this.searchSubject$.next(inputElement.value);
    }
  }

  handleDepartmentSelection(departmentId: string) {
    this.departmentIdSubject$.next(departmentId);
  }
}
