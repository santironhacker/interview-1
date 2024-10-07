import { Department } from "./department.model"

export interface Employee {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    departments: Array<Department>
}
