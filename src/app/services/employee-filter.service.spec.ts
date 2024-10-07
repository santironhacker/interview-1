import { Employee } from "../interfaces/employee.model";
import { EmployeeFilterService } from "./employee-filter.service";

describe('EmployeeFilterService', () => {
    let service: EmployeeFilterService;
    const employee: Employee = {
        "id": "6693c92b7a764d7b9012511f",
        "firstName": "Norton",
        "lastName": "Oliver",
        "email": "nortonoliver@xylar.com",
        "phone": "+1 (921) 418-2909",
        "address": "237 Lott Street, Woodruff, Alabama, 3383",
        "departments": [
            {
                "id": "engineering",
                "name": "Engineering"
            },
            {
                "id": "product",
                "name": "Product"
            }
        ]
    };

    beforeEach(() => {
        service = new EmployeeFilterService();
    })

    describe('filterByKeys', () => {
        it('it should filter by firstName', () => {
            // GIVEN
            const filter = 'ton';

            // WHEN
            const isFiltered = service.filterByKeys(employee, filter);

            // THEN
            expect(isFiltered).toBeTrue();
        });

        it('it should filter by email', () => {
            // GIVEN
            const filter = 'liver'

            // WHEN
            const isFiltered = service.filterByKeys(employee, filter);

            // THEN
            expect(isFiltered).toBeTrue();
        });
    });
});
