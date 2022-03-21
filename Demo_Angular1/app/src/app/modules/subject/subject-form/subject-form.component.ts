import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  subjectForm:FormGroup;
  

  
  constructor(private fb: FormBuilder,private subservice:SubjectService) { }
  
  buildForm() {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required ],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.subjectForm = this.buildForm();
    this.subservice.editData.subscribe(res => this.subjectForm.patchValue(res));
    
  }


  onSubmit(){
    this.subservice.subject.next(this.subjectForm.value)
    this.subjectForm.reset();
  }
  editdata() {
    
  
  }
  // onPress() {
  //   this.subservice.sub.next ('gghfhgjfjgfj');
  // }
}
