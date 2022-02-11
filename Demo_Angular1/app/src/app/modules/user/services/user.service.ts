import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, userdata } from '../models/user.model';
     
@Injectable({
  providedIn: 'root'
})
export class UserService {

  requestUrl = environment.baseURl;
  
  constructor(private httpRequest:HttpClient) { }
  //add data to userdata
  addUser(data:userdata[]):Observable<userdata[]>{
    return this.httpRequest.post<userdata[]>(`${this.requestUrl}/userdata`,data);
  }
  getuserlist(): Observable<userdata[]> {
    return this.httpRequest.get<userdata[]>(`${this.requestUrl}/userdata`);
  }
  getUser(id: number): Observable<userdata> {
    return this.httpRequest.get<userdata>(`${this.requestUrl}/userdata/${id}`);
  }
  updateUser(user: userdata): Observable<userdata> {
    return this.httpRequest.put<userdata>(`${this.requestUrl}/userdata/${user.id}`, user);
  }
  deleteuser(id: number):Observable<userdata[]> {
    return this.httpRequest.delete<userdata[]>(`${this.requestUrl}/userdata/${id}`);
  }
  getdepartmentlist(): Observable<Department[]> {
    return this.httpRequest.get<Department[]>(`${this.requestUrl}/departments`)
  }
}