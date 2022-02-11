import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../modules/user/models/user.model';


@Pipe({
  name: 'depart'
})
export class DepartPipe implements PipeTransform {

  transform(value: number, departs: Department[]): string | undefined{
    return departs?.find(m => m.id == value)?.name;
  }

}
