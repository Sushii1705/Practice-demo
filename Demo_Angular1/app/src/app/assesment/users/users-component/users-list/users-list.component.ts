import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/modules/user/models/user.model';
import { usersdata } from '../../model/users.model';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  createbutton: string='+create'
  usersdata: usersdata[] = [];
  usersform: FormGroup;
  items:FormArray;
  searchtext:string;
  departmentlists:Department[] = [];
  departmentsearch:string;
  

  constructor(private router:Router,private service:UsersService,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getdepartdata();
    this.getdata();
    this.usersform = new FormGroup({
      items: new FormArray([
        this.createaddress()
      ]),
    });
  }
  // list to form navigation
  oncreate(){
    this.createbutton = '+create'
    this.router.navigate(['/users/users-form'])
  }
  // formarrayfunc(array: string): FormArray {
  //   return this.usersform.controls[array] as FormArray;
  // }
 
  getdepartdata(){
    this.service.getdepartlist().subscribe((res) => {
      this.departmentlists =res;
    })
    
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
  // addaddress() {
  //   this.formarrayfunc('address').push(
  //     this.fb.group({
  //       address: [''],
  //     })
  //   );
  // }
  get getvalue() {
    return this.usersform['controls']

  }
  createaddress(): FormGroup{
    return this.fb.group({
      address: '',
      
    });

  }
  get getArray(){
    return  this.usersform.get('items') as FormArray;
  }
  addaddress() : void{
    this.items = this.usersform.get('items') as FormArray;
    this.items.push(this.createaddress());
  }
  deleteaddress(id:number) {
    this.getArray.removeAt(id)
  }

  // get getdeletearray (){
  //   return this.deleteaddress['controls'];
  // }
searchname(){
 
}

}
