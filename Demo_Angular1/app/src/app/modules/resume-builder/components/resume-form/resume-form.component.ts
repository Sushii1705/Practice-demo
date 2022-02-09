import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  resumeform={} as FormGroup;


  constructor(private fb :FormBuilder,) { }

  ngOnInit(): void {
  }
  createform(){
    return this.fb.group({
      name: ['',Validators.required],
      designation: ['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      mobileno:[,[Validators.required,Validators.min(10)]],
      profile:['',Validators.required]
      // skills: ['',]
    })
  }

}
