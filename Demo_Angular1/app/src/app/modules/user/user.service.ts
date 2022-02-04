import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
     
@Injectable({
  providedIn: 'root'
})
export class UserService {

  requestUrl = environment.baseURl;
  constructor(private httpRequest:HttpClient) { }
  creatUser(post:any):Observable<any>{
    
    return this.httpRequest.post(`${this.requestUrl}/posts`,post)
  }
 
}

