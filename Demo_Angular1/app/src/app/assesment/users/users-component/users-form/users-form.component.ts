import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/modules/user/models/user.model';
import { usersdata } from '../../model/users.model';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  usersform = {} as FormGroup;
  userstoedit:number;
  usersdepart: Department[];


  constructor(
    private fbuild:FormBuilder,
    private usersservice:UsersService,
    private route:Router,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usersform =  this.createform();
    this.createform();
    this.userstoedit= this.activeRoute.snapshot.params['id'];
    if(this.userstoedit){
      this.getusersById(this.userstoedit)
    }

  }
  getusersById(id:number):void{
    this.usersservice.getuser(id).subscribe((users)=>{
      this.usersform.patchValue(users)
    })  }
    formarrayfunc(array: string): FormArray{
      return this.usersform.controls[array] as FormArray;
    }
  createform(){
    return this.fbuild.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      mobile:['',[Validators.min(10),Validators.required]],
      department:['']
    })
  }
  addaddress(){
    this.formarrayfunc('address').push(
      this.fbuild.group({
        address:['']
      })
    )
  }

  get getvalue() {
    return this.usersform['controls']

  }

  onadd(){
    // alert('heloo');
    // console.log(this.usersform)
    // this.usersservice.addusers(this.usersform.value).subscribe((res:usersdata[]) => {
    //   alert('data uploaded')
    // });
    // this.route.navigate(['/users/users-list']);
    if(this.userstoedit){
      this.usersservice.edituser({id:this.userstoedit, ...this.usersform.value}).subscribe((res:usersdata)=>{
        alert('data has been uploaded');
      });
    }else{
      this.usersservice.addusers(this.usersform.value).subscribe((res:usersdata[])=>{
        alert('data has been uploaded');
      });
    }
    this.route.navigate(['/users/users-list']);
  }

  onclear(){
    this.usersform.reset();
    // this.route.navigate(['/users/users-list'])
  }

  getdepartmentlist(){
    this.usersservice.getdepartlist().subscribe((res) => {
      this.usersdepart = res;
    })
  }
}
