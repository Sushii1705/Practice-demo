import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { userdata } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm={} as FormGroup;

  constructor(private fb:FormBuilder,private userService:UserService, private route: Router) { 
    
  }

  ngOnInit(): void {
    this.userForm = this.genrateForm();
    this.genrateForm();
  }
  genrateForm(){
     return this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: [,Validators.required],
      number: ['',[Validators.required,Validators.min(10)]],
      gender: ['']
    });
  }
  saveUserData(){  
    this.userService.addUser(this.userForm.value).subscribe((res:userdata) =>{
      alert('data has been uploded');
    });
    this.route.navigate(['/user/user-list'])
  }
  resetForm(){
    this.userForm.reset();
  }


  

}
