import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import employees from '../data/employees.json';
import departments from '../data/departments.json';
import { Employee } from '../interfaces/employee.model';
import { Department } from '../interfaces/department.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public getEmployees(): Observable<Array<Employee>> {
    return of(employees);
  }

  public getDepartments(): Observable<Array<Department>> {
    return of(departments);
  }
}
