import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm={} as FormGroup;

  constructor(private fb:FormBuilder,private userService:UserService) { 
    
  }

  ngOnInit(): void {
    this.userForm = this.genrateForm();
    this.genrateForm();
  }
  genrateForm(){
     return this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: [,Validators.required],
      number: [null,[Validators.required,Validators.min(10)]],
      Male: [true,Validators.required],
      Female: [true,Validators.required],
      
    });
  }
  addUser(){
    
     this.userService.creatUser;
  }


}
