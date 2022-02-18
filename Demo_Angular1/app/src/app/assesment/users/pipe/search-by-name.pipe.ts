import { Pipe, PipeTransform } from '@angular/core';
import { usersdata } from '../model/users.model';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: usersdata[],searchtext:string): usersdata[] {
    if(searchtext == null ) {
      return value;
    }
    
    return value.filter((res) => {
      return res.name.toLowerCase().match(searchtext.toLowerCase())
    })
  }

}
