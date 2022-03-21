import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { user } from './model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public sub= new Subject<string>();
  
  public subject:Subject<user>;
  public editData:Subject<user>;

  constructor() { 
    this.subject = new Subject<user>();
    this.editData=new Subject<user>();
  }
  

 
}
