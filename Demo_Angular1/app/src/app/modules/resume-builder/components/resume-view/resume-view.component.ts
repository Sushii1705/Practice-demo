import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ResumeService } from '../../resume.service';
import { Resumedata } from '../../resumemodel/resume.model';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnInit {
  resumedata: Resumedata;

  constructor(private service: ResumeService) {}

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.service.getresumedata(1).subscribe((res) => {
      this.resumedata = res;
    });
  }
}
