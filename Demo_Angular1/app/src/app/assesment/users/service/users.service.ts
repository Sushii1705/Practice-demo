import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/modules/user/models/user.model';
import { environment } from 'src/environments/environment';
import { usersdata } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apilink = environment.baseURl;

  constructor(private http:HttpClient) { }
  // add data to usersdata
  addusers(data:usersdata[]):Observable<usersdata[]>{
    return this.http.post<usersdata[]>(`${this.apilink}/usersdata`,data)
  }
  getuserslist():Observable<usersdata[]>{
    return this.http.get<usersdata[]>(`${this.apilink}/usersdata`);
  }
  getuser(id: number):Observable<usersdata>{
    return this.http.get<usersdata>(`${this.apilink}/usersdata/${id}`)

  }
  edituser(users: usersdata):Observable<usersdata>{
    return this.http.put<usersdata>(`${this.apilink}/usersdata/${users.id}`,users)
  }
  deleteuser(id:number):Observable<usersdata[]>{
    return this.http.delete<usersdata[]>(`${this.apilink}/usersdata/${id}`)
  }

  getdepartlist(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apilink}/departmentlist`)

  }
}
