import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { usersdata } from '../../model/users.model';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  createbutton: string='+create'
  usersdata: usersdata[] = [];
  usersform: FormGroup;
  

  constructor(private router:Router,private service:UsersService,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getdata();
  }
  // list to form navigation
  oncreate(){
    this.createbutton = '+create'
    this.router.navigate(['/users/users-form'])
  }
  formarrayfunc(array: string): FormArray {
    return this.usersform.controls[array] as FormArray;
  }
 
  getdata(){
    this.service.getuserslist().subscribe((res:usersdata[])=>{
      this.usersdata=res;
    });
  }
  editusers(id:number){
    this.router.navigateByUrl(`/users/edit/${id}`);
  }

  deleteusers(id:number){
    this.service.deleteuser(id).subscribe(res=>{
      alert('delete data');
      this.getdata();

    });
  }
  addaddress() {
    this.formarrayfunc('address').push(
      this.fb.group({
        address: [''],
      })
    );
  }
  get getvalue() {
    return this.usersform['controls']

  }


 



}
