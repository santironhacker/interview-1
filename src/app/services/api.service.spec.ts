import { of } from 'rxjs';
import { Employee } from '../interfaces/employee.model';
import { ApiService } from './api.service';
import employees from '../data/employees.json';

describe('ApiService', () => {
  let service: ApiService;
  const mockEmployees: Array<Employee> = [
    ...employees
  ];

  beforeEach(() => {
    service = new ApiService();
  });

  describe('getEmployees', () => {
    it('should return a stream of employees', () => {
      // GIVEN
      spyOn(service, 'getEmployees').and.returnValue(of(mockEmployees));

      // WHEN
      let fetchedData: Array<Employee> = []
      service.getEmployees().subscribe((response) => {
        fetchedData = response;
      });

      // THEN
      expect(fetchedData).toEqual(mockEmployees);
    });
  });
});
