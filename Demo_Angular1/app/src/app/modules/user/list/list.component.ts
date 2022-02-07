import { Component, OnInit } from '@angular/core';
import { userdata } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  userdata: userdata[] = [];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.getData();
    console.log(this.userdata);
    
  }
  getData() {
    this.service.getuserlist().subscribe((res: userdata[]) => {
      console.log(res)
      this.userdata = res;
    });
  }
}
