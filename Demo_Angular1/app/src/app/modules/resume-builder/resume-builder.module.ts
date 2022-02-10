import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeService } from './resume.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [
    ResumeService
  ]
})
export class ResumeBuilderModule { }
