import { Component, OnInit } from '@angular/core';
import { user } from '../model';
import { SubjectService } from '../subject.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  userlist:user[] = [];
  userId: number;
  constructor(private subject:SubjectService) { }

  ngOnInit(): void {
     this.getdata();
    this.getlist();
 }
  getdata(){
    this.subject.subject.subscribe((res) => {
      console.log(this.userId);

      if(this.userId>=0){
        this.userlist[this.userId] = res;
      }
      else{
        this.userlist.push(res)
      }
    })
  }
  getlist(){
    this.subject.sub.subscribe((res) => {alert(res)})
  }
  deleteuser(id: number) {
    return this.userlist.splice(id,1);

    
  }
  edituser(id:number){
    alert(`lol0${id}`)
    this.userId=id;
    this.subject.editData.next(this.userlist[id]);
  }
}


