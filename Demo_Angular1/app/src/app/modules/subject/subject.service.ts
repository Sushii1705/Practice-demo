import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { user } from './model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public subject = new Subject<user>();

  constructor() { }
  // for sending data
  passdata(user:user) {
    this.subject.next(user)

  }
}
