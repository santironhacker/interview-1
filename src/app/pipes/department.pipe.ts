import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../interfaces/department.model';

@Pipe({
  name: 'department',
  standalone: true
})
export class DepartmentPipe implements PipeTransform {

  transform(elements: Array<Department>, ...args: unknown[]): string {
    return elements.map(department => {
      return department.name;
    }).join(', ');
  }
}
