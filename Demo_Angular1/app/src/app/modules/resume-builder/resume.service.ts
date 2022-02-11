import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resumedata } from './resumemodel/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  urlLink: string;

  constructor(private http: HttpClient) {
    this.urlLink = environment.baseURl;
  }

  addresumedata(data: Resumedata): Observable<Resumedata> {
    debugger;
    return this.http.post<Resumedata>(`${this.urlLink}/resumedata`, data);
  }
  getresumedata(id:number): Observable<Resumedata> {
    return this.http.get<Resumedata>(`${this.urlLink}/resumedata/${id}`);
  }

  deletedata(id:number): Observable<Resumedata>{
    return this.http.delete<Resumedata>(`${this.urlLink}/resumedata/${id}`,)
  }
}
