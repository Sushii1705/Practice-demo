import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userdata } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  userdata: userdata[] = [];
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getData();   
  }
  getData() {
    this.service.getuserlist().subscribe((res: userdata[]) => {
      this.userdata = res;
    });
  }

  editUser(id: number) {
    this.router.navigateByUrl(`/user/edit/${id}`);
  }

  deleteuser(id:number){
    this.service.deleteuser(id).subscribe(res=>{
      alert('delete data');
      this.getData();   
    });
  }
  getdeptdata(){
    
  }
}
