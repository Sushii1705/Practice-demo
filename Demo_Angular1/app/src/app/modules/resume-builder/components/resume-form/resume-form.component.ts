import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Resumedata } from 'src/app/modules/user/models/user.model';
import { ResumeService } from '../../resume.service';
import { Resumedata } from '../../resumemodel/resume.model';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {
  // skills:FormArray;
  // technical:FormArray;
  // experience:FormArray;
  // resumeform={} as FormGroup;
  // resumedata:Resumedata;

  resumeform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeservice: ResumeService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.createform();
  }

  formarrayfunc(array: string): FormArray {
    return this.resumeform.controls[array] as FormArray;
  }

  createform() {
    this.resumeform = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      mobileno: [, [Validators.required, Validators.min(10)]],
      profile: ['', Validators.required],
      skills: this.fb.array([]),
      technical: this.fb.array([]),
      experience: this.fb.array([]),
    });
  }

  addskills() {
    this.formarrayfunc('skills').push(
      this.fb.group({
        skill: [''],
      })
    );
  }

  removeskills(i: number) {
    this.formarrayfunc('skills').removeAt(i);
  }
  get getvalue() {
    return this.resumeform['controls'];
  }

  saveresumedata() {
    console.log(this.resumeform);
    if (this.resumeform.status === 'VALID') {
      this.resumeservice.deletedata(1).subscribe(() => {
        this.resumeservice
        .addresumedata(this.resumeform.value)
        .subscribe((res: Resumedata) => {
          alert('data uploaded');

      })   
        });
      this.route.navigate(['/resume/resume-view']);
    } else {
      alert('wrong wrong!');
    }
  }
}
