import { Injectable } from "@angular/core";
import { Employee } from "../interfaces/employee.model";
import { Department } from "../interfaces/department.model";

@Injectable({
    providedIn: 'root'
})
export class EmployeeFilterService {
    filterByKeys(employee: Employee, filter: string): boolean {
        return employee.firstName.includes(filter)
            || employee.lastName.includes(filter)
            || employee.lastName.includes(filter)
            || employee.email.includes(filter)
            || employee.phone.includes(filter)
            || employee.address.includes(filter)
    }

    filterByDepartment(employee: Employee, filter: string): boolean {
        return employee.departments
            .map((department: Department) => {
                return department.id
            })
            .includes(filter);
    }
}
