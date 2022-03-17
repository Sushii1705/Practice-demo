import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../model';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  private fb: FormBuilder;

  constructor() { }
  
  buildForm() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  onSubmit(userform : FormGroup){
    console.log(userform.value);
  }
}
